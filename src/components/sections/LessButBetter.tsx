'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function LessButBetter() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoIsInView = useInView(videoRef, { amount: 1 })

  useEffect(() => {
    if (videoIsInView) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
    }
  }, [videoIsInView])

  return (
    <>
      <section className='sticky top-0 flex items-center justify-center px-40 py-40'>
        <video
          ref={videoRef}
          style={{ width: '70%' }}
          src='images/projects/kilimanjjjaro-v1/hero-video.webm'
          poster='images/projects/kilimanjjjaro-v1/poster.webp'
          playsInline
          loop
          muted
        />
      </section>
      <section className='flex justify-center w-full h-screen'>
        <h3 className='text-kili-white text-[14vw] mix-blend-difference'>
          <span>Less,</span> <span>but</span> <span>Better</span>
        </h3>
      </section>
    </>
  )
}
