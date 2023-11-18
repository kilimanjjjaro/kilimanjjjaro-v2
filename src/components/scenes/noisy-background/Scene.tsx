import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette
} from '@react-three/postprocessing'
import NoisyBackground from '@/components/scenes/noisy-background/NoisyBackground'
import { PerformanceMonitor } from '@react-three/drei'

export default function NoisyBackgroundScene() {
  const [dpr, setDpr] = useState(2)

  return (
    <Canvas
      className='!absolute inset-0'
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [1, 0, 0] }}
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
          <Bloom
            mipmapBlur
            levels={9}
            intensity={1.5}
            luminanceThreshold={1}
            luminanceSmoothing={1}
          />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
      </PerformanceMonitor>
    </Canvas>
  )
}
