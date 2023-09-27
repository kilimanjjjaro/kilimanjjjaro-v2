'use client'

import useSplitText from '@/lib/hooks/useSplitText'

export default function Paragraph() {
  const { elRef } = useSplitText()

  return (
    <p
      ref={elRef}
      className='text-3xl leading-tight text-kili-white [&>span:first-child]:ml-7'
    >
      <i>— Hello,</i> my name is Gonzalo and I am 30 years old. In my
      experience, I learned that the difference lies in taking care of the
      details and applying good practices. I am excited to approach solutions in
      an efficient and simple way.
    </p>
  )
}
