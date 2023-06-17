'use client'

import useScroll from '@/hooks/useScroll'

export default function ScrollPercentage() {
  const { scrollPercentage } = useScroll()

  return <>{scrollPercentage}%</>
}
