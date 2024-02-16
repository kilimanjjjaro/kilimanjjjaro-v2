import { useEffect, useRef } from 'react'
import { animate, stagger, useInView } from 'framer-motion'
import SplitType from 'split-type'

export default function Paragraph() {
  const paragraphEl = useRef<HTMLParagraphElement>(null)
  const paragraphIsInView = useInView(paragraphEl, {
    once: true,
    amount: 0.5
  })

  useEffect(() => {
    if (paragraphEl.current === null) return

    const paragraph = new SplitType(paragraphEl.current, {
      types: 'lines',
      tagName: 'span'
    })

    if (paragraph.lines === null) return

    paragraph.lines.forEach((line) => {
      const span = document.createElement('span')
      span.className = 'block overflow-hidden'
      line.parentNode?.insertBefore(span, line)
      span.appendChild(line)
      line.className = 'translate-y-full'
    })

    if (paragraphIsInView) {
      void animate(
        paragraph.lines,
        { y: ['100%', '0%'] },
        { duration: 1, ease: [0.65, 0.05, 0.36, 1], delay: stagger(0.15) }
      ).then(() => paragraph.revert())
    }
  }, [paragraphIsInView])

  return (
    <p
      ref={paragraphEl}
      className='ml-[14vw] w-[45vw] text-balance text-5xl text-monospace-light-gray'
    >
      Since 2017 designing and developing for brands, agencies and independent
      studios. Below you can see some of them.
    </p>
  )
}
