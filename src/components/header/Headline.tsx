'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { LOCALES } from '@/lib/constants/general'

export default function Headline() {
  const t = useScopedI18n('home.header')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { setIntroRunning } = useStore()
  const currentLocale = useCurrentLocale()
  const { scrollYProgress: scrollY } = useScroll()

  const dashWidth = useTransform(scrollY, [0, 0.2], [140, 500])
  const firstLineXEn = useTransform(scrollY, [0, 0.2], [-300, 0])
  const firstLineXEs = useTransform(scrollY, [0, 0.2], [-120, 100])
  const middleLineXEs = useTransform(scrollY, [0, 0.2], [139, 400])
  const thirdLineX = useTransform(scrollY, [0, 0.2], [-20, -300])

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
      <h2 className='text-[200px] flex items-center flex-col leading-[1.03] text-kili-white'>
        <motion.span
          className='relative overflow-hidden'
          style={{
            x: LOCALES.en === currentLocale ? firstLineXEn : firstLineXEs
          }}
        >
          <motion.span
            className='block'
            initial={{
              y: '118%',
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
        </motion.span>
        <motion.span
          className='-my-4 overflow-hidden'
          style={{
            x: LOCALES.en === currentLocale ? 120 : middleLineXEs
          }}
        >
          <motion.span
            className='flex items-center gap-x-1'
            initial={{
              y: '118%',
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
            {currentLocale === LOCALES.en && (
              <motion.span
                className='h-[14px] mt-5 ml-2 bg-current'
                style={{ width: dashWidth }}
              />
            )}{' '}
            {t('headline.3')}
          </motion.span>
        </motion.span>
        <motion.span
          className='relative overflow-hidden'
          style={{ x: thirdLineX }}
        >
          <motion.span
            className='block'
            initial={{
              y: '118%',
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
            onAnimationComplete={() => setIntroRunning(false)}
          >
            {t('headline.4')}
          </motion.span>
        </motion.span>
      </h2>
    </motion.div>
  )
}
