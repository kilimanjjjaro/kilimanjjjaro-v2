'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Props {
  text: string
  link: string
  className?: string
}

export default function AnimatedLink({ text, link, className }: Props) {
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [originalText, setOriginalText] = useState<string>(text)
  const [counter, setCounter] = useState<number>(0)

  const changeTextRandomly = useCallback(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let newText = originalText.substring(0, 1)

    for (let i = 2; i < originalText.length; i++) {
      const character = originalText[i]

      if (character !== ' ') {
        const progress = (i - 2) / (originalText.length - 2)
        const newLetter = letters.charAt(
          Math.floor(Math.random() * letters.length)
        )
        newText += Math.random() > progress ? newLetter : character
      } else {
        newText += ' '
      }
    }

    setOriginalText(newText)
  }, [originalText])

  const startAnimation = () => {
    if (animationIntervalRef.current === null) {
      const interval = setInterval(() => {
        changeTextRandomly()
        setCounter((prevCounter) => prevCounter + 1)
      }, 100)
      animationIntervalRef.current = interval
    }
  }

  const stopAnimation = () => {
    if (animationIntervalRef.current !== null) {
      clearInterval(animationIntervalRef.current)
      animationIntervalRef.current = null
      setCounter(0)
      setOriginalText(text)
    }
  }

  useEffect(() => {
    if (counter >= 7) {
      clearInterval(animationIntervalRef.current as NodeJS.Timeout)
      setCounter(0)
      setOriginalText(text)
    }
  }, [counter, text])

  return (
    <Link
      className={className}
      href={link}
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      {originalText}
    </Link>
  )
}
