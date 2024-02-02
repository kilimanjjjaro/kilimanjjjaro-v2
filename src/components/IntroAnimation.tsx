'use client'

import { useEffect } from 'react'
import { useLenis } from '@studio-freight/react-lenis'
import { motion, AnimatePresence } from 'framer-motion'
import MonospaceLogo from '@components/shared/MonospaceLogo'
import { useStore } from '@lib/store/store'

export default function IntroAnimation() {
  const introRunning = useStore((state) => state.introRunning)
  const setIntroRunning = useStore((state) => state.setIntroRunning)
  const lenis = useLenis()

  const handleAnimationStart = () => {
    setIntroRunning(true)
    lenis?.stop()
  }

  const handleAnimationComplete = () => {
    setIntroRunning(false)
    window.sessionStorage.setItem('__QUICK_ACCESS_SESSION__', 'true')
    lenis?.start()
  }

  useEffect(() => {
    const quickAccessSession = window.sessionStorage.getItem(
      '__QUICK_ACCESS_SESSION__'
    )

    if (quickAccessSession === null) setIntroRunning(true)
  }, [setIntroRunning])

  return (
    <AnimatePresence>
      {introRunning && (
        <motion.div
          className='h-screen-compatible min-h-screen-compatible fixed inset-0 flex items-center justify-center'
          initial={{
            opacity: 1
          }}
          animate={{
            opacity: 1,
            transition: { duration: 2 }
          }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          <section className='flex flex-col gap-2'>
            <div className='overflow-hidden'>
              <motion.span
                className='block'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.7,
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
              className='ml-[70px] flex flex-col font-geist-sans text-2xl leading-none text-monospace-light-gray'
            >
              <span className='overflow-hidden' aria-hidden>
                <motion.span
                  className='block'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.1
                    }
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.1
                    }
                  }}
                >
                  A solo creative
                </motion.span>
              </span>{' '}
              <span className='overflow-hidden' aria-hidden>
                <motion.span
                  className='block'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.77, 0, 0.18, 1],
                      delay: 0.2
                    }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
                  }}
                >
                  web studio.
                </motion.span>
              </span>
            </h2>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
