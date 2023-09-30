'use client'

import { useScopedI18n } from '@/lib/locales/client'
import { useStore } from '@/lib/store/store'
import { motion } from 'framer-motion'

export default function Headline() {
  const { setIntroRunning } = useStore()
  const t = useScopedI18n('home.header')

  return (
    <motion.div
      initial={{
        scale: 1.3
      }}
      animate={{
        scale: 1
      }}
      transition={{
        duration: 3,
        ease: [0.17, 0.84, 0.44, 1]
      }}
      onAnimationStart={() => setIntroRunning(true)}
    >
      <h2 className='text-kili-white text-[200px] flex flex-col leading-[1.03]'>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            initial={{
              y: '118%',
              rotate: 4
            }}
            animate={{
              y: '0%',
              rotate: 0
            }}
            transition={{
              duration: 3,
              ease: [0.17, 0.84, 0.44, 1]
            }}
          >
            {t('headline.0')}{' '}
          </motion.span>
        </span>
        <span className='-my-4 overflow-hidden'>
          <motion.span
            className='flex items-center ml-64 gap-x-1'
            initial={{
              y: '118%',
              rotate: 4
            }}
            animate={{
              y: '0%',
              rotate: 0
            }}
            transition={{
              duration: 3,
              ease: [0.17, 0.84, 0.44, 1],
              delay: 0.3
            }}
          >
            {t('headline.1')}{' '}
            <span className='-mr-[6px]'>{t('headline.2')}</span>{' '}
            {t('headline.3')}
          </motion.span>
        </span>
        <span className='ml-24 overflow-hidden'>
          <motion.span
            className='block'
            initial={{
              y: '118%',
              rotate: 4
            }}
            animate={{
              y: '0%',
              rotate: 0
            }}
            transition={{
              duration: 3,
              ease: [0.17, 0.84, 0.44, 1],
              delay: 0.5
            }}
            onAnimationComplete={() => setIntroRunning(false)}
          >
            {t('headline.4')}
          </motion.span>
        </span>
      </h2>
    </motion.div>
  )
}
