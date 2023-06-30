'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

interface Props {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      {children}
    </ReactLenis>
  )
}
