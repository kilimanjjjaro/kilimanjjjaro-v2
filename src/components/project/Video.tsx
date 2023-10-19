'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  className?: string
  src: string
  autoPlay?: boolean
}

export default function Video({ className, src, autoPlay }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(videoRef, { amount: 0.5 })

  useEffect(() => {
    if (autoPlay === true) return

    if (isInView) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
    }
  }, [isInView, autoPlay])

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      src={src}
      playsInline
      loop
      muted
      disableRemotePlayback
    />
  )
}
