'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/store/store'
import type { ChildrenType } from '@/interfaces/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navBarStatus } = useStore()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis === undefined) return

    if (navBarStatus) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [lenis, navBarStatus])

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
