'use client'

import { useEffect } from 'react'
import { useLenis } from '@studio-freight/react-lenis'
import { motion, AnimatePresence } from 'framer-motion'
import MonospaceLogo from '@/components/shared/MonospaceLogo'
import { useStore } from '@/lib/store/store'

export default function IntroAnimation() {
  const { introRunning, setIntroRunning } = useStore()
  const lenis = useLenis()

  useEffect(() => {
    const headerIsVisible = scrollY <= 1

    if (headerIsVisible) {
      setIntroRunning(true)
    }
  }, [setIntroRunning])

  useEffect(() => {
    if (introRunning) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [introRunning, lenis])

  return (
    <AnimatePresence>
      {introRunning && (
        <motion.div
          className='fixed flex inset-0 items-center justify-center h-screen-compatible min-h-screen-compatible bg-monospace-black'
          initial={{
            opacity: 1
          }}
          animate={{
            opacity: 1,
            transition: { duration: 2 }
          }}
          onAnimationStart={() => setIntroRunning(true)}
          onAnimationComplete={() => setIntroRunning(false)}
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
              className='ml-[70px] flex flex-col font-geist-sans text-2xl text-monospace-light-gray leading-none'
            >
              <span className='overflow-hidden' aria-hidden='true'>
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
              <span className='overflow-hidden' aria-hidden='true'>
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
