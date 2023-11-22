'use client'

import DistortedTextureScene from '@/components/scenes/distorted-texture/Scene'
import Aside from '@/components/header/Aside'
import { useStore } from '@/lib/store/store'

export default function Header() {
  const introRunning = useStore((state) => state.introRunning)

  return (
    <header className='relative flex items-center justify-center px-6 pt-48 pb-44 xl:p-0 min-h-screen xl:w-full'>
      {!introRunning && (
        <>
          <DistortedTextureScene />
          <Aside />
        </>
      )}
    </header>
  )
}
