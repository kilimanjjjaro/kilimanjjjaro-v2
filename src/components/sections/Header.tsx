'use client'

import HeroHeaderScene from '@/components/scenes/hero-header/Scene'
import Aside from '@/components/header/Aside'
import { useStore } from '@/lib/store/store'

export default function Header() {
  const { introRunning } = useStore()

  if (introRunning) return null

  return (
    <header className='flex items-center justify-center px-6 pt-48 pb-44 xl:py-0 xl:min-h-screen'>
      <HeroHeaderScene />
      <Aside />
    </header>
  )
}
