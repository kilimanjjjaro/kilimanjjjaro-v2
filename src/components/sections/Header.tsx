'use client'

import HeroHeader from '@/components/scenes/hero-header/Scene'
import Aside from '@/components/header/Aside'
import { useStore } from '@/lib/store/store'

export default function Header() {
  const { introRunning } = useStore()

  if (introRunning) return null

  return (
    <header className='relative flex items-center justify-center px-6 pt-48 pb-44 xl:p-0 min-h-screen xl:w-full'>
      <HeroHeader />
      <Aside />
    </header>
  )
}
