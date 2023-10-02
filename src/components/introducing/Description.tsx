'use client'

import useSplitText from '@/lib/hooks/useSplitText'

export default function Description({ description }: { description: string }) {
  const { elRef } = useSplitText()

  return (
    <p
      ref={elRef}
      className='text-3xl leading-tight text-kili-white [&>span:first-child]:ml-7'
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}
