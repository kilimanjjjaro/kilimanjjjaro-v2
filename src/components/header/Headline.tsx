'use client'

import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { LOCALES } from '@/lib/constants/general'
import { useRef } from 'react'

export default function Headline() {
  const t = useScopedI18n('home.header')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { setIntroRunning } = useStore()
  const currentLocale = useCurrentLocale()
  const { scrollYProgress } = useScroll()

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 5000,
    damping: 400
  })

  const textShadow = useTransform(
    scrollY,
    [0, 0.02],
    ['0px 0px 30px rgba(255,255,255,0)', '0px 0px 9px rgba(255,255,255,0.2)']
  )

  const color = useTransform(
    scrollY,
    [0, 0.02],
    ['rgb(248 248 248)', 'rgb(122 122 122)']
  )

  return (
    <motion.div
      ref={sectionRef}
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
      <h2 className='text-[200px] flex flex-col leading-[1.03]'>
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
            style={{ color }}
          >
            {t('headline.0')}{' '}
          </motion.span>
        </span>
        <motion.span
          className='-my-4 overflow-hidden text-kili-white'
          style={{ textShadow }}
        >
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
        </motion.span>
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
            style={{ color }}
            onAnimationComplete={() => setIntroRunning(false)}
          >
            {t('headline.4')}
          </motion.span>
        </span>
      </h2>
    </motion.div>
  )
}
