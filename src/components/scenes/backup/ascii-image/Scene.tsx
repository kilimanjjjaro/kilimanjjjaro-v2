'use client'

import { Canvas } from '@react-three/fiber'
import AsciiImage from '@/components/scenes/backup/ascii-image/AsciiImage'
import { Suspense } from 'react'

export default function AsciiScene() {
  return (
    <Canvas
      className='!absolute inset-0'
      orthographic
      camera={{
        left: -1,
        right: 1,
        top: 1,
        bottom: -1,
        near: -1000,
        far: 1000,
        zoom: 680
      }}
    >
      <Suspense fallback={null}>
        <AsciiImage />
      </Suspense>
    </Canvas>
  )
}
