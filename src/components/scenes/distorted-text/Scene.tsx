'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import DistortedText from '@/components/scenes/distorted-text/DistortedText'

export default function DistortedTextScene() {
  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{
        position: [0, 0, 1],
        fov: 70,
        aspect: 1920 / 1080,
        near: 0.1,
        far: 1000
      }}
    >
      <Suspense fallback={null}>
        <DistortedText text='Monospace' />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.3} darkness={1} />
      </EffectComposer>
    </Canvas>
  )
}
