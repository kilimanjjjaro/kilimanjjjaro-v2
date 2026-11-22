'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { useScopedI18n } from '@/lib/i18n/client'
import Image from 'next/image'
import Video from '../project/Video'
import {
  FULL_SCALE,
  GRID_INITIAL_SCALE,
  SCROLL_PROGRESS_RANGE,
  SINCE_2017_DESKTOP_SCALE_END,
  SINCE_2017_DESKTOP_SCALE_START,
  SINCE_2017_MOBILE_SCALE_END,
  SINCE_2017_MOBILE_SCALE_START
} from '@/lib/constants/animation'
import playVideo from '@/lib/utils/playVideo'

export default function Since2017() {
  const t = useScopedI18n('home.since2017')
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isDesktop } = useMediaQuery()
  const videoIsInView = useInView(sectionRef)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const headlineScaleOutput = isDesktop
    ? [SINCE_2017_DESKTOP_SCALE_START, SINCE_2017_DESKTOP_SCALE_END]
    : [SINCE_2017_MOBILE_SCALE_START, SINCE_2017_MOBILE_SCALE_END]
  const gridScale = useTransform(scrollYProgress, SCROLL_PROGRESS_RANGE, [
    GRID_INITIAL_SCALE,
    FULL_SCALE
  ])
  const columnYNegative = useTransform(scrollYProgress, SCROLL_PROGRESS_RANGE, [
    '25%',
    '-15%'
  ])
  const columnYPositive = useTransform(scrollYProgress, SCROLL_PROGRESS_RANGE, [
    '-15%',
    '25%'
  ])
  const headlineScale = useTransform(
    scrollYProgress,
    SCROLL_PROGRESS_RANGE,
    headlineScaleOutput
  )

  useEffect(() => {
    if (videoIsInView) {
      playVideo(videoRef.current)
    } else {
      videoRef.current?.pause()
    }
  }, [videoIsInView])

  return (
    <motion.section
      ref={sectionRef}
      className='relative flex justify-center items-center h-[60vh] overflow-hidden xl:h-screen bg-[#676767]'
    >
      <motion.section
        className='grid absolute grid-cols-2 xl:grid-cols-[auto_55vw_auto] w-full gap-6 xl:gap-20'
        style={{ scale: gridScale }}
      >
        <motion.div
          className='flex flex-col w-full gap-6 xl:gap-20'
          style={{ y: columnYNegative }}
        >
          <Image
            className='w-full'
            src='/images/projects/kilimanjjjaro-v1/gallery-1.webp'
            width={437}
            height={778}
            alt='Since 2017'
          />
          <Video
            className='w-full'
            src='/images/projects/kilimanjjjaro-v1/gallery-2.webm'
            autoPlay
          />
        </motion.div>

        <div className='hidden items-center h-full xl:flex'>
          <Video
            className='w-full aspect-video'
            src='/images/projects/kilimanjjjaro-v1/hero-video.webm'
            autoPlay
          />
        </div>

        <motion.div
          className='flex flex-col w-full gap-6 xl:gap-20'
          style={{ y: columnYPositive }}
        >
          <Image
            className='w-full'
            src='/images/projects/kilimanjjjaro-v1/gallery-5.webp'
            width={437}
            height={778}
            alt='Since 2017'
          />
          <Video
            className='w-full'
            src='/images/projects/kilimanjjjaro-v1/gallery-4.webm'
            autoPlay
          />
        </motion.div>
      </motion.section>
      <motion.h3
        className='absolute leading-none -mt-3 text-kili-white text-center text-[12vw] mix-blend-difference w-[190px] xl:w-auto z-10'
        style={{ scale: headlineScale }}
      >
        {t('headline')}
      </motion.h3>
    </motion.section>
  )
}
