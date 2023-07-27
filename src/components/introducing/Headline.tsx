'use client'

import useSplitText from '@/hooks/useSplitText'

export default function Headline() {
  const { elRef } = useSplitText()

  return (
    <h2 ref={elRef} className='w-[39vw] -mt-28 text-kili-white text-7xl group'>
      Full Stack JavaScript Developer & UX/UI Designer with{' '}
      <span className='block transition-transform duration-700 ease-in-out group-hover:rotate-180'>
        +
      </span>
      5 years of work experience.
    </h2>
  )
}
