'use client'

import { useRef } from 'react'
import FadeTextOnScroll from '@components/shared/FadeTextOnScroll'

export default function Projects() {
  const containerEl = useRef<HTMLDivElement>(null)

  return (
    <section id='projects' className='sticky top-0 bg-monospace-black'>
      <div
        ref={containerEl}
        className='h-250-vh relative max-h-[2500px] xl:px-44'
      >
        <div className='h-100-vh sticky top-0 flex w-full flex-col items-start justify-center'>
          <FadeTextOnScroll
            className='text-8xl font-medium text-monospace-white'
            target={containerEl}
            text='Since 2017, designing and developing for brands, agencies and independent studios. Below you can see some of them.'
          />
        </div>
      </div>
    </section>
  )
}
