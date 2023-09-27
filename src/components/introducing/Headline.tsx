'use client'

import useSplitText from '@/lib/hooks/useSplitText'

export default function Headline() {
  const { elRef } = useSplitText()

  return (
    <h2 ref={elRef} className='w-[39vw] -mt-28 text-kili-white text-7xl group'>
      Full Stack JavaScript Developer & UX/UI Designer with +5 years of work
      experience.
    </h2>
  )
}
