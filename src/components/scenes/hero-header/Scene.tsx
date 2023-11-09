'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import PixalatedImage from '@/components/scenes/hero-header/PixalatedImage'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'

const FRUSTUM_SIZE = 1
const CANVAS_WIDTH = 360
const CANVAS_HEIGHT = 480

export default function HeroHeaderScene() {
  const { setCursorStatus } = useStore()

  return (
    <Canvas
      className='cursor-none'
      style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      orthographic
      camera={{
        left: FRUSTUM_SIZE / -2,
        right: FRUSTUM_SIZE / 2,
        top: FRUSTUM_SIZE / 2,
        bottom: FRUSTUM_SIZE / -2,
        near: -1000,
        far: 1000,
        zoom: 1000
      }}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      <Suspense fallback={null}>
        <PixalatedImage src='/images/portrait.webp' />
      </Suspense>
    </Canvas>
  )
}
