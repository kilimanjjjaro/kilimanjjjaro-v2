'use client'

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { Leva } from 'leva'
import SmoothScroll from '@/components/SmoothScroll'
import { I18nProviderClient, useCurrentLocale } from '@/lib/i18n/client'
import type { ChildrenType } from '@/lib/types/general'

export default function Container({ children }: { children: ChildrenType }) {
  const containerEl = useRef<HTMLDivElement>(null)
  const currentLocale = useCurrentLocale()

  return (
    <I18nProviderClient locale={currentLocale}>
      <SmoothScroll>
        <div ref={containerEl}>
          {children}
          <Canvas
            style={{
              position: 'fixed',
              inset: 0
            }}
            // @ts-expect-error
            eventSource={containerEl}
          >
            <View.Port />
          </Canvas>
          <Leva hidden />
        </div>
      </SmoothScroll>
    </I18nProviderClient>
  )
}
