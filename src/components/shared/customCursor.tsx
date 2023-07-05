'use client'

import useCursorPosition from '@/hooks/useCursorPosition'

export default function CustomCursor() {
  const cursorPosition = useCursorPosition()

  return (
    <div
      className='fixed left-0 right-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pointer-events-none mix-blend-difference z-9999 cursor'
      style={{ top: cursorPosition.y, left: cursorPosition.x }}
    />
  )
}
