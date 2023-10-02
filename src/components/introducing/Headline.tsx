'use client'

import useSplitText from '@/lib/hooks/useSplitText'

export default function Headline({ headline }: { headline: string }) {
  const { elRef } = useSplitText()

  return (
    <h2 ref={elRef} className='w-[39vw] -mt-28 text-kili-white text-7xl group'>
      {headline}
    </h2>
  )
}
