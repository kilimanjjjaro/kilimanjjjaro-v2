'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import HeaderBackground from '@/components/scenes/hero-header/HeaderBackground'

export default function HeroHeader() {
  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [1, 0, 0] }}
    >
      <Suspense fallback={null}>
        <HeaderBackground />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.08} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  )
}
