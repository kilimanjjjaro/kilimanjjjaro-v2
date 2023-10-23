import { useEffect, useState } from 'react'

const DURATION = 65

interface Props {
  text: string
}

export default function TypingEffect({ text }: Props) {
  const [currentPosition, setCurrentPosition] = useState(0)
  const items = text.split('')

  useEffect(() => {
    setCurrentPosition(0)
  }, [text])

  useEffect(() => {
    if (currentPosition >= items.length) return

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1)
    }, DURATION)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentPosition, items])

  return items.slice(0, currentPosition).join('')
}
