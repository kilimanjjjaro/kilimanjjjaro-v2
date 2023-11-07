'use client'

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import Text from '@/components/scenes/hero-header/Text'

export default function HeroHeaderScene() {
  const [dpr, setDpr] = useState(1.5)

  return (
    <Canvas
      style={{ width: '100vw', height: '100dvh' }}
      camera={{ position: [0, 0, 5], fov: 10 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      dpr={dpr}
    >
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
      />
      <Suspense fallback={null}>
        <Text text='Future_proff' />
      </Suspense>
    </Canvas>
  )
}
