'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import type { ChildrenType } from '@/lib/interfaces/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navBarStatus, introRunning } = useStore()
  const lenis = useLenis()

  useEffect(() => {
    const headerEl = document.querySelector('main header')

    if (lenis === undefined || headerEl === null) return

    const headerIsVisible = window.scrollY < 100

    if ((navBarStatus || introRunning) && headerIsVisible) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [lenis, navBarStatus, introRunning])

  return <ReactLenis root>{children}</ReactLenis>
}
