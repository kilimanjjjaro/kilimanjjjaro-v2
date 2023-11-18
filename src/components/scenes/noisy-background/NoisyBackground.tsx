import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { NOISY_BACKGROUND_SHADERS } from '@/lib/shaders/noisy-background'

const SPHERE_GEOMETRY = new THREE.SphereGeometry(2, 256, 256)

const SHADER_MATERIAL = new THREE.ShaderMaterial({
  fragmentShader: NOISY_BACKGROUND_SHADERS.fragmentShader,
  vertexShader: NOISY_BACKGROUND_SHADERS.vertexShader,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: { value: 0 }
  }
})

export default function NoisyBackground() {
  const meshRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  useFrame(({ pointer }) => {
    if (meshRef.current === null) return

    time.current += 0.0013

    SHADER_MATERIAL.uniforms.uTime.value = time.current

    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      pointer.x,
      0.0013
    )

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x,
      0.0013
    )

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y,
      0.0013
    )
  })

  return (
    <mesh ref={meshRef} geometry={SPHERE_GEOMETRY} material={SHADER_MATERIAL} />
  )
}
