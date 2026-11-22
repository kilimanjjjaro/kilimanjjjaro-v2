'use client'

import { useRef } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { LOCALES } from '@/lib/constants/globals'
import {
  FULL_SCALE,
  HEADLINE_INTRO_SCALE,
  HEADLINE_REVEAL_ROTATION,
  HEADLINE_SCROLL_END,
  HEADLINE_WORD_HIDDEN_STATE,
  HEADLINE_WORDS_TRANSITION,
  INTRO_TRANSITION,
  NO_ROTATION,
  REVEALED_STATE,
  SCROLL_PROGRESS_START
} from '@/lib/constants/animation'

export default function Headline() {
  const t = useScopedI18n('home.header')
  const currentLocale = useCurrentLocale()
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const { setIntroRunning } = useStore()
  const { scrollYProgress } = useScroll()

  const y = useTransform(
    scrollYProgress,
    [SCROLL_PROGRESS_START, HEADLINE_SCROLL_END],
    ['0%', '117%']
  )
  const rotate = useTransform(
    scrollYProgress,
    [SCROLL_PROGRESS_START, HEADLINE_SCROLL_END],
    [NO_ROTATION, HEADLINE_REVEAL_ROTATION]
  )

  return (
    <motion.h2
      ref={headlineRef}
      className='flex flex-col items-center text-6xl text-center xl:text-9xl 2xl:text-11xl text-kili-white'
      initial={{ scale: HEADLINE_INTRO_SCALE }}
      animate={{ scale: FULL_SCALE }}
      transition={INTRO_TRANSITION}
      onAnimationStart={() => {
        setIntroRunning(true)
      }}
    >
      <span
        className={clsx(
          'relative overflow-hidden',
          currentLocale === LOCALES.en && 'xl:-translate-x-80',
          currentLocale === LOCALES.es && 'xl:-translate-x-36'
        )}
      >
        <motion.span className='block' style={{ y, rotate }}>
          <motion.span
            className='block'
            initial={HEADLINE_WORD_HIDDEN_STATE}
            animate={REVEALED_STATE}
            transition={HEADLINE_WORDS_TRANSITION}
          >
            {t('headline.0')}{' '}
          </motion.span>
        </motion.span>
      </span>
      <span
        className={clsx(
          'overflow-hidden',
          currentLocale === LOCALES.en && 'xl:translate-x-32 xl:-my-4',
          currentLocale === LOCALES.es && 'xl:translate-x-36 xl:-mt-8 xl:mb-4'
        )}
      >
        <motion.span className='block' style={{ y, rotate }}>
          <motion.span
            className='flex items-center gap-x-1'
            initial={HEADLINE_WORD_HIDDEN_STATE}
            animate={REVEALED_STATE}
            transition={HEADLINE_WORDS_TRANSITION}
          >
            {t('headline.1')}{' '}
          </motion.span>
        </motion.span>
      </span>
      <span className='relative overflow-hidden'>
        <motion.span className='block' style={{ y, rotate }}>
          <motion.span
            className='block'
            initial={HEADLINE_WORD_HIDDEN_STATE}
            animate={REVEALED_STATE}
            transition={HEADLINE_WORDS_TRANSITION}
            onAnimationComplete={() => {
              setIntroRunning(false)
            }}
          >
            {t('headline.2')}
          </motion.span>
        </motion.span>
      </span>
    </motion.h2>
  )
}
