'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Ripple from './Ripple'

export default function RippleScene() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0 }}
      orthographic
      camera={{
        position: [0, 0, 2],
        left: -1,
        right: 1,
        top: 1,
        bottom: -1,
        near: 0.001,
        far: 1000
      }}
    >
      <Suspense fallback={null}>
        <Ripple />
      </Suspense>
    </Canvas>
  )
}
