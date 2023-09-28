'use client'

import { useEffect, useState } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import type { ChildrenType } from '@/lib/interfaces/general'
import { usePathname } from 'next/navigation'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const [stopScrolling, setStopScrolling] = useState(true)
  const { navBarStatus, introRunning } = useStore()
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const headerEl = document.querySelector('main header')

    if (lenis === undefined || headerEl === null) return

    const headerIsVisible = window.scrollY < 100

    const sessionStorage = window.sessionStorage.getItem('__LOCK_SCROLL__')

    if (sessionStorage === null) {
      window.sessionStorage.setItem('__LOCK_SCROLL__', true.toString())
    } else {
      window.sessionStorage.setItem('__LOCK_SCROLL__', false.toString())
      setStopScrolling(false)
    }

    if (
      (navBarStatus || introRunning) &&
      headerIsVisible &&
      stopScrolling &&
      pathname === '/'
    ) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [lenis, navBarStatus, introRunning, stopScrolling])

  return <ReactLenis root>{children}</ReactLenis>
}
