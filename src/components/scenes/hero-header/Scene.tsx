'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import DistortedImage from '@/components/scenes/hero-header/DistortedImage'

export default function HeroHeader() {
  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ zoom: 40 }}
    >
      <Suspense fallback={null}>
        <DistortedImage image='/images/portrait.webp' position={[0.4, 0, 1]} />
        <DistortedImage image='/images/portrait.webp' position={[-0.4, 0, 1]} />
      </Suspense>
    </Canvas>
  )
}
