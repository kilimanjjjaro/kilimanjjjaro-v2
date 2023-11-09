'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import fragmentShader from '../../../lib/shaders/fragment.glsl'
import vertexShader from '../../../lib/shaders/vertex.glsl'

interface Props {
  src: string
}

const SIZE = 16

const MOUSE_POSITION_DEFAULT_STATE = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
  vX: 0,
  vY: 0
}

export default function Picture({ src }: Props) {
  const state = useThree()
  const mouse = useRef(MOUSE_POSITION_DEFAULT_STATE)

  const size = SIZE * SIZE
  const data = new Float32Array(4 * size)

  for (let i = 0; i < size; i++) {
    const random = Math.random()

    const index = i * 4

    data[index] = random
    data[index + 1] = random
    data[index + 2] = random
    data[index + 3] = 255
  }

  const dataTexture = new THREE.DataTexture(
    data,
    SIZE,
    SIZE,
    THREE.RGBAFormat,
    THREE.FloatType
  )

  dataTexture.magFilter = THREE.NearestFilter
  dataTexture.minFilter = THREE.NearestFilter

  dataTexture.needsUpdate = true

  useFrame(() => {
    const dataArray = dataTexture.image.data

    for (let i = 0; i < dataArray.length; i += 4) {
      dataArray[i] *= 0.95
      dataArray[i + 1] *= 0.95
      dataArray[i + 2] *= 0.95
      dataArray[i + 3] = 255
    }

    const gridMouseX = SIZE * mouse.current.x
    const gridMouseY = SIZE * (1 - mouse.current.y)
    const maxDistance = SIZE / 4

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const distance = (gridMouseX - i) ** 2 + (gridMouseY - j) ** 2
        const maxDistanceSquared = maxDistance ** 2

        if (distance < maxDistanceSquared) {
          const index = 4 * (i + SIZE * j)

          let power = maxDistance / Math.sqrt(distance)

          if (distance < 1) power = 1

          dataArray[index] += 100 * mouse.current.vX * power
          dataArray[index + 1] -= 100 * mouse.current.vY * power
          dataArray[index + 2] += 100 * mouse.current.vX * power
          dataArray[index + 3] = 255
        }
      }
    }

    mouse.current.vX *= 0.95
    mouse.current.vY *= 0.95

    dataTexture.needsUpdate = true
  })

  const uniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() },
    uTexture: { value: new THREE.TextureLoader().load(src) },
    uDataTexture: { value: dataTexture }
  }

  const handlePointMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.target === null) return

    const { width, height } = state.size

    const x = event.offsetX / width
    const y = event.offsetY / height
    const prevX = mouse.current.x
    const prevY = mouse.current.y
    const vX = prevX - x
    const vY = prevY - y

    mouse.current = { x, y, prevX, prevY, vX, vY }
  }

  return (
    <>
      <mesh onPointerMove={handlePointMove}>
        <planeGeometry args={[0.36, 0.48, 1, 1]} />
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
