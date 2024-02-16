'use client'

import { useLayoutEffect, useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects() {
  const headlineEl = useRef<HTMLHeadingElement>(null)
  const paragraphEl = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (headlineEl.current === null || paragraphEl.current === null) return

    const headline = new SplitType(headlineEl.current, {
      types: 'lines',
      tagName: 'span'
    })

    const paragraph = new SplitType(paragraphEl.current, {
      types: 'lines',
      tagName: 'span'
    })

    if (headline.lines !== null) {
      headline.lines.forEach((line) => {
        const span = document.createElement('span')
        span.className = 'block overflow-hidden'
        line.parentNode?.insertBefore(span, line)
        span.appendChild(line)
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: headline.lines,
          start: 'top 80%',
          end: 'bottom center'
        }
      })

      timeline
        .from(headline.lines, {
          y: '100%',
          duration: 1,
          stagger: 0.15,
          ease: 'power3.inOut'
        })
        .to(headline.lines[0], {
          x: '5%',
          duration: 1,
          ease: 'power3.inOut'
        })
    }

    if (paragraph.lines !== null) {
      paragraph.lines.forEach((line) => {
        const span = document.createElement('span')
        span.className = 'block overflow-hidden'
        line.parentNode?.insertBefore(span, line)
        span.appendChild(line)
      })

      gsap.from(paragraph.lines, {
        y: '100%',
        duration: 1,
        stagger: 0.15,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: paragraph.lines,
          start: 'top 80%',
          end: 'bottom center'
        },
        onComplete: () => paragraph.revert()
      })
    }
  }, [])

  return (
    <section
      id='projects'
      className='flex flex-col gap-36 bg-monospace-black p-36'
    >
      <h2
        ref={headlineEl}
        className='text-balance text-10xl font-semibold uppercase text-monospace-white'
      >
        Some projects to hightlight
      </h2>
      <p
        ref={paragraphEl}
        className='ml-[14vw] w-[44vw] text-balance text-5xl text-monospace-light-gray'
      >
        Since 2017 designing and developing for brands, agencies and independent
        studios. Below you can see some of them.
      </p>
    </section>
  )
}
