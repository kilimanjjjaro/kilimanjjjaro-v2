import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { NOISY_BACKGROUND_SHADERS } from '@lib/shaders/noisy-background'
import { useFrame, useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

const UNIFORMS = {
  uColor1: { value: new THREE.Vector3() },
  uColor2: { value: new THREE.Vector3() },
  uColor3: { value: new THREE.Vector3() },
  uColorAccent: { value: new THREE.Color(0.0, 0.0, 0.0) },
  uPlaneRes: { value: new THREE.Vector2(1.0, 1.0) },
  uMouse2D: { value: new THREE.Vector2(1.0, 1.0) },
  uLinesBlur: { value: 0 },
  uNoise: { value: 0 },
  uOffsetX: { value: 0 },
  uOffsetY: { value: 0 },
  uLinesAmount: { value: 0 },
  uBackgroundScale: { value: 1 }
}

export default function NoisyBackground() {
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null)
  const mouse2D = useRef(new THREE.Vector2(-0.42, 0.38))
  const { viewport } = useThree()

  const controls = useControls({
    color1: '#2b2f3b',
    color2: '#424b62',
    color3: '#000000',
    linesBlur: {
      value: 0.4,
      min: 0,
      max: 1,
      step: 0.0001
    },
    noiseAmount: {
      value: 0.03,
      min: 0,
      max: 1,
      step: 0.0001
    },
    offsetX: {
      value: 0.98,
      min: -5,
      max: 5,
      step: 0.000001
    },
    offsetY: {
      value: 1.7,
      min: -5,
      max: 5,
      step: 0.000001
    },
    linesAmount: {
      value: 9.54,
      min: 0,
      max: 15,
      step: 0.0001
    },
    mouseX: {
      value: -0.42,
      min: -1,
      max: 1,
      step: 0.000001
    },
    mouseY: {
      value: 0.38,
      min: -1,
      max: 1,
      step: 0.000001
    },
    enableMouse: true
  })

  useFrame(() => {
    if (shaderMaterialRef.current === null) return

    shaderMaterialRef.current.uniforms.uColor1.value = new THREE.Color(
      controls.color1
    ).toArray()
    shaderMaterialRef.current.uniforms.uColor2.value = new THREE.Color(
      controls.color2
    ).toArray()
    shaderMaterialRef.current.uniforms.uColor3.value = new THREE.Color(
      controls.color3
    ).toArray()
    shaderMaterialRef.current.uniforms.uPlaneRes.value = new THREE.Vector2(
      viewport.width,
      viewport.height
    )
    shaderMaterialRef.current.uniforms.uMouse2D.value.lerp(
      mouse2D.current,
      0.015
    )
    shaderMaterialRef.current.uniforms.uLinesBlur.value = controls.linesBlur
    shaderMaterialRef.current.uniforms.uNoise.value = controls.noiseAmount
    shaderMaterialRef.current.uniforms.uOffsetX.value = controls.offsetX
    shaderMaterialRef.current.uniforms.uOffsetY.value = controls.offsetY
    shaderMaterialRef.current.uniforms.uLinesAmount.value = controls.linesAmount
  })

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1

      if (controls.enableMouse) mouse2D.current.set(x, y)
    }

    mouse2D.current = new THREE.Vector2(controls.mouseX, controls.mouseY)

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [controls])

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        uniforms={UNIFORMS}
        fragmentShader={NOISY_BACKGROUND_SHADERS.fragmentShader}
        vertexShader={NOISY_BACKGROUND_SHADERS.vertexShader}
        side={THREE.FrontSide}
      />
      <OrthographicCamera args={[-1, 1, 1 - 1, -1000, 1000]} />
    </mesh>
  )
}
