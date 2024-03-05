'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'framer-motion'
import Image from 'next/image'

const IMAGES = [
  {
    description: 'Description goes here',
    source: '/images/projects/threads-clone/poster.webp',
    styles: {
      top: 0,
      left: 0,
      scale: 1
    }
  },
  {
    description: 'Description goes here',
    source: '/images/projects/kilimanjjjaro-v1/poster.webp',
    styles: {
      top: 30,
      left: 15,
      scale: 0.9
    }
  },
  {
    description: 'Description goes here',
    source: '/images/projects/wrkload/poster.webp',
    styles: {
      top: 0,
      left: 0,
      scale: 0.8
    }
  },
  {
    description: 'Description goes here',
    source: '/images/projects/royal-enfield/poster.webp',
    styles: {
      top: 35,
      left: 40,
      scale: 0.7
    }
  },
  {
    description: 'Description goes here',
    source: '/images/projects/volvo-test-drive/poster.webp',
    styles: {
      top: 6,
      left: 40,
      scale: 0.9
    }
  },
  {
    description: 'Description goes here',
    source: '/images/projects/mam/poster.webp',
    styles: {
      top: 0,
      left: 0,
      scale: 0.6
    }
  }
]

export default function Since2017() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [imageIndex, setImageIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['100vw', '-200vw'])

  useMotionValueEvent(scrollYProgress, 'change', (scrollValue) => {
    const totalImages = IMAGES.length

    if (scrollValue > 0.2) {
      const index = Math.min(Math.floor(scrollValue * totalImages), totalImages)

      setImageIndex(index)
    }
  })

  return (
    <section ref={sectionRef} className='h-250-vh'>
      <div className='sticky top-0 flex h-dvh w-full items-center justify-center overflow-hidden bg-monospace-white'>
        {IMAGES.map((image, index) => (
          <motion.div
            className='absolute opacity-0 transition-all duration-1000'
            key={image.source}
            style={{
              top: `${image.styles.top}vh`,
              left: `${image.styles.left}vw`,
              opacity: index + 1 === imageIndex ? 1 : 0,
              y: index + 1 === imageIndex ? '0%' : '50%',
              scale: index + 1 === imageIndex ? image.styles.scale : 1,
              transitionTimingFunction: 'cubic-bezier(0.65, 0.05, 0.36, 1)'
            }}
          >
            <Image
              src={image.source}
              alt={image.description}
              width={1000}
              height={563}
            />
          </motion.div>
        ))}
        <motion.h3
          ref={sectionRef}
          className='w-full whitespace-nowrap text-[800px] font-medium text-monospace-white mix-blend-difference'
          style={{ x }}
        >
          Since 2017
        </motion.h3>
      </div>
    </section>
  )
}
