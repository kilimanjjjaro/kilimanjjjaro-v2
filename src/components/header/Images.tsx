'use client'

import { useStore } from '@/lib/store/store'
import PixalatedImage from '@/components/header/PixalatedImage'

export default function Images() {
  const { introRunning } = useStore()

  if (introRunning) return null

  return (
    <>
      {Array.from(Array(2).keys()).map((i) => (
        <PixalatedImage key={i} />
      ))}
    </>
  )
}
