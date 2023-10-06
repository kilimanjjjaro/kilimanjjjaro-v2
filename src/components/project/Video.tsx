'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  className?: string
  src: string
}

export default function Video({ className, src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(videoRef, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
    }
  }, [isInView])

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      playsInline
      loop
      muted
    />
  )
}
