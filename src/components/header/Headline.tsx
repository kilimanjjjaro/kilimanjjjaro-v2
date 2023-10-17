'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { LOCALES } from '@/lib/constants/general'

export default function Headline() {
  const t = useScopedI18n('home.header')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { setIntroRunning } = useStore()
  const currentLocale = useCurrentLocale()
  const { scrollYProgress: scrollY } = useScroll()
  const { isDesktop } = useMediaQuery()

  const dashWidth = useTransform(
    scrollY,
    [0, isDesktop ? 0.2 : 0.3],
    [isDesktop ? 140 : 35, isDesktop ? 500 : 35]
  )
  const firstLineXEn = useTransform(
    scrollY,
    [0, isDesktop ? 0.2 : 0.3],
    [isDesktop ? -300 : 0, isDesktop ? 0 : 100]
  )
  const firstLineXEs = useTransform(
    scrollY,
    [0, isDesktop ? 0.2 : 0.3],
    [isDesktop ? -120 : 0, 100]
  )
  const middleLineXEs = useTransform(
    scrollY,
    [0, isDesktop ? 0.2 : 0.3],
    [isDesktop ? 139 : 0, 400]
  )
  const thirdLineX = useTransform(
    scrollY,
    [0, isDesktop ? 0.2 : 0.3],
    [isDesktop ? -20 : 0, isDesktop ? -300 : -100]
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
      <h2 className='text-[54px] xl:text-[200px] flex items-center flex-col leading-[1.03] text-kili-white'>
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
          className='overflow-hidden xl:-my-4'
          style={{
            x:
              LOCALES.en === currentLocale && isDesktop
                ? 120
                : LOCALES.en === currentLocale && !isDesktop
                ? 0
                : middleLineXEs
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
                className='h-[4.5px] xl:h-[14px] xl:mt-5 xl:ml-2 bg-current'
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
