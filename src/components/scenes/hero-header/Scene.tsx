'use client'

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import PixalatedImage from '@/components/scenes/hero-header/PixalatedImage'

export default function HeroHeaderScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const frustumSize = 1
  const width = 360
  const height = 480

  return (
    <Canvas
      ref={canvasRef}
      style={{ width, height }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      orthographic
      camera={{
        position: [0, 0, 2],
        left: frustumSize / -2,
        right: frustumSize / 2,
        top: frustumSize / 2,
        bottom: frustumSize / -2,
        fov: 70,
        aspect: width / height,
        near: -1000,
        far: 1000,
        zoom: 1000
      }}
    >
      <Suspense fallback={null}>
        <PixalatedImage src='/images/portrait.webp' />
      </Suspense>
    </Canvas>
  )
}
