'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import geistMonoMedium from '../../../../public/json/geist-mono-medium.json'
import fragmentShader from '../../../lib/shaders/fragment.glsl'
import vertexShader from '../../../lib/shaders/vertex.glsl'

extend({ TextGeometry })

const fontMesh = new FontLoader().parse(geistMonoMedium)

export default function TextPlane({ text }: { text: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = {
    progress: { value: 0 }
  }

  return (
    <>
      <OrbitControls enableZoom={false} />
      <mesh ref={meshRef}>
        <textGeometry
          args={[text, { font: fontMesh, size: 0.1, height: 0.1 }]}
        />
        <shaderMaterial
          side={THREE.DoubleSide}
          uniforms={uniforms} // Uniforms are values that are passed from the application to the shader
          vertexShader={vertexShader} // Vertex shader is used to calculate the position of the vertices to create a shape
          fragmentShader={fragmentShader} // Fragment shader is used to calculate the color of each pixel
        />
      </mesh>
    </>
  )
}
