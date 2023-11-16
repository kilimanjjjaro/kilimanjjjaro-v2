import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { DISTORTED_TEXT_SHADERS } from '@/lib/shaders/distorted-text'
import { extend, useFrame } from '@react-three/fiber'
import { FontLoader, TextGeometry } from 'three/examples/jsm/Addons.js'
import geistMonoMedium from '../../../../public/fonts/geist-mono-medium.json'

const FONT = new FontLoader().parse(geistMonoMedium)
extend({ TextGeometry })

export default function DistortedText({ text }: { text: string }) {
  const pointsEl = useRef<THREE.Points>(null)
  const time = useRef(0)

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 }
    }
  }, [])

  useFrame(() => {
    if (pointsEl.current === null) return

    time.current += 0.001

    pointsEl.current.material.uniforms.uTime.value = time.current
  })

  return (
    <points ref={pointsEl}>
      <textGeometry
        attach='geometry'
        args={[
          text,
          {
            font: FONT,
            size: 1,
            height: 0,
            curveSegments: 512,
            bevelEnabled: false
          }
        ]}
      />
      <shaderMaterial
        attach='material'
        vertexShader={DISTORTED_TEXT_SHADERS.vertexShader}
        fragmentShader={DISTORTED_TEXT_SHADERS.fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </points>
  )
}
