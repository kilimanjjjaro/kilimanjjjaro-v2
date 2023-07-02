'use client'

import useSplitText from '@/hooks/useSplitText'

export default function Headline() {
  const { elRef } = useSplitText()

  return (
    <h2 ref={elRef} className='w-1/2 -mt-28 text-kili-white text-7xl'>
      Full Stack JavaScript Developer & UX/UI Designer with +5 years of work
      experience.
    </h2>
  )
}
