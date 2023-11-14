import { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { DISTORTED_IMAGE_SHADERS } from '@/lib/shaders/distorted-image'
import { useFrame } from '@react-three/fiber'

const SHADER_MATERIAL = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null },
    uDistortionTexture: { value: null },
    uDistortionStrength: { value: 0 }
  },
  vertexShader: DISTORTED_IMAGE_SHADERS.vertexShader,
  fragmentShader: DISTORTED_IMAGE_SHADERS.fragmentShader,
  side: THREE.DoubleSide
})

const PLANE_GEOMETRY = new THREE.PlaneGeometry(0.36, 0.48, 1, 1)

interface Props {
  image: string
}

export default function DistortedImage({ image }: Props) {
  const { uDistortionStrength } = useControls({
    uDistortionStrength: {
      value: -2,
      min: -2,
      max: 0,
      step: 0.01
    }
  })

  const displacementTexture = useTexture('/images/displacement-map.jpg')
  const imageTexture = useTexture(image)
  const meshRef = useRef<THREE.Mesh>(null)

  useLayoutEffect(() => {
    SHADER_MATERIAL.uniforms.uDistortionTexture.value = displacementTexture
    SHADER_MATERIAL.uniforms.uTexture.value = imageTexture
  }, [displacementTexture, imageTexture])

  useEffect(() => {
    SHADER_MATERIAL.uniforms.uDistortionStrength.value = uDistortionStrength
  })

  useFrame(({ clock }) => {
    SHADER_MATERIAL.uniforms.uTime.value += 0.00005
  })

  return (
    <mesh ref={meshRef} geometry={PLANE_GEOMETRY} material={SHADER_MATERIAL} />
  )
}
