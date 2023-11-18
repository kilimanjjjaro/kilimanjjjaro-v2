import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import NoisyBackground from '@/components/scenes/noisy-background/NoisyBackground'
import { PerformanceMonitor } from '@react-three/drei'

export default function NoisyBackgroundScene() {
  const [dpr, setDpr] = useState(2)

  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, -2] }}
      dpr={dpr}
    >
      <PerformanceMonitor
        onDecline={() => setDpr(1.5)}
        onIncline={() => setDpr(2)}
      >
        <Suspense fallback={null}>
          <NoisyBackground />
        </Suspense>
        <EffectComposer disableNormalPass>
          <Noise opacity={0.4} />
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
      </PerformanceMonitor>
    </Canvas>
  )
}
