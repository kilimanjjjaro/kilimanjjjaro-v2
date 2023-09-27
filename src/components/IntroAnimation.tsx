'use client'

import { motion } from 'framer-motion'
import { useStore } from '@/lib/store/store'

export default function IntroAnimation() {
  const { setIntroRunning } = useStore()

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center gap-10 overflow-hidden bg-kili-dark-gray cursor-none'
      initial={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 108%, 0% 100%)'
      }}
      animate={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        transitionEnd: {
          display: 'none'
        }
      }}
      transition={{
        duration: 3,
        ease: [0.77, 0, 0.18, 1],
        delay: 4
      }}
      onAnimationComplete={() => setIntroRunning(false)}
    >
      <span className='overflow-hidden'>
        <motion.span
          className='block text-4xl leading-none tracking-wider text-kili-white'
          initial={{
            y: '110%',
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
      <span className='relative overflow-hidden'>
        <motion.span
          className='flex text-4xl leading-none tracking-wider h-9 text-kili-light-gray'
          initial={{
            y: '111%',
            rotate: 4
          }}
          animate={{
            y: '0%',
            rotate: 0
          }}
          transition={{
            duration: 2,
            ease: [0.17, 0.84, 0.44, 1],
            delay: 0.3
          }}
        >
          Since — 20
          <motion.span
            className='flex flex-col'
            initial={{
              y: '0%'
            }}
            animate={{
              y: 'calc(-100% * 6)'
            }}
            transition={{
              duration: 2.3,
              ease: [0.77, 0, 0.18, 1],
              delay: 1.5
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
    </motion.div>
  )
}
