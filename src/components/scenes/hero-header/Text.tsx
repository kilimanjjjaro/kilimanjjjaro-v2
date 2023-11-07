'use client'

import { useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import geistMonoMedium from '../../../../public/json/geist-mono-medium.json'
import fragmentShader from '../../../lib/shaders/fragment.glsl'
import vertexShader from '../../../lib/shaders/vertex.glsl'

const UNIFORMS = {
  progress: { value: 0 }
}

extend({ TextGeometry })

const fontMesh = new FontLoader().parse(geistMonoMedium)

export default function TextPlane({ text }: { text: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHover] = useState(false)

  return (
    <>
      <OrbitControls enableZoom={false} />
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <textGeometry
          args={[text, { font: fontMesh, size: 0.1, height: 0.1 }]}
        />
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
