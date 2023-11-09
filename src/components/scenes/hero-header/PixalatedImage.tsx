'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import fragmentShader from '../../../lib/shaders/fragment.glsl'
import vertexShader from '../../../lib/shaders/vertex.glsl'

interface Props {
  src: string
}

const SIZE = 24

const MOUSE_POSITION_DEFAULT_STATE = {
  x: 0,
  y: 0,
  prevX: 0,
  prevY: 0,
  vX: 0,
  vY: 0
}

export default function Picture({ src }: Props) {
  const mousePosition = useRef(MOUSE_POSITION_DEFAULT_STATE)

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

  useFrame(({ pointer }) => {
    const dataArray = dataTexture.image.data

    for (let i = 0; i < dataArray.length; i += 4) {
      dataArray[i] *= 0.99
      dataArray[i + 1] *= 0.99
      dataArray[i + 2] *= 0.99
      dataArray[i + 3] = 255
    }

    mousePosition.current.x = pointer.x
    mousePosition.current.y = pointer.y
    mousePosition.current.vX =
      mousePosition.current.prevX - mousePosition.current.x
    mousePosition.current.vY =
      mousePosition.current.prevY - mousePosition.current.y

    mousePosition.current.prevX = mousePosition.current.x
    mousePosition.current.prevY = mousePosition.current.y

    const gridMouseX = SIZE * mousePosition.current.x
    const gridMouseY = SIZE * (1 - mousePosition.current.y)
    const maxDistance = SIZE / 4

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const distance = (gridMouseX - i) ** 2 + (gridMouseY - j) ** 2
        const maxDistanceSquared = maxDistance ** 2

        if (distance < maxDistanceSquared) {
          const index = 4 * (i + SIZE * j)

          let power = maxDistance / Math.sqrt(distance)

          if (distance < 1) power = 1

          dataArray[index] += 100 * mousePosition.current.vX * power
          dataArray[index + 1] -= 100 * mousePosition.current.vY * power
          dataArray[index + 2] += 100 * mousePosition.current.vX * power
          dataArray[index + 3] = 255
        }
      }
    }

    mousePosition.current.vX *= 0.99
    mousePosition.current.vY *= 0.99

    dataTexture.needsUpdate = true
  })

  const uniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() },
    uTexture: { value: new THREE.TextureLoader().load(src) },
    uDataTexture: { value: dataTexture }
  }

  return (
    <>
      <mesh>
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
