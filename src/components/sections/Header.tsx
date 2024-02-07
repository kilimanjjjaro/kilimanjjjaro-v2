'use client'

import { View } from '@react-three/drei'
import Aside from '@components/header/Aside'
import NoisyBackground from '@components/scenes/noisy-background/NoisyBackground'

export default function Header() {
  return (
    <header className='relative min-h-screen w-full px-6 pb-44 pt-48 xl:p-0'>
      <View className='absolute inset-0'>
        <NoisyBackground />
      </View>
      <Aside />
    </header>
  )
}
