'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import type { ChildrenType } from '@/lib/types/globals'
import {
  DESKTOP_SMOOTH_SCROLL_DURATION,
  MOBILE_SMOOTH_SCROLL_DURATION,
  SCROLL_TOP
} from '@/lib/constants/scroll'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const { navbarStatus, introRunning } = useStore()
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis()

  useEffect(() => {
    const headerEl = document.querySelector('main header')

    if (headerEl === null) return

    const headerIsVisible = headerEl.getBoundingClientRect().top === SCROLL_TOP

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
        duration: isDesktop
          ? DESKTOP_SMOOTH_SCROLL_DURATION
          : MOBILE_SMOOTH_SCROLL_DURATION,
        smoothWheel: true
      }}
    >
      {children}
    </ReactLenis>
  )
}
