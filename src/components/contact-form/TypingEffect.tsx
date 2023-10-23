import { useEffect, useState } from 'react'
import useTypingEffect from '@/lib/hooks/useTypingEffect'

const DURATION = 60

interface Props {
  text: string
}

export default function TypingEffect({ text }: Props) {
  const [textIndex, setTextIndex] = useState(0)
  const textToShow = useTypingEffect(text, DURATION)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex >= text.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [text])

  return (
    <span className='text-black dark:text-white' key={textIndex}>
      {textToShow}
    </span>
  )
}
