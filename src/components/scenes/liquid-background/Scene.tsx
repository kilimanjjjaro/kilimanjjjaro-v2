'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import LiquidBackground from '@/components/scenes/liquid-background/LiquidBackground'

export default function LiquidBackgroundScene() {
  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [1, 0, 0] }}
    >
      <Suspense fallback={null}>
        <LiquidBackground />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.3} darkness={1} />
      </EffectComposer>
    </Canvas>
  )
}
