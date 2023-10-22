'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import { useStore } from '@/lib/store/store'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import FeaturedProjectName from '@/components/projects/FeaturedProjectName'
import { CURSOR_STATUS } from '@/lib/constants/general'
import type { FeaturedProjectInterface } from '@/lib/interfaces/projects'

interface Props {
  project: FeaturedProjectInterface
  index: number
}

export default function FeaturedProject({ project, index }: Props) {
  const { setCursorStatus } = useStore()
  const projectEl = useRef<HTMLAnchorElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const { isDesktop } = useMediaQuery()
  const projectIsInView = useInView(projectEl, { once: true })
  const videoIsInView = useInView(videoRef, { amount: 'all' })
  const { scrollYProgress } = useScroll()

  const scrollOutputRange = isDesktop ? [0, 0.5] : [0, 0.3]
  const bgPositionY = useTransform(scrollYProgress, scrollOutputRange, [
    '0%',
    '140%'
  ])

  const handleMouseEnter = async () => {
    if (videoRef.current === null) return

    setIsHovered(project.id)
    setCursorStatus(CURSOR_STATUS.HIDDEN)
    document.body.style.backgroundColor = project.backgroundColor

    await videoRef.current.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current === null) return

    setIsHovered(null)
    setCursorStatus(CURSOR_STATUS.DEFAULT)
    document.body.style.backgroundColor = ''

    videoRef.current.pause()
  }

  const resetBackgroundColor = () => {
    document.body.style.backgroundColor = ''
  }

  useEffect(() => {
    if (isDesktop) return

    if (videoIsInView) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
    }
  }, [videoIsInView, isDesktop])

  const shouldDelay = index < 2 && !isDesktop

  return (
    <Link
      ref={projectEl}
      href={`/project/${project.slug}`}
      onClick={resetBackgroundColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className='relative flex flex-col aspect-[18/25] group cursor-none'>
        <motion.header
          className='top-0 left-0 p-5 flex items-center xl:absolute w-full h-full bg-[length:130%] xl:group-hover:bg-[length:114%] transition-[background-size] ease-in-out duration-1000'
          style={{
            backgroundImage: `url('${project.presentation.background}')`,
            backgroundPositionY: bgPositionY
          }}
          initial={{
            clipPath: 'inset(100% 0% 0% 0%)'
          }}
          animate={
            projectIsInView && {
              clipPath: 'inset(0% 0% 0% 0%)'
            }
          }
          transition={{
            duration: 3,
            ease: [0.17, 0.84, 0.44, 1],
            delay: shouldDelay ? project.id * 1.04 : 0
          }}
        >
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={
              videoIsInView && {
                opacity: 1
              }
            }
            transition={{
              duration: 2,
              ease: 'easeInOut'
            }}
          >
            <video
              ref={videoRef}
              className='w-full transition-transform duration-1000 ease-in-out scale-100 xl:scale-[.85] aspect-video xl:group-hover:scale-100'
              src={project.presentation.video}
              poster={project.presentation.poster}
              loop
              muted
              autoPlay={!isDesktop}
              playsInline={!isDesktop}
              disableRemotePlayback
            />
          </motion.div>{' '}
        </motion.header>

        <FeaturedProjectName projectId={project.id} isHovered={isHovered}>
          {project.name}
        </FeaturedProjectName>
        <footer className='left-0 mt-2 leading-tight xl:leading-none xl:mt-0 xl:absolute xl:text-xl xl:overflow-hidden top-full text-kili-light-gray xl:text-kili-white'>
          <motion.span
            className='xl:block'
            initial={{
              y: '-105%'
            }}
            animate={
              isDesktop
                ? {
                    y: isHovered === project.id ? '20%' : '-105%'
                  }
                : {
                    y: '16px'
                  }
            }
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
          >
            <Balancer>{project.role}</Balancer>
          </motion.span>
        </footer>
      </article>
    </Link>
  )
}
