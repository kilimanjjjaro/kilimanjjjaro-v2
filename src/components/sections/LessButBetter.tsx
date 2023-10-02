'use client'

import { useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion'
import { useScopedI18n } from '@/lib/locales/client'

export default function LessButBetter() {
  const t = useScopedI18n('home.lessButBetter')
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoIsInView = useInView(videoRef, { margin: '0px 0px 200px 0px' })
  const { scrollYProgress: scrollY } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  const scaleX = useSpring(scrollY, {
    stiffness: 5000,
    damping: 400
  })

  const sectionBg = useTransform(scaleX, [0.3, 1], ['#0D0D0D', '#090909'])

  const videoScale = useTransform(scaleX, [0, 1], [1, 0.45])
  const headlineScale = useTransform(scaleX, [0, 1], [3.5, 1])

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
      className='flex items-center justify-center'
      style={{ backgroundColor: sectionBg }}
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
        className='absolute -mt-3 text-kili-white text-center text-[14vw] mix-blend-difference'
        style={{ scale: headlineScale }}
      >
        {t('headline')}
      </motion.h3>
    </motion.section>
  )
}
