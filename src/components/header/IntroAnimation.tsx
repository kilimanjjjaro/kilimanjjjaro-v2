'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import { INTRO_ANIMATION_DURATION } from '@/lib/constants/general'

export default function IntroAnimation() {
  const { introRunning, setIntroRunning } = useStore()
  const lenis = useLenis()

  useEffect(() => {
    if (introRunning) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [introRunning, lenis])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntroRunning(false)
    }, INTRO_ANIMATION_DURATION)

    return () => {
      clearTimeout(timeout)
    }
  }, [setIntroRunning])

  return (
    <AnimatePresence>
      {introRunning && (
        <div className='fixed inset-0 flex items-center justify-center h-screen-compatible min-h-screen-compatible bg-monospace-black'>
          <section className='flex flex-col gap-2'>
            <div className='overflow-hidden'>
              <motion.span
                className='block'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: [0.77, 0, 0.18, 1] }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1,
                    ease: [0.77, 0, 0.18, 1],
                    delay: 0.2
                  }
                }}
              >
                <MonospaceLogo className='text-2xl text-monospace-white' />
              </motion.span>
            </div>
            <h2
              aria-label='A solo creative web studio.'
              className='ml-[70px] flex flex-col font-geist-sans text-2xl text-monospace-light-gray leading-none'
            >
              <span className='overflow-hidden' aria-hidden='true'>
                <motion.span
                  className='block'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.1
                    }
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 1,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.1
                    }
                  }}
                >
                  A solo creative
                </motion.span>
              </span>{' '}
              <span className='overflow-hidden' aria-hidden='true'>
                <motion.span
                  className='block'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.2
                    }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 1, ease: [0.77, 0, 0.18, 1] }
                  }}
                >
                  web studio.
                </motion.span>
              </span>
            </h2>
          </section>
        </div>
      )}
    </AnimatePresence>
  )
}
