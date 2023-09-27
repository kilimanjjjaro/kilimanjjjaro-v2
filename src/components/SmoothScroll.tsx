'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import type { ChildrenType } from '@/lib/interfaces/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navBarStatus, introRunning } = useStore()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis === undefined) return

    if (navBarStatus || introRunning) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [lenis, navBarStatus, introRunning])

  return (
    <ReactLenis root>
      <div
        id='page-wrapper'
        className='transition-transform duration-[1.7s] ease-kili-in'
      >
        {children}
      </div>
    </ReactLenis>
  )
}
