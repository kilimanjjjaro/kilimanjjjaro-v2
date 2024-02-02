'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import DistortedTexture from '@components/scenes/backup/distorted-texture/DistortedTexture'

export default function DistortedTextureScene() {
  return (
    <Canvas
      className='!absolute inset-0 h-full w-full'
      camera={{
        position: [0, 0, 1000],
        fov: 97,
        near: 0.1,
        far: 3000,
        aspect: 1920 / 1080
      }}
    >
      <Suspense fallback={null}>
        <DistortedTexture image='/images/headline.png' />
      </Suspense>
    </Canvas>
  )
}
