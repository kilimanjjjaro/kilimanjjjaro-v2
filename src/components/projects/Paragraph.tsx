'use client'

import useSplitText from '@/lib/hooks/useSplitText'

export default function Paragraph() {
  const { elRef } = useSplitText()

  return (
    <p
      ref={elRef}
      className='ml-40 text-3xl leading-tight text-kili-white w-[32vw] [&>span:first-child]:ml-7'
    >
      — Since 2017,
      <br /> I have been designing and developing for brands, agencies, and
      studios. Here you can find some of the projects I have been involved in.
    </p>
  )
}
