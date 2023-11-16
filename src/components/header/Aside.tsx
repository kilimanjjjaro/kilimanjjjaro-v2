'use client'

import { AnimatePresence, motion } from 'framer-motion'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { MAGIC_KEYS, NAVIGATION_VARIANTS } from '@/lib/constants/general'

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
          <div className='flex gap-2 font-geist-mono text-sm [&>kbd]:bg-monospace-light-gray [&>kbd]:px-1.5 [&>kbd]:rounded-sm overflow-hidden'>
            <motion.span
              className='text-monospace-light-gray mr-0.5'
              initial={{ y: '118%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
              exit={{ y: '118%' }}
            >
              magic keys
            </motion.span>
            {MAGIC_KEYS.map((key, index) => (
              <motion.kbd
                key={key}
                initial={{ y: '118%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.7,
                  ease: [0.77, 0, 0.18, 1],
                  delay: index * 0.05
                }}
                exit={{
                  y: '118%',
                  transition: {
                    duration: 0.7,
                    ease: [0.77, 0, 0.18, 1],
                    delay: index * 0.05
                  }
                }}
              >
                {key}
              </motion.kbd>
            ))}
          </div>
        </aside>
      )}
    </AnimatePresence>
  )
}
