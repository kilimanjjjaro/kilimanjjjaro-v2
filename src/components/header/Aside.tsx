'use client'

import { AnimatePresence, motion } from 'framer-motion'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import LanguageSelector from '@/components/shared/LanguageSelector'
import useNavbar from '@/lib/hooks/useNavbar'
import { NAVIGATION_VARIANTS } from '@/lib/constants/general'

export default function Aside() {
  const { version } = useNavbar()

  return (
    <AnimatePresence>
      {version === NAVIGATION_VARIANTS.large && (
        <aside className='fixed z-10 bottom-0 px-20 pb-16 w-full flex items-center justify-between'>
          <div className='overflow-hidden'>
            <motion.span
              className='block'
              initial={{ y: '110%' }}
              animate={{
                y: '0%',
                transition: {
                  duration: 0.7,
                  ease: [0.65, 0.05, 0.36, 1]
                }
              }}
              exit={{
                y: '110%',
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
