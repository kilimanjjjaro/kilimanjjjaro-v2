import { useState } from 'react'
import { usePerformanceMonitor } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'

export default function HeroHeaderEffects() {
  // A switch that turns effects on and off.
  const [hasEffects, setHasEffects] = useState(true)

  // A callback destructuring for the onChange parameter.
  // `factor` is the current quality scale between 0 and 1.
  usePerformanceMonitor({
    onChange: ({ factor }) => {
      // If effects are currently enabled and
      // the factor is higher than average...
      if (hasEffects && factor > 0.5) {
        // ...decrease quality.
        effect.qualityScale = round(0.5 + 0.5 * factor, 1)
      }

      // Handle other conditions
      // when PerformanceMonitor says
      // to decline or incline
    }
  })

  return <EffectComposer>{/** Your effects */}</EffectComposer>
}
