import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

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
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springConfig = { damping: 100, stiffness: 500 }
  const cursorXSpring = useSpring(x, springConfig)
  const cursorYSpring = useSpring(y, springConfig)

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
