'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { useScopedI18n } from '@/lib/i18n/client'

export default function Since2017() {
  const t = useScopedI18n('home.since2017')
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isDesktop } = useMediaQuery()
  const { scrollYProgress } = useScroll()
  const videoIsInView = useInView(sectionRef)

  const scrollRange = [0.5, 0.9]
  const headlineScaleOutputRange = isDesktop ? [4.5, -1] : [4, 0]
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

  useEffect(() => {
    if (videoIsInView) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
    }
  }, [videoIsInView])

  return (
    <motion.section
      ref={sectionRef}
      className='relative flex justify-center items-center w-full h-[60vh] overflow-hidden xl:h-screen bg-[#676767]'
    >
      <motion.div className='absolute' style={{ width: videoScale }}>
        <video
          ref={videoRef}
          className='w-full aspect-video'
          src='images/projects/kilimanjjjaro-v1/hero-video.webm'
          loop
          muted
          disableRemotePlayback
          preload='none'
        />
      </motion.div>
      <motion.h3
        className='absolute leading-none -mt-3 text-monospace-white text-center text-[12vw] mix-blend-difference w-[190px] xl:w-auto'
        style={{ scale: headlineScale }}
      >
        {t('headline')}
      </motion.h3>
    </motion.section>
  )
}
