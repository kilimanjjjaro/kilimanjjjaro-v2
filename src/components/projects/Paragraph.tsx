'use client'

import useSplitText from '@/hooks/useSplitText'

export default function Paragraph() {
  const { elRef } = useSplitText()

  return (
    <p ref={elRef} className='text-3xl leading-tight text-kili-white w-[30vw]'>
      — Since 2017, I have been designing and developing for brands, agencies,
      and studios. Here you can find some of the projects I have been involved
      in.
    </p>
  )
}
