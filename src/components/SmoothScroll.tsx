'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/store/store'
import type { ChildrenType } from '@/interfaces/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navBarStatus, introRunning } = useStore()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis === undefined) return

    if (navBarStatus || !introRunning) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [lenis, navBarStatus, introRunning])

  return (
    <ReactLenis root options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  )
}
