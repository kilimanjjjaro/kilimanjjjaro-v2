'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import NoisyBackground from '@/components/scenes/noisy-background/NoisyBackground'

export default function NoisyBackgroundScene() {
  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 2] }}
    >
      <Suspense fallback={null}>
        <NoisyBackground />
      </Suspense>
      <EffectComposer disableNormalPass>
        <Noise opacity={0.2} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </Canvas>
  )
}
