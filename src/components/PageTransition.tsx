'use client'

import NextPageTransition from '@gimwa/next-page-transition'
import type { ChildrenType } from '@/interfaces/general'

export default function PageTransition({
  children
}: {
  children: ChildrenType
}) {
  return (
    <NextPageTransition
      initial={false}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: [0.77, 0, 0.18, 1] }
      }}
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: [0.77, 0, 0.18, 1] }
      }}
    >
      <div
        id='page-wrapper'
        className='transition-transform duration-[1.7s] ease-kili-in'
      >
        {children}
      </div>
    </NextPageTransition>
  )
}
