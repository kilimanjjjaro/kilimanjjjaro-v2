import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { PARTICLE_TEXTURE_SHADERS } from '@/lib/shaders/particle-texture'

const RANDOM_NUMBER = (min: number, max: number) => {
  return min + (max - min) * Math.random()
}

const createAttributes = () => {
  const width = 1600
  const height = 300
  const lenght = width * height

  const positions = new Float32Array(lenght * 3)
  const coordinates = new Float32Array(lenght * 3)
  const speeds = new Float32Array(lenght)
  const offsets = new Float32Array(lenght)
  const direction = new Float32Array(lenght)
  const press = new Float32Array(lenght)

  let index = 0

  for (let i = 0; i < width; i++) {
    const posX = i - width / 2

    for (let j = 0; j < height; j++) {
      positions[index * 3 + 0] = posX * 2
      positions[index * 3 + 1] = (j - height / 2) * 2
      positions[index * 3 + 2] = 0

      coordinates[index * 3 + 0] = i
      coordinates[index * 3 + 1] = j
      coordinates[index * 3 + 2] = 0

      speeds[index] = RANDOM_NUMBER(0.5, 1)
      offsets[index] = RANDOM_NUMBER(-1000, 1000)
      direction[index] = Math.random() > 0.5 ? 1 : -1
      press[index] = RANDOM_NUMBER(0.4, 1)

      index++
    }
  }

  return {
    positions,
    coordinates,
    speeds,
    offsets,
    direction,
    press
  }
}

const ATTRIBUTES = createAttributes()

const DUMMY = new THREE.Mesh(
  new THREE.PlaneGeometry(3000, 3000),
  new THREE.MeshBasicMaterial()
)

const RAYCASTER = new THREE.Raycaster()

export default function DistortedTexture({ image }: { image: string }) {
  const [imageTexture, particleTexture] = useLoader(THREE.TextureLoader, [
    image,
    '/images/particle.jpg'
  ])
  const { camera } = useThree()
  const pointsEl = useRef<THREE.Points>(null)
  const timeRef = useRef(0)
  const pointerRef = useRef(new THREE.Vector2())
  const coordinatesRef = useRef(new THREE.Vector2())

  const uniforms = useMemo(() => {
    return {
      uTime: {
        value: 0.0
      },
      uImageTexture: {
        value: imageTexture
      },
      uParticleTexture: {
        value: particleTexture
      },
      move: {
        value: 0.0
      },
      uPointer: {
        value: new THREE.Vector2()
      }
    }
  }, [imageTexture, particleTexture])

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1

      coordinatesRef.current.setX(x)
      coordinatesRef.current.setY(y)

      RAYCASTER.setFromCamera(coordinatesRef.current, camera)

      const intersects = RAYCASTER.intersectObject(DUMMY)

      if (intersects.length > 0) {
        const { x, y } = intersects[0].point

        pointerRef.current.setX(x)
        pointerRef.current.setY(y)
      }
    }

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [uniforms, camera])

  useFrame(() => {
    timeRef.current++

    uniforms.uTime.value = timeRef.current * 0.9
    uniforms.uPointer.value = pointerRef.current
  })

  return (
    <points ref={pointsEl}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={ATTRIBUTES.positions.length / 3}
          array={ATTRIBUTES.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-aCoordinates'
          count={ATTRIBUTES.coordinates.length / 3}
          array={ATTRIBUTES.coordinates}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-aSpeed'
          count={ATTRIBUTES.speeds.length}
          array={ATTRIBUTES.speeds}
          itemSize={1}
        />
        <bufferAttribute
          attach='attributes-aOffset'
          count={ATTRIBUTES.offsets.length}
          array={ATTRIBUTES.offsets}
          itemSize={1}
        />
        <bufferAttribute
          attach='attributes-aDirection'
          count={ATTRIBUTES.direction.length}
          array={ATTRIBUTES.direction}
          itemSize={1}
        />
        <bufferAttribute
          attach='attributes-aPress'
          count={ATTRIBUTES.press.length}
          array={ATTRIBUTES.press}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        attach='material'
        fragmentShader={PARTICLE_TEXTURE_SHADERS.fragmentShader}
        vertexShader={PARTICLE_TEXTURE_SHADERS.vertexShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        depthTest={false}
        depthWrite={false}
        transparent
      />
    </points>
  )
}
