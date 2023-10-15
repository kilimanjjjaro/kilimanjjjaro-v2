'use client'

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import clsx from 'clsx'

interface Props {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: Props) {
  const animationInterval = useRef<NodeJS.Timeout | null>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [originalText, setOriginalText] = useState(text)
  const [counter, setCounter] = useState(0)
  const [initialWidth, setInitialWidth] = useState(0)

  const changeTextRandomly = useCallback(() => {
    const originalLetters = originalText.split('')
    let newText = ''

    for (let i = 0; i < originalLetters.length; i++) {
      const character = originalLetters[i]

      if (character !== ' ') {
        const availableLetters = [...originalLetters]

        availableLetters.splice(i, 1)

        const newLetter =
          availableLetters[Math.floor(Math.random() * availableLetters.length)]

        newText += newLetter
      } else {
        newText += ' '
      }
    }

    setOriginalText(newText)
  }, [originalText])

  const measureTextWidth = useCallback(() => {
    if (textRef.current !== null) {
      const width = textRef.current.offsetWidth

      setInitialWidth(width)
    }
  }, [])

  const startAnimation = useCallback(() => {
    if (animationInterval.current === null) {
      const interval = setInterval(() => {
        changeTextRandomly()
        setCounter((prevCounter) => prevCounter + 1)
      }, 140)

      animationInterval.current = interval
    }
  }, [changeTextRandomly])

  const stopAnimation = useCallback(() => {
    if (animationInterval.current !== null) {
      clearInterval(animationInterval.current)
      animationInterval.current = null
      setCounter(0)
      setOriginalText(text)
    }
  }, [text])

  useEffect(() => {
    if (counter >= 6) {
      clearInterval(animationInterval.current as NodeJS.Timeout)
      setCounter(0)
      setOriginalText(text)
    }
  }, [counter, text])

  useLayoutEffect(() => {
    measureTextWidth()
  }, [measureTextWidth])

  return (
    <span
      ref={textRef}
      className={clsx('whitespace-nowrap flex justify-center', className ?? '')}
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      style={{ width: initialWidth !== 0 ? initialWidth : 'auto' }}
    >
      {originalText}
    </span>
  )
}
