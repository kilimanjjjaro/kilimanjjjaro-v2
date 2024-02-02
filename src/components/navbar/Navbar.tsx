'use client'

import { AnimatePresence } from 'framer-motion'
import LargeVariant from '@components/navbar/LargeVariant'
import SmallVariant from '@components/navbar/SmallVariant'
import useNavbar from '@lib/hooks/useNavbar'
import { useStore } from '@lib/store/store'
import { NAVIGATION_VARIANTS } from '@lib/constants/general'

export default function Navbar() {
  const introRunning = useStore((state) => state.introRunning)
  const { variant } = useNavbar()

  if (introRunning) return null

  return (
    <header className='fixed left-16 right-16 top-16 z-50 flex items-start mix-blend-difference'>
      <AnimatePresence>
        {variant === NAVIGATION_VARIANTS.LARGE ? (
          <LargeVariant key='large-navbar' />
        ) : (
          <SmallVariant key='small-navbar' />
        )}
      </AnimatePresence>
    </header>
  )
}
