'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@lib/store/store'
import useMediaQuery from '@lib/hooks/useMediaQuery'
import type { ChildrenType } from '@lib/types/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const navbarStatus = useStore((state) => state.navbarStatus)
  const { isDesktop } = useMediaQuery()
  const lenis = useLenis()

  useEffect(() => {
    if (navbarStatus) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, navbarStatus])

  return (
    <ReactLenis
      root
      options={{
        duration: isDesktop ? 1.5 : 1.2,
        smoothWheel: true,
        smoothTouch: true
      }}
    >
      {children}
    </ReactLenis>
  )
}
