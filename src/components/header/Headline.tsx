'use client'

import { useRef } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { LOCALES } from '@/lib/constants/general'

export default function Headline() {
  const t = useScopedI18n('home.header')
  const currentLocale = useCurrentLocale()
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '117%'])
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 6])

  return (
    <motion.h2
      ref={headlineRef}
      className='flex flex-col items-center text-6xl text-center xl:text-11xl text-monospace-white'
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
    >
      <span
        className={clsx(
          'relative overflow-hidden',
          currentLocale === LOCALES.en && 'xl:-translate-x-80',
          currentLocale === LOCALES.es && 'xl:-translate-x-36'
        )}
      >
        <motion.span
          className='block'
          style={{ y, rotate }}
          initial={{
            y: '117%',
            rotate: 6
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
      <span
        className={clsx(
          'overflow-hidden',
          currentLocale === LOCALES.en && 'xl:translate-x-32 xl:-my-4',
          currentLocale === LOCALES.es && 'xl:translate-x-36 xl:-mt-8 xl:mb-4'
        )}
      >
        <motion.span
          className='flex items-center gap-x-1'
          style={{ y, rotate }}
          initial={{
            y: '117%',
            rotate: 6
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
        </motion.span>
      </span>
      <span className='relative overflow-hidden'>
        <motion.span
          className='block'
          style={{ y, rotate }}
          initial={{
            y: '117%',
            rotate: 6
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
        >
          {t('headline.2')}
        </motion.span>
      </span>
    </motion.h2>
  )
}
