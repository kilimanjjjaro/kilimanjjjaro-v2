'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { useScopedI18n } from '@/lib/i18n/client'

export default function LessButBetter() {
  const t = useScopedI18n('home.lessButBetter')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { isDesktop } = useMediaQuery()
  const { scrollYProgress } = useScroll()

  const scrollRange = isDesktop ? [0.4, 0.8] : [0.3, 0.55]
  const headlineScaleOutputRange = isDesktop ? [4.5, -1] : [4.5, 0]
  const videoScaleOutputRange = isDesktop
    ? ['6000px', '500px']
    : ['3000px', '0px']

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
      className='relative flex justify-center items-center w-full h-[60vh] overflow-hidden xl:h-screen'
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
