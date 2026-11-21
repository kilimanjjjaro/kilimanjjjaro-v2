import { useEffect, useState } from 'react'
import {
  TYPING_INTERVAL_MS,
  TYPING_START_POSITION,
  TYPING_STEP
} from '@/lib/constants/text'

interface Props {
  text: string
}

export default function TypingEffect({ text }: Props) {
  const [currentPosition, setCurrentPosition] = useState(TYPING_START_POSITION)
  const items = text.split('')

  useEffect(() => {
    if (currentPosition >= items.length) return

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + TYPING_STEP)
    }, TYPING_INTERVAL_MS)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentPosition, items])

  return items.slice(TYPING_START_POSITION, currentPosition).join('')
}
