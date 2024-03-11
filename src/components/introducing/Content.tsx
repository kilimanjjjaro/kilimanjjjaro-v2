'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LetsTalkButton from '@/components/introducing/LetsTalkButton'
import Headline from '@/components/introducing/Headline'
import Biography from '@/components/introducing/Biography'
import Portrait from '@/components/introducing/Portrait'

interface Props {
  headline: string
  biography: string
}

export default function Content({ headline, biography }: Props) {
  const mainEl = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: mainEl,
    offset: ['start end', 'start start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <main
      ref={mainEl}
      className='flex flex-col items-center px-6 pt-12 xl:py-32 xl:px-20 2xl:px-40'
    >
      <Portrait />
      <motion.div
        className='flex flex-col gap-6 mt-10 xl:mt-0 xl:gap-0 mix-blend-difference'
        style={{ y }}
      >
        <Headline headline={headline} />
        <div className='grid items-end content-start xl:grid-cols-2 gap-6 xl:gap-[10vw] 2xl:gap-[19vw] justify-items-start'>
          <LetsTalkButton />
          <Biography biography={biography} />
        </div>
      </motion.div>
    </main>
  )
}
