'use client'

import LargeVariant from '@/components/navbar/LargeVariant'
import SmallVariant from '@/components/navbar/SmallVariant'
import { useStore } from '@/lib/store/store'

export default function Navbar() {
  const { introRunning } = useStore()

  if (introRunning) return null

  return (
    <header className='fixed flex items-start left-20 right-20 z-50 top-16 mix-blend-difference'>
      <LargeVariant />
      <SmallVariant />
    </header>
  )
}
