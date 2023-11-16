'use client'

import { motion } from 'framer-motion'
import { useScopedI18n } from '@/lib/i18n/client'

export default function Headline() {
  const t = useScopedI18n('home.header.headline')

  return (
    <h2
      aria-label={t('ariaLabel')}
      className='flex flex-col gap-1 font-geist-mono text-6xl xl:text-[115px] text-monospace-white mix-blend-difference'
    >
      <span aria-hidden className='overflow-hidden'>
        <motion.span
          className='block'
          initial={{
            y: '117%'
          }}
          animate={{
            y: '0%'
          }}
          transition={{
            duration: 0.7,
            ease: [0.77, 0, 0.18, 1]
          }}
        >
          {t('text.0')}{' '}
        </motion.span>
      </span>
      <span aria-hidden className='overflow-hidden xl:ml-40'>
        <motion.span
          className='block'
          initial={{
            y: '117%'
          }}
          animate={{
            y: '0%'
          }}
          transition={{
            duration: 0.7,
            ease: [0.77, 0, 0.18, 1],
            delay: 0.1
          }}
        >
          {t('text.1')}
        </motion.span>
      </span>
    </h2>
  )
}
