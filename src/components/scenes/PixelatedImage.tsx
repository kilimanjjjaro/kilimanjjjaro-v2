'use client'

import { useCallback, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { clamp } from 'three/src/math/MathUtils.js'
import { PIXELATED_IMAGE_SHADERS } from '@lib/shaders/pixelated-image'
import { INITIAL_POINTER_VALUES } from '@lib/constants/general'

const GRID_SIZE = 15
const MOUSE = 0.13
const STRENGTH = 0.15
const RELAXATION = 0.96

interface Props {
  image: string
}

export default function PixelatedImage({ image }: Props) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const pointerRef = useRef(INITIAL_POINTER_VALUES)
  const imageTexture = useTexture(image)
  const imageSize = useThree((state) => state.size)

  const dataTexture = useMemo(() => {
    const width = GRID_SIZE
    const height = GRID_SIZE
    const size = width * height
    const data = new Float32Array(4 * size)

    for (let i = 0; i < size; i++) {
      const r = Math.random() * 255 - 125
      const r1 = Math.random() * 255 - 125
      const stride = i * 4

      data[stride] = r
      data[stride + 1] = r1
      data[stride + 2] = r
      data[stride + 3] = 255
    }

    const texture = new THREE.DataTexture(
      data,
      width,
      height,
      THREE.RGBAFormat,
      THREE.FloatType
    )

    texture.magFilter = THREE.NearestFilter
    texture.minFilter = THREE.NearestFilter

    texture.needsUpdate = true

    return texture
  }, [])

  const uniforms = useMemo(() => {
    return {
      uResolution: {
        value: new THREE.Vector4()
      },
      uImageTexture: {
        value: imageTexture
      },
      uDataTexture: {
        value: dataTexture
      }
    }
  }, [imageTexture, dataTexture])

  const updateDataTexture = useCallback(() => {
    const data = dataTexture.image.data

    for (let i = 0; i < data.length; i += 4) {
      data[i] *= RELAXATION
      data[i + 1] *= RELAXATION
      data[i + 3] = 255
    }

    const gridMouseX = GRID_SIZE * pointerRef.current.x
    const gridMouseY = GRID_SIZE * (1 - pointerRef.current.y)
    const maxDist = GRID_SIZE * MOUSE
    const aspect = imageSize.height / imageSize.width

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const distance = (gridMouseX - i) ** 2 / aspect + (gridMouseY - j) ** 2
        const maxDistSq = maxDist ** 2

        if (distance < maxDistSq) {
          const index = 4 * (i + GRID_SIZE * j)

          let power = maxDist / Math.sqrt(distance)
          power = clamp(power, 0, 10)

          data[index] += STRENGTH * 100 * pointerRef.current.vX * power
          data[index + 1] -= STRENGTH * 100 * pointerRef.current.vY * power
        }
      }
    }

    pointerRef.current.vX *= RELAXATION
    pointerRef.current.vY *= RELAXATION
    dataTexture.needsUpdate = true
  }, [dataTexture, imageSize])

  useEffect(() => {
    const handleResize = () => {
      if (materialRef.current === null) return

      const width = imageSize.width
      const height = imageSize.height
      const aspectRatio = 1 / 1.5
      let z: number
      let w: number

      if (height / width > aspectRatio) {
        z = (width / height) * aspectRatio
        w = 1
      } else {
        z = 1
        w = height / width / aspectRatio
      }

      materialRef.current.uniforms.uResolution.value.x = width
      materialRef.current.uniforms.uResolution.value.y = height
      materialRef.current.uniforms.uResolution.value.z = z
      materialRef.current.uniforms.uResolution.value.w = w
      dataTexture.needsUpdate = true
    }

    const handleMove = (event: PointerEvent) => {
      if (pointerRef.current === null) return

      pointerRef.current.x = event.clientX / imageSize.width
      pointerRef.current.y = event.clientY / imageSize.height

      pointerRef.current.vX = pointerRef.current.x - pointerRef.current.prevX
      pointerRef.current.vY = pointerRef.current.y - pointerRef.current.prevY

      pointerRef.current.prevX = pointerRef.current.x
      pointerRef.current.prevY = pointerRef.current.y
    }

    handleResize()

    window.addEventListener('pointermove', (event) => handleMove(event))
    window.addEventListener('resize', () => handleResize)

    return () => {
      window.removeEventListener('pointermove', (event) => handleMove(event))
      window.removeEventListener('resize', () => handleResize)
    }
  }, [imageSize, dataTexture])

  useFrame(() => {
    updateDataTexture()
    dataTexture.needsUpdate = true
  })

  return (
    <mesh>
      <planeGeometry args={[imageSize.width, imageSize.height, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={PIXELATED_IMAGE_SHADERS.fragmentShader}
        vertexShader={PIXELATED_IMAGE_SHADERS.vertexShader}
      />
    </mesh>
  )
}
