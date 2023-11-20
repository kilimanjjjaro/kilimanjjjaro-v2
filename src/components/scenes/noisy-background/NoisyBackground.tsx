import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { damp3 } from 'maath/easing'
import { useFrame } from '@react-three/fiber'
import { NOISY_BACKGROUND_SHADERS } from '@/lib/shaders/noisy-background'
import { useStore } from '@/lib/store/store'
import { getRandomNumber } from '@/lib/utils/getRandomNumber'
import { GRADIENTS } from '@/lib/constants/general'

const SPHERE_GEOMETRY = new THREE.SphereGeometry(2, 256, 256)

const SHADER_MATERIAL = new THREE.ShaderMaterial({
  fragmentShader: NOISY_BACKGROUND_SHADERS.fragmentShader,
  vertexShader: NOISY_BACKGROUND_SHADERS.vertexShader,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: { value: 0 },
    uBaseFirstColor: {
      value: new THREE.Vector3(...GRADIENTS.default.firstColor)
    },
    uBaseSecondColor: {
      value: new THREE.Vector3(...GRADIENTS.default.secondColor)
    },
    uAccentColor: {
      value: new THREE.Vector3(...GRADIENTS.default.accentColor)
    },
    uVelocity: { value: 0 }
  }
})

export default function NoisyBackground() {
  const successCombination = useStore((state) => state.successCombination)
  const meshRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)
  const randomIndex = useRef(0)
  const mouse = useRef({ x: 0, y: 0, vX: 0, vY: 0 })

  useFrame(({ pointer }) => {
    if (meshRef.current === null) return

    const { x, y } = pointer

    const xVelocity = x - mouse.current.x
    const yVelocity = y - mouse.current.y

    mouse.current = {
      x: pointer.x,
      y: pointer.y,
      vX: xVelocity,
      vY: yVelocity
    }

    SHADER_MATERIAL.uniforms.uVelocity.value = Math.sqrt(
      xVelocity * xVelocity + yVelocity * yVelocity
    )

    time.current += 0.0006

    SHADER_MATERIAL.uniforms.uTime.value = time.current

    meshRef.current.rotation.z = time.current

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x,
      0.002
    )

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y,
      0.002
    )

    if (successCombination) {
      const { firstColor, secondColor, accentColor } =
        GRADIENTS.random[randomIndex.current]

      damp3(
        SHADER_MATERIAL.uniforms.uBaseFirstColor.value,
        new THREE.Vector3(...firstColor),
        4.2
      )

      damp3(
        SHADER_MATERIAL.uniforms.uBaseSecondColor.value,
        new THREE.Vector3(...secondColor),
        4
      )

      damp3(
        SHADER_MATERIAL.uniforms.uAccentColor.value,
        new THREE.Vector3(...accentColor),
        4.4
      )
    } else {
      damp3(
        SHADER_MATERIAL.uniforms.uBaseFirstColor.value,
        new THREE.Vector3(...GRADIENTS.default.firstColor),
        1
      )

      damp3(
        SHADER_MATERIAL.uniforms.uBaseSecondColor.value,
        new THREE.Vector3(...GRADIENTS.default.secondColor),
        1.1
      )

      damp3(
        SHADER_MATERIAL.uniforms.uAccentColor.value,
        new THREE.Vector3(...GRADIENTS.default.accentColor),
        1.2
      )
    }
  })

  useEffect(() => {
    if (successCombination) {
      randomIndex.current = getRandomNumber({ max: GRADIENTS.random.length })
    }
  }, [successCombination])

  return (
    <mesh ref={meshRef} geometry={SPHERE_GEOMETRY} material={SHADER_MATERIAL} />
  )
}
