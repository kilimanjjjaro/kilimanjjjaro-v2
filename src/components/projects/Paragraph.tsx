import { useEffect, useRef } from 'react'
import { animate, stagger, useInView } from 'framer-motion'
import SplitType from 'split-type'

export default function Paragraph() {
  const paragraphEl = useRef<HTMLParagraphElement>(null)
  const paragraphIsInView = useInView(paragraphEl, {
    amount: 0.1
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
      )
    }
  }, [paragraphIsInView])

  return (
    <p
      ref={paragraphEl}
      className='mb-24 ml-[14vw] w-[50vw] text-balance text-4xl text-monospace-light-gray'
    >
      <span className='text-monospace-white'>Design, code and play.</span> Below
      you can find a selection of projects that blend these creative activities.
    </p>
  )
}
