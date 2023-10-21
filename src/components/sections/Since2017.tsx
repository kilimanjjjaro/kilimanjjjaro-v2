'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { useScopedI18n } from '@/lib/i18n/client'

export default function Since2017() {
  const t = useScopedI18n('home.since2017')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { isDesktop } = useMediaQuery()
  const { scrollYProgress } = useScroll()

  const scrollRange = isDesktop ? [0.5, 0.9] : [0.4, 0.8]
  const headlineScaleOutputRange = isDesktop ? [4.5, -1] : [6, 0]
  const videoScaleOutputRange = isDesktop
    ? ['3000px', '0px']
    : ['2000px', '-100px']

  const headlineScale = useTransform(
    scrollYProgress,
    scrollRange,
    headlineScaleOutputRange
  )
  const videoScale = useTransform(
    scrollYProgress,
    scrollRange,
    videoScaleOutputRange
  )

  return (
    <motion.section
      ref={sectionRef}
      className='relative flex justify-center items-center w-full h-[60vh] overflow-hidden xl:h-screen bg-kili-light-gray'
    >
      <motion.div className='absolute' style={{ width: videoScale }}>
        <video
          className='w-full aspect-video'
          src='images/projects/kilimanjjjaro-v1/hero-video.webm'
          autoPlay
          loop
          muted
          disableRemotePlayback
        />
      </motion.div>
      <motion.h3
        className='absolute leading-none -mt-3 text-kili-white text-center text-[12vw] mix-blend-difference w-[190px] xl:w-auto'
        style={{ scale: headlineScale }}
      >
        {t('headline')}
      </motion.h3>
    </motion.section>
  )
}
