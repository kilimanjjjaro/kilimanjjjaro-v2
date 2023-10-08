'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { LOCALES } from '@/lib/constants/general'

export default function Headline() {
  const t = useScopedI18n('home.header')
  const { setIntroRunning } = useStore()
  const currentLocale = useCurrentLocale()

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
            className={clsx(
              'flex items-center gap-x-1',
              currentLocale === LOCALES.en ? 'ml-64' : 'ml-96 -mt-4 mb-3'
            )}
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
