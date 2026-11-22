'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import { VIDEO_VISIBILITY_THRESHOLD } from '@/lib/constants/projects-ui'
import playVideo from '@/lib/utils/playVideo'

interface Props {
  className?: string
  src: string
  autoPlay?: boolean
}

export default function Video({ className, src, autoPlay }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(videoRef, { amount: VIDEO_VISIBILITY_THRESHOLD })

  useEffect(() => {
    if (autoPlay === true) return

    if (isInView) {
      playVideo(videoRef.current)
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
