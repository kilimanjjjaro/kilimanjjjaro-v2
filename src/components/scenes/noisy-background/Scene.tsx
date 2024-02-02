'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import NoisyBackground from '@components/scenes/noisy-background/NoisyBackground'

export default function NoisyBackgroundScene() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      orthographic
      camera={{
        left: -1,
        right: 1,
        top: 1,
        bottom: -1,
        near: -1000,
        far: 1000
      }}
    >
      <Suspense fallback={null}>
        <NoisyBackground />
      </Suspense>
    </Canvas>
  )
}
