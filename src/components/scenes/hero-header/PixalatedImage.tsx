'use client'

import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import fragmentShader from '../../lib/shaders/fragment.glsl'
import vertexShader from '../../lib/shaders/vertex.glsl'

const UNIFORMS = {
  progress: { value: 0 }
}

const Picture = () => {
  const planeMesh = useRef<THREE.Mesh>(null)
  const elapsedTime = useRef(0)

  useFrame(() => {
    if (planeMesh.current === null) return

    elapsedTime.current += 0.01

    planeMesh.current.rotation.x = 0.2 * elapsedTime.current
    planeMesh.current.rotation.y = 0.1 * elapsedTime.current
  })

  return (
    <>
      <OrbitControls enableZoom={false} />
      <mesh ref={planeMesh}>
        <planeGeometry args={[0.36, 0.48, 256, 256]} />
        <shaderMaterial
          side={THREE.DoubleSide}
          uniforms={UNIFORMS} // Uniforms are values that are passed from the application to the shader
          vertexShader={vertexShader} // Vertex shader is used to calculate the position of the vertices to create a shape
          fragmentShader={fragmentShader} // Fragment shader is used to calculate the color of each pixel
        />
      </mesh>
    </>
  )
}

export default function PixalatedImage() {
  return (
    <Canvas
      style={{ width: '100vw', height: '100dvh' }}
      camera={{ position: [0, 0, 5], fov: 10 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <Suspense fallback={null}>
        <Picture />
      </Suspense>
    </Canvas>
  )
}
