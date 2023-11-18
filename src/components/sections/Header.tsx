'use client'

import NoisyBackground from '@/components/scenes/noisy-background/Scene'
import Aside from '@/components/header/Aside'
import Headline from '@/components/header/Headline'
import { useStore } from '@/lib/store/store'

export default function Header() {
  const { introRunning } = useStore()

  return (
    <header className='relative flex items-center justify-center px-6 pt-48 pb-44 xl:p-0 min-h-screen xl:w-full'>
      {!introRunning && (
        <>
          <NoisyBackground />
          <Headline />
          <Aside />
        </>
      )}
    </header>
  )
}
