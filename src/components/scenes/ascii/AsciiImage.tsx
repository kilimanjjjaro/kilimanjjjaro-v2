import { useLoader } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

const fragmentShader = `
uniform float u_time;
uniform sampler2D t_texture;
uniform sampler2D t_chars;

varying vec2 vUv;
varying float vScale;

void main() {
  float size = 66.0;

  vec2 newUv = vUv;
  newUv.x = vUv.x / size + floor(vScale * size) / size;

  vec4 charsMap = texture2D(t_chars, newUv);
  vec4 color = vec4(vUv, 0.0, 1.0);

  gl_FragColor = charsMap;
}
`

const vertexShader = `
varying vec2 vUv;
varying float vScale;

attribute float a_instanceScale;

void main() {
  vUv = uv;
  vScale = a_instanceScale;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`

const SIZE = 1
const COUNT = 50
const CELL_SIZE = SIZE / COUNT

const dummy = new THREE.Object3D()

export default function AsciiImage() {
  const instancedMeshEl = useRef<THREE.InstancedMesh>(null)
  const [imageTexture, charsTexture] = useLoader(THREE.TextureLoader, [
    '/images/portrait.webp',
    '/images/chars.jpg'
  ])

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      t_texture: { value: imageTexture },
      t_chars: { value: charsTexture }
    }
  }, [imageTexture, charsTexture])

  useEffect(() => {
    if (instancedMeshEl.current === null) return

    const scales = new Float32Array(COUNT ** 2)

    let index = 0

    for (let i = 0; i < COUNT; i++) {
      for (let j = 0; j < COUNT; j++) {
        dummy.position.set(i * CELL_SIZE - 0.5, j * CELL_SIZE - 0.5, 0)

        dummy.updateMatrix()

        scales.set([Math.random()], index)

        instancedMeshEl.current?.setMatrixAt(index++, dummy.matrix)
      }
    }

    instancedMeshEl.current.instanceMatrix.needsUpdate = true
    instancedMeshEl.current.geometry.setAttribute(
      'a_instanceScale',
      new THREE.InstancedBufferAttribute(scales, 1)
    )

    console.log(instancedMeshEl.current.geometry.attributes)
  }, [])

  return (
    <instancedMesh
      ref={instancedMeshEl}
      args={[undefined, undefined, COUNT ** 2]}
    >
      <planeGeometry args={[CELL_SIZE, CELL_SIZE]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </instancedMesh>
  )
}
