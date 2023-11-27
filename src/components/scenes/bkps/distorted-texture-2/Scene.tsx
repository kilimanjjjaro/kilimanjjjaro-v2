'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import DistortedTexture from '@/components/scenes/distorted-texture/DistortedTexture'
import { OrbitControls } from '@react-three/drei'

export default function DistortedTextureScene() {
  return (
    <Canvas
      className='!absolute inset-0 w-full h-full'
      camera={{ position: [0, 0, 1024], fov: 75 }}
    >
      <Suspense fallback={null}>
        <DistortedTexture image='/images/headline.png' />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
