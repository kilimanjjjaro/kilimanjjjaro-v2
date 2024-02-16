import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import SplitType from 'split-type'

export default function Headline() {
  const headlineEl = useRef<HTMLHeadingElement>(null)
  const headlineIsInView = useInView(headlineEl, {
    once: true,
    amount: 0.5
  })

  useEffect(() => {
    if (headlineEl.current === null) return

    const headline = new SplitType(headlineEl.current, {
      types: 'lines',
      tagName: 'span'
    })

    if (headline.lines === null) return

    headline.lines.forEach((line) => {
      const span = document.createElement('span')
      span.className = 'block overflow-hidden'
      line.parentNode?.insertBefore(span, line)
      span.appendChild(line)
      line.className = 'translate-y-full'
    })

    if (headlineIsInView) {
      void animate(
        headline.lines[0],
        { y: ['100%', '0%', '0%'], x: ['0%', '0%', '5%'] },
        { duration: 1.3, ease: [0.65, 0.05, 0.36, 1], times: [0, 0.5, 1] }
      )

      void animate(
        headline.lines[1],
        { y: ['100%', '0%', '0%'] },
        {
          duration: 1.3,
          ease: [0.65, 0.05, 0.36, 1],
          times: [0, 0.5, 1],
          delay: 0.15
        }
      )
    }
  }, [headlineIsInView])

  return (
    <h2
      ref={headlineEl}
      className='text-balance text-10xl font-semibold uppercase text-monospace-white'
    >
      Some projects to hightlight
    </h2>
  )
}
