import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { ASCII_IMAGE_SHADERS } from '@lib/shaders/ascii-image'

const SIZE = 1
const COUNT = 40
const CELL_SIZE = SIZE / COUNT

const dummy = new THREE.Object3D()

export default function AsciiImage() {
  const instancedMeshEl = useRef<THREE.InstancedMesh>(null)
  const [imageTexture, charsTexture] = useLoader(THREE.TextureLoader, [
    '/images/projects/wrkload/poster.webp',
    '/images/chars.jpg'
  ])

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      t_chars: { value: charsTexture }
    }
  }, [charsTexture])

  useEffect(() => {
    if (instancedMeshEl.current === null) return

    const scales = new Float32Array(COUNT ** 2)

    let index = 0

    for (let i = 0; i < COUNT; i++) {
      for (let j = 0; j < COUNT; j++) {
        dummy.position.set(j * CELL_SIZE - 0.5, -i * CELL_SIZE + 0.5, 0)

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
  }, [])

  useEffect(() => {
    if (instancedMeshEl.current === null) return

    const canvas = document.createElement('canvas')

    const ctx = canvas.getContext('2d')

    if (ctx === null) return

    canvas.width = imageTexture.image.width
    canvas.height = imageTexture.image.height

    const scales = new Float32Array(COUNT ** 2)
    ctx.drawImage(imageTexture.image, 0, 0, COUNT, COUNT)

    const imageData = ctx.getImageData(0, 0, COUNT, COUNT)

    for (let i = 0; i < imageData.data.length; i += 4) {
      scales.set([1.0 - imageData.data[i] / 255], i / 4)
    }

    instancedMeshEl.current.geometry.setAttribute(
      'a_instanceScale',
      new THREE.InstancedBufferAttribute(scales, 1)
    )

    instancedMeshEl.current.instanceMatrix.needsUpdate = true
  }, [imageTexture])

  return (
    <instancedMesh
      ref={instancedMeshEl}
      args={[undefined, undefined, COUNT ** 2]}
    >
      <planeGeometry args={[CELL_SIZE, CELL_SIZE]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={ASCII_IMAGE_SHADERS.fragmentShader}
        vertexShader={ASCII_IMAGE_SHADERS.vertexShader}
      />
    </instancedMesh>
  )
}
