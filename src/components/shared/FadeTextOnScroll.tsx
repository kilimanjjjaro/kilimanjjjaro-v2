import { useMemo } from 'react'
import {
  type MotionValue,
  motion,
  useScroll,
  useTransform
} from 'framer-motion'
import type { ChildrenType } from '@lib/types/general'

interface WordProps {
  children: ChildrenType
  range: number[]
  scrollProgress: MotionValue<number>
}

interface FadeTextOnScrollProps {
  text: string
  target: React.RefObject<HTMLDivElement>
  className: string
}

const Word = ({ children, range, scrollProgress }: WordProps) => {
  const opacity = useTransform(scrollProgress, range, [0, 1])

  return (
    <motion.span className='inline-block' style={{ opacity }}>
      {children}
    </motion.span>
  )
}

export default function FadeTextOnScroll({
  text,
  target,
  className
}: FadeTextOnScrollProps) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start center', 'end end'],
    layoutEffect: false
  })

  const splitedText = useMemo(() => {
    return text.split(' ')
  }, [text])

  return (
    <p className={`flex flex-wrap gap-x-[0.4ch] ${className}`}>
      {splitedText.map((word, index) => {
        const start = index / splitedText.length
        const end = start + 1 / splitedText.length

        return (
          <Word
            key={index}
            scrollProgress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}
