import { useRef } from 'react'
import * as THREE from 'three'
import { HEADER_BACKGROUND_SHADERS } from '@/lib/shaders/liquid-background'
import { useFrame } from '@react-three/fiber'

const SPHERE_GEOMETRY = new THREE.SphereGeometry(2, 256, 256)

const SHADER_MATERIAL = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 }
  },
  fragmentShader: HEADER_BACKGROUND_SHADERS.fragmentShader,
  vertexShader: HEADER_BACKGROUND_SHADERS.vertexShader,
  side: THREE.DoubleSide
})

export default function LiquidBackground() {
  const meshRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  useFrame(({ pointer }) => {
    if (meshRef.current === null) return

    time.current += 0.001

    SHADER_MATERIAL.uniforms.uTime.value = time.current

    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      pointer.x,
      0.001
    )

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x,
      0.001
    )

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y,
      0.001
    )
  })

  return (
    <mesh ref={meshRef} geometry={SPHERE_GEOMETRY} material={SHADER_MATERIAL} />
  )
}
