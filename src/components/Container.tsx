'use client'

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, View } from '@react-three/drei'
import { Leva } from 'leva'
import NoisyBackground from '@components/scenes/NoisyBackground'
import Footer from '@components/Footer'
import Navigation from '@components/navbar/Navigation'
import Navbar from '@components/navbar/Navbar'
import FormModal from '@components/contact-form/FormModal'
import ScrollPercentage from '@components/ScrollPercentage'
import CookiesConsent from '@components/CookiesConsent'
import { I18nProviderClient, useCurrentLocale } from '@lib/i18n/client'
import type { ChildrenType } from '@lib/types/general'

export default function Container({ children }: { children: ChildrenType }) {
  const containerEl = useRef<HTMLDivElement>(null)
  const currentLocale = useCurrentLocale()

  return (
    <I18nProviderClient locale={currentLocale}>
      <div ref={containerEl}>
        <Canvas
          style={{
            position: 'fixed',
            inset: 0
          }}
          // @ts-expect-error
          eventSource={containerEl}
        >
          <View.Port />
          <Preload all />
        </Canvas>
        {/* @ts-expect-error */}
        <View className='fixed inset-0'>
          <NoisyBackground />
        </View>
        <div className='absolute left-0 right-0 top-0'>
          {children}
          <Footer />
          <Navigation />
          <Navbar />
          <FormModal />
          <ScrollPercentage />
          <CookiesConsent />
          <Leva hidden />
        </div>
      </div>
    </I18nProviderClient>
  )
}
