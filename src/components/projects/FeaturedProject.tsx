'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import useMediaQuery from '@lib/hooks/useMediaQuery'
import FeaturedProjectName from '@components/projects/FeaturedProjectName'
import type { FeaturedProjectInterface } from '@lib/types/projects'
import Image from 'next/image'

interface Props {
  project: FeaturedProjectInterface
  index: number
}

export default function FeaturedProject({ project, index }: Props) {
  const projectEl = useRef<HTMLAnchorElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const projectIsInView = useInView(projectEl, { once: true })
  const videoIsInView = useInView(videoRef, { amount: 'all' })
  const { isDesktop } = useMediaQuery()

  const handleMouseEnter = async () => {
    if (videoRef.current === null) return

    setIsHovered(project.id)
    document.body.style.backgroundColor = project.backgroundColor

    videoRef.current.currentTime = 0
    await videoRef.current.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current === null) return

    setIsHovered(null)
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
      <article className='group relative flex aspect-[18/13] cursor-none flex-col'>
        <motion.main
          className='left-0 top-0 flex h-full w-full items-center bg-[length:110%] bg-center p-6 transition-[background-size] duration-700 ease-in-out xl:absolute xl:group-hover:bg-[length:100%]'
          style={{
            backgroundImage: `url('${project.presentation.background}')`
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
            className='relative aspect-video w-full scale-100 transition-transform duration-700 ease-in-out xl:scale-[.82] xl:group-hover:scale-100'
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
            {isDesktop && (
              <Image
                className='absolute object-cover object-center xl:block'
                src={project.presentation.poster}
                alt={project.name}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            )}
            <video
              ref={videoRef}
              className='aspect-video transition-opacity duration-700 ease-in-out xl:absolute xl:opacity-0 xl:group-hover:opacity-100'
              src={project.presentation.video}
              poster={project.presentation.poster}
              loop
              muted
              autoPlay={!isDesktop}
              playsInline={!isDesktop}
              disableRemotePlayback
            />
          </motion.div>{' '}
        </motion.main>

        <FeaturedProjectName projectId={project.id} isHovered={isHovered}>
          {project.name}
        </FeaturedProjectName>
        <footer className='left-0 top-full mt-2 leading-tight text-monospace-light-gray xl:absolute xl:mt-0 xl:overflow-hidden xl:text-xl xl:leading-none xl:text-monospace-white'>
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
