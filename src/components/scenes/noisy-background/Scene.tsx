import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  EffectComposer,
  N8AO,
  Noise,
  Vignette
} from '@react-three/postprocessing'
import NoisyBackground from '@/components/scenes/noisy-background/NoisyBackground'

export default function NoisyBackgroundScene() {
  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [1, 0, 0] }}
    >
      <Suspense fallback={null}>
        <NoisyBackground />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.05} />
        <N8AO aoRadius={2} intensity={1} />
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </Canvas>
  )
}
