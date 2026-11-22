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
  const [typed, setTyped] = useState({ text, position: TYPING_START_POSITION })
  const position = typed.text === text ? typed.position : TYPING_START_POSITION
  const items = text.split('')

  useEffect(() => {
    if (position >= text.length) return

    const intervalId = setInterval(() => {
      setTyped((prevTyped) => ({
        text,
        position:
          (prevTyped.text === text
            ? prevTyped.position
            : TYPING_START_POSITION) + TYPING_STEP
      }))
    }, TYPING_INTERVAL_MS)

    return () => {
      clearInterval(intervalId)
    }
  }, [position, text])

  return items.slice(TYPING_START_POSITION, position).join('')
}
