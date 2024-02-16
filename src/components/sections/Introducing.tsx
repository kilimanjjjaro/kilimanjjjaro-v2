'use client'

import { useRef } from 'react'
import FadeTextOnScroll from '@components/shared/FadeTextOnScroll'

export default function Introducing() {
  const introducingEl = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={introducingEl}
      className='h-250-vh relative max-h-[3000px] bg-monospace-dark-gray xl:px-40'
    >
      <div className='h-100-vh sticky top-0 flex w-full flex-col items-start justify-center'>
        <FadeTextOnScroll
          className='text-8xl text-monospace-white'
          target={introducingEl}
          text='Monospace is a solo creative lab focused on future-proof websites. Crafting experiences that blend design, technology, and user-friendliness.'
        />
      </div>
    </section>
  )
}
