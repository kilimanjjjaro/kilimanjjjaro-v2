'use client'

import useSplitText from '@/hooks/useSplitText'

export default function Header() {
  const { elRef } = useSplitText()

  return (
    <header className='flex items-center justify-center min-h-screen'>
      <h1
        ref={elRef}
        className='text-kili-white text-8xl 2xl:text-[180px] leading-none uppercase text-center'
      >
        Developing <i>&</i> Designing <i>with</i> Consciousness.
      </h1>
    </header>
  )
}
