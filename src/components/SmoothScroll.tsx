'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import type { ChildrenType } from '@/lib/interfaces/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navbarStatus } = useStore()
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis()

  useEffect(() => {
    const headerEl = document.querySelector('main header')

    if (headerEl === null) return

    const headerIsVisible = headerEl.getBoundingClientRect().top === 0

    if (navbarStatus || headerIsVisible) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, navbarStatus])

  return (
    <ReactLenis
      root
      options={{
        lerp: 1,
        duration: isDesktop ? 2 : 1.2,
        smoothWheel: true,
        smoothTouch: true
      }}
    >
      {children}
    </ReactLenis>
  )
}
