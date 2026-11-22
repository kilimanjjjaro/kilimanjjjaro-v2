import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'motion/react'
import {
  CURSOR_OFFSCREEN_POSITION,
  CURSOR_SPRING
} from '@/lib/constants/cursor'

interface Props {
  trigger: boolean
  translateX: number
  translateY: number
}

export default function useCursorPosition({
  trigger,
  translateX,
  translateY
}: Props) {
  const x = useMotionValue(CURSOR_OFFSCREEN_POSITION)
  const y = useMotionValue(CURSOR_OFFSCREEN_POSITION)
  const cursorXSpring = useSpring(x, CURSOR_SPRING)
  const cursorYSpring = useSpring(y, CURSOR_SPRING)

  useEffect(() => {
    if (!trigger) return

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - translateX)
      y.set(e.clientY - translateY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [trigger, x, y, translateX, translateY])

  return { x: cursorXSpring, y: cursorYSpring }
}
