'use client'

import { AnimatePresence } from 'framer-motion'
import IntroAnimation from '@/components/header/IntroAnimation'
import Aside from '@/components/header/Aside'
import { useStore } from '@/lib/store/store'

export default function Header() {
  const { introRunning } = useStore()

  return (
    <header className=' flex items-center justify-center px-6 pt-48 pb-44 xl:py-0 xl:min-h-screen'>
      <AnimatePresence>
        {introRunning ? <IntroAnimation key='intro' /> : <Aside />}
      </AnimatePresence>
    </header>
  )
}
