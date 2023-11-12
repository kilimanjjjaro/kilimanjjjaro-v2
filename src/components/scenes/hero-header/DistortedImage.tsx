import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { DISTORTED_IMAGE_SHADERS } from '@/lib/shaders/distorted-image'

const SHADER_MATERIAL = new THREE.ShaderMaterial({
  uniforms: {
    uTexture: { value: null },
    uDistortionTexture: { value: null }
  },
  vertexShader: DISTORTED_IMAGE_SHADERS.vertexShader,
  fragmentShader: DISTORTED_IMAGE_SHADERS.fragmentShader,
  side: THREE.DoubleSide
})

const PLANE_GEOMETRY = new THREE.PlaneGeometry(0.36, 0.48, 1, 1)

interface Props {
  image: string
  position: [number, number, number]
}

export default function DistortedImage({ image, position }: Props) {
  const displacementTexture = useTexture('/images/displacement-map.jpg')
  const imageTexture = useTexture(image)
  const meshRef = useRef<THREE.Mesh>(null)

  useLayoutEffect(() => {
    SHADER_MATERIAL.uniforms.uDistortionTexture.value = displacementTexture
    SHADER_MATERIAL.uniforms.uTexture.value = imageTexture
  }, [displacementTexture, imageTexture])

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x),
        state.pointer.y * 3,
        15 + Math.cos(state.pointer.x) * 10
      ],
      0.2,
      delta
    )

    state.camera.lookAt(0, 0, 0)
  })

  return (
    <mesh
      ref={meshRef}
      position={[...position]}
      geometry={PLANE_GEOMETRY}
      material={SHADER_MATERIAL}
    />
  )
}
