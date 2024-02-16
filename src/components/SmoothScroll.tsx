'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@lib/store/store'
import type { ChildrenType } from '@lib/types/general'

export default function SmoothScroll({ children }: { children: ChildrenType }) {
  const navbarStatus = useStore((state) => state.navbarStatus)
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
        duration: 1.5,
        smoothWheel: true,
        smoothTouch: true
      }}
    >
      {children}
    </ReactLenis>
  )
}
