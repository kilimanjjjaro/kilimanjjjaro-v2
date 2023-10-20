'use client'

import { useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion'
import { useScopedI18n } from '@/lib/i18n/client'

export default function LessButBetter() {
  const t = useScopedI18n('home.lessButBetter')
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoIsInView = useInView(videoRef, { margin: '0px 0px 200px 0px' })
  const { scrollYProgress: scrollY } = useScroll()
  const scaleX = useSpring(scrollY, {
    stiffness: 5000,
    damping: 400
  })

  const videoScale = useTransform(scaleX, [0.52, 0.85], [1, -0.2])
  const headlineScale = useTransform(scaleX, [0.52, 0.85], [2, 0])

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
      className='relative flex items-center justify-center w-full overflow-hidden'
    >
      <motion.video
        ref={videoRef}
        className='w-full h-auto aspect-video'
        style={{ scale: videoScale }}
        src='images/projects/kilimanjjjaro-v1/hero-video.webm'
        poster='images/projects/kilimanjjjaro-v1/poster.webp'
        loop
        muted
      />
      <motion.h3
        className='absolute leading-none -mt-3 text-kili-white text-center text-[12vw] mix-blend-difference'
        style={{ scale: headlineScale }}
      >
        {t('headline')}
      </motion.h3>
    </motion.section>
  )
}
