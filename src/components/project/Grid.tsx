'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import Video from '@components/project/Video'
import { useScopedI18n } from '@lib/i18n/client'
import type { FeaturedProjectInterface } from '@lib/types/projects'
import { useRef } from 'react'

interface Props {
  project: FeaturedProjectInterface
}

export default function Grid({ project }: Props) {
  const t = useScopedI18n('project')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 5000,
    damping: 400
  })

  const videoWidth = useTransform(scrollY, [0, 1], ['10vw', '90vw'])
  const sectionY = useTransform(scrollY, [0, 1], ['0%', '-50%'])

  return (
    <>
      <section className='grid grid-cols-3 gap-36 px-40 pb-36'>
        <Video
          className='col-span-3 aspect-video w-full'
          src={project.presentation.video}
        />
        <Image
          src={`/images/projects/${project.slug}/gallery-1.webp`}
          width={437}
          height={778}
          alt={project.name}
        />
        <Video
          className='w-full'
          src={`/images/projects/${project.slug}/gallery-2.webm`}
        />
        <div className='flex flex-col gap-36'>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-monospace-light-gray'>
              {t('yearHeadline')}
            </h3>
            <p className='text-4xl text-monospace-white'>{project.year}</p>
          </div>
          <div>
            <p className='text-4xl leading-tight text-monospace-white'>
              <Balancer>{project.sectionDescription}</Balancer>
            </p>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className='flex h-screen w-full gap-20 overflow-hidden bg-monospace-black'
      >
        <motion.div
          className='-mt-40 flex w-full flex-col gap-20'
          style={{ y: sectionY }}
        >
          <Image
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-1.webp`}
            width={437}
            height={778}
            alt={project.name}
          />
          <Video
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-2.webm`}
            autoPlay
          />
          <Image
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-1.webp`}
            width={437}
            height={778}
            alt={project.name}
          />
          <Video
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-2.webm`}
            autoPlay
          />
        </motion.div>

        <motion.div
          className='mt-40 flex aspect-video h-auto flex-col items-center gap-20'
          style={{ width: videoWidth, y: sectionY }}
        >
          <Video
            className='aspect-video w-full'
            src={`/images/projects/${project.slug}/gallery-3.webm`}
            autoPlay
          />
          <Video
            className='aspect-video w-full'
            src={project.presentation.video}
            autoPlay
          />
        </motion.div>

        <motion.div
          className='flex w-full flex-col gap-20'
          style={{ y: sectionY }}
        >
          <Video
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-4.webm`}
            autoPlay
          />
          <Image
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-5.webp`}
            width={437}
            height={778}
            alt={project.name}
          />
          <Video
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-4.webm`}
            autoPlay
          />
          <Image
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-5.webp`}
            width={437}
            height={778}
            alt={project.name}
          />
        </motion.div>
      </section>

      <section className='grid grid-cols-3 gap-36 bg-monospace-dark-gray px-40 py-36'>
        <div className='flex flex-col gap-36'>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-monospace-light-gray'>
              {t('roleHeadline')}
            </h3>
            <p className='text-4xl text-monospace-white'>{project.role}</p>
          </div>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-monospace-light-gray'>
              {t('stacksHeadline')}
            </h3>
            <ul className='flex flex-1 flex-wrap gap-4'>
              {project.stacks.map((stack, index) => (
                <li
                  key={index}
                  className='rounded-full border-2 border-monospace-light-gray px-5 pb-[7px] pt-2 text-4xl text-monospace-white'
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Video
          className='w-full'
          src={`/images/projects/${project.slug}/gallery-4.webm`}
        />
        <Image
          src={`/images/projects/${project.slug}/gallery-1.webp`}
          width={437}
          height={778}
          alt={project.name}
          loading='lazy'
        />
      </section>
    </>
  )
}
