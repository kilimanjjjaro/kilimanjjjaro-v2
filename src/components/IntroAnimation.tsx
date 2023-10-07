'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/lib/store/store'

export default function IntroAnimation() {
  const { introRunning, setIntroRunning } = useStore()

  useEffect(() => {
    const pageWrapperEl = window.document.getElementById('page-wrapper')

    if (pageWrapperEl === null) return

    if (!introRunning) pageWrapperEl.classList.remove('scale-125')
  }, [introRunning])

  const handleAnimationEnd = () => {
    const delay = 2900

    setTimeout(() => {
      setIntroRunning(false)
    }, delay)
  }

  return (
    <motion.div
      className='fixed inset-0 z-50 overflow-hidden bg-kili-dark-gray cursor-none'
      initial={{
        y: '0%'
      }}
      animate={{
        y: '-100%',
        transitionEnd: {
          display: 'none'
        }
      }}
      transition={{
        duration: 3,
        ease: [0.77, 0, 0.18, 1],
        delay: 2.5
      }}
      onAnimationStart={handleAnimationEnd}
    >
      <motion.div
        className='flex items-center justify-center w-full h-full gap-10'
        initial={{ y: '0%' }}
        animate={!introRunning && { y: '100%' }}
        transition={{
          duration: 2.2,
          ease: [0.77, 0, 0.18, 1]
        }}
      >
        <span className='overflow-hidden'>
          <motion.span
            className='block text-3xl tracking-wider text-kili-white'
            initial={{
              y: '102%',
              rotate: 4
            }}
            animate={{
              y: '0%',
              rotate: 0
            }}
            transition={{
              duration: 2,
              ease: [0.17, 0.84, 0.44, 1]
            }}
          >
            Kilimanjjjaro
          </motion.span>
        </span>

        <div className='flex gap-2'>
          <span className='overflow-hidden'>
            <motion.span
              className='flex text-3xl tracking-wider h-9 text-kili-light-gray'
              initial={{
                y: '102%',
                rotate: 4
              }}
              animate={{
                y: '0%',
                rotate: 0
              }}
              transition={{
                duration: 2,
                ease: [0.17, 0.84, 0.44, 1],
                delay: 0.2
              }}
            >
              Since
            </motion.span>
          </span>
          <span className='overflow-hidden'>
            <motion.span
              className='flex text-3xl tracking-wider h-9 text-kili-light-gray'
              initial={{
                y: '102%',
                rotate: 4
              }}
              animate={{
                y: '0%',
                rotate: 0
              }}
              transition={{
                duration: 2,
                ease: [0.17, 0.84, 0.44, 1],
                delay: 0.2
              }}
            >
              —
            </motion.span>
          </span>
          <span className='overflow-hidden'>
            <motion.span
              className='flex text-3xl tracking-wider h-9 text-kili-light-gray'
              initial={{
                y: '102%',
                rotate: 4
              }}
              animate={{
                y: '0%',
                rotate: 0
              }}
              transition={{
                duration: 2,
                ease: [0.17, 0.84, 0.44, 1],
                delay: 0.4
              }}
            >
              20
              <motion.span
                className='flex flex-col'
                initial={{
                  y: '0%'
                }}
                animate={{
                  y: 'calc(-100% * 6)'
                }}
                transition={{
                  duration: 2.5,
                  ease: [0.77, 0, 0.18, 1],
                  delay: 0.5
                }}
              >
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
              </motion.span>
            </motion.span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
