'use client'

import { AnimatePresence, motion } from 'framer-motion'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import LanguageSelector from '@/components/shared/LanguageSelector'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { NAVIGATION_VARIANTS } from '@/lib/constants/general'

export default function Aside() {
  const { introRunning } = useStore()
  const { variant } = useNavbar()

  if (introRunning) return null

  return (
    <AnimatePresence>
      {variant === NAVIGATION_VARIANTS.large && (
        <aside className='fixed z-10 bottom-0 px-20 pb-16 w-full flex items-center justify-between'>
          <div className='overflow-hidden'>
            <motion.span
              className='block'
              initial={{ y: '115%' }}
              animate={{
                y: '0%',
                transition: {
                  duration: 0.7,
                  ease: [0.65, 0.05, 0.36, 1]
                }
              }}
              exit={{
                y: '115%',
                transition: { duration: 0.7, ease: [0.65, 0.05, 0.36, 1] }
              }}
            >
              <MonospaceLogo className='text-4xl text-monospace-white leading-none' />
            </motion.span>
          </div>
          <div className='overflow-hidden'>
            <LanguageSelector />
          </div>
        </aside>
      )}
    </AnimatePresence>
  )
}
