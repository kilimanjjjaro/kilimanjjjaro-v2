'use client'

import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import scrambleText from '@/lib/utils/scrambleText'
import {
  SCRAMBLE_COUNT_STEP,
  SCRAMBLE_INTERVAL_MS,
  SCRAMBLE_ITERATIONS,
  SCRAMBLE_START_COUNT,
  UNMEASURED_WIDTH
} from '@/lib/constants/text'

interface Props {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: Props) {
  const animationInterval = useRef<NodeJS.Timeout | null>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const counter = useRef(SCRAMBLE_START_COUNT)
  const [scrambledText, setScrambledText] = useState<string | null>(null)
  const [measuredWidth, setMeasuredWidth] = useState({
    text,
    width: UNMEASURED_WIDTH
  })
  const isMeasured =
    measuredWidth.text === text && measuredWidth.width !== UNMEASURED_WIDTH

  const startAnimation = useCallback(() => {
    if (animationInterval.current === null) {
      const interval = setInterval(() => {
        counter.current += SCRAMBLE_COUNT_STEP

        if (counter.current < SCRAMBLE_ITERATIONS) {
          setScrambledText(scrambleText(text))
          return
        }

        clearInterval(interval)
        counter.current = SCRAMBLE_START_COUNT
        setScrambledText(null)
      }, SCRAMBLE_INTERVAL_MS)

      animationInterval.current = interval
    }
  }, [text])

  const stopAnimation = useCallback(() => {
    if (animationInterval.current !== null) {
      clearInterval(animationInterval.current)
      animationInterval.current = null
      counter.current = SCRAMBLE_START_COUNT
      setScrambledText(null)
    }
  }, [])

  useLayoutEffect(() => {
    const { current: textElement } = textRef

    if (textElement !== null) {
      setMeasuredWidth({ text, width: textElement.offsetWidth })
    }
  }, [text])

  return (
    <span
      ref={textRef}
      className={clsx('whitespace-nowrap flex justify-center', className ?? '')}
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      style={{ width: isMeasured ? measuredWidth.width : 'auto' }}
    >
      {scrambledText ?? text}
    </span>
  )
}
