'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import type { ChildrenType } from '@/lib/types/globals'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navbarStatus, introRunning } = useStore()
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis(() => {})

  useEffect(() => {
    const headerEl = document.querySelector('main header')

    if (headerEl === null) return

    const headerIsVisible = headerEl.getBoundingClientRect().top === 0

    if (navbarStatus || (headerIsVisible && introRunning)) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, navbarStatus, introRunning])

  return (
    <ReactLenis
      root
      options={{
        duration: isDesktop ? 2 : 1.2,
        smoothWheel: true
      }}
    >
      {children}
    </ReactLenis>
  )
}
