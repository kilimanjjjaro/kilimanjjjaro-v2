'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/store/store'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: Props) {
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
    <ReactLenis root options={{ duration: 1.25 }}>
      {children}
    </ReactLenis>
  )
}
