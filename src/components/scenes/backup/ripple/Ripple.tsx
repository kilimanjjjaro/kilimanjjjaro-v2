import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useFBO, useTexture } from '@react-three/drei'

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform sampler2D uImageTexture;
  uniform sampler2D uDisplacementTexture;

  varying vec2 vUv;

  float PI = 3.141592653589793238;

  void main() {
    vec4 displacement = texture2D(uDisplacementTexture, vUv);
    float theta = displacement.r * 2.0 * PI;

    vec2 direction = vec2(cos(theta), sin(theta));
    vec2 uv = vUv + direction * displacement.r * 0.1;

    vec4 color = texture2D(uImageTexture, uv);

    gl_FragColor = color;
  }
`

const MAX_MESHES = 100
const DISPLACEMENT_GEOMETRY = new THREE.PlaneGeometry(300, 300, 1, 1)
const DISPLACEMENT_SCENE = new THREE.Scene()
type MeshesType = Array<
  THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
>

export default function Ripple() {
  const viewport = useThree((state) => state.viewport)
  const meshes = useRef<MeshesType>([])
  const pointer = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const currentMesh = useRef(0)
  const shaderMaterial = useRef<THREE.ShaderMaterial>(null)

  const renderTarget = useFBO({ format: THREE.RGBAFormat })

  const [displacementTexture, imageTexture] = useTexture([
    '/images/displacement.png',
    '/images/example.jpg'
  ])

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uImageTexture: { value: imageTexture },
      uDisplacementTexture: { value: displacementTexture }
    }
  }, [displacementTexture, imageTexture])

  useLayoutEffect(() => {
    for (let i = 0; i < MAX_MESHES; i++) {
      const material = new THREE.MeshBasicMaterial({
        map: displacementTexture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: false,
        depthWrite: false
      })

      const mesh = new THREE.Mesh(DISPLACEMENT_GEOMETRY, material)

      mesh.visible = false
      mesh.rotation.z = 2 * Math.PI * Math.random()
      DISPLACEMENT_SCENE.add(mesh)
      meshes.current.push(mesh)
    }
  }, [displacementTexture])

  useEffect(() => {
    console.log('imageTexture', imageTexture)
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.prevX = pointer.current.x
      pointer.current.prevY = pointer.current.y
      pointer.current.x = event.clientX - window.innerWidth / 2
      pointer.current.y = -event.clientY + window.innerHeight / 2
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  useFrame(({ gl, camera, scene }) => {
    if (shaderMaterial.current === null) return

    gl.setRenderTarget(renderTarget)
    gl.render(DISPLACEMENT_SCENE, camera)
    shaderMaterial.current.uniforms.uDisplacementTexture.value =
      renderTarget.texture
    gl.setRenderTarget(null)
    gl.render(scene, camera)
  }, 1)

  useFrame(() => {
    if (
      Math.abs(pointer.current.x - pointer.current.prevX) >= 2 ||
      Math.abs(pointer.current.y - pointer.current.prevY) >= 2
    ) {
      const mesh = meshes.current[currentMesh.current]
      mesh.visible = true
      mesh.position.x = pointer.current.x
      mesh.position.y = pointer.current.y
      mesh.scale.x = mesh.scale.y = 0.2
      mesh.material.opacity = 0.5

      currentMesh.current = (currentMesh.current + 1) % MAX_MESHES
    }

    meshes.current.forEach((mesh) => {
      if (!mesh.visible) return

      mesh.rotation.z += 0.02
      mesh.material.opacity *= 0.96
      mesh.scale.x = 0.982 * mesh.scale.x + 0.108
      mesh.scale.y = mesh.scale.x

      if (mesh.material.opacity < 0.002) mesh.visible = false
    })
  }, 2)

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 1, 1]} />
      <shaderMaterial
        ref={shaderMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
