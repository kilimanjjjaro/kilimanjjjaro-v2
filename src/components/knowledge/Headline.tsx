'use client'

import ParallaxHeadline from '@/components/shared/ParallaxHeadline'

export default function Headline({ headline }: { headline: string }) {
  return (
    <ParallaxHeadline
      className='leading-none text-kili-white text-10xl'
      baseVelocity={-3}
    >
      {headline}
    </ParallaxHeadline>
  )
}