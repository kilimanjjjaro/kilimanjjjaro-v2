'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import Video from '@/components/project/Video'
import { useScopedI18n } from '@/lib/i18n/client'
import type { FeaturedProjectInterface } from '@/lib/interfaces/projects'
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
      <section className='grid grid-cols-3 px-40 pb-36 gap-36'>
        <Video
          className='w-full col-span-3 aspect-video'
          src={project.presentation.video}
        />
        <Image
          src={`/images/projects/${project.slug}/gallery-1.webp`}
          width={437}
          height={778}
          alt={project.name}
          quality={90}
        />
        <Video
          className='w-full'
          src={`/images/projects/${project.slug}/gallery-2.webm`}
        />
        <div className='flex flex-col gap-36'>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
              {t('yearHeadline')}
            </h3>
            <p className='text-4xl text-kili-white'>{project.year}</p>
          </div>
          <div>
            <p className='text-4xl leading-tight text-kili-white'>
              <Balancer>{project.sectionDescription}</Balancer>
            </p>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className='flex w-full h-screen gap-20 overflow-hidden bg-kili-black'
      >
        <motion.div
          className='flex flex-col w-full gap-20 -mt-40'
          style={{ y: sectionY }}
        >
          <Image
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-1.webp`}
            width={437}
            height={778}
            alt={project.name}
            quality={90}
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
            quality={90}
          />
          <Video
            className='w-full'
            src={`/images/projects/${project.slug}/gallery-2.webm`}
            autoPlay
          />
        </motion.div>

        <motion.div
          className='flex flex-col items-center h-auto gap-20 mt-40 aspect-video'
          style={{ width: videoWidth, y: sectionY }}
        >
          <Video
            className='w-full aspect-video'
            src={`/images/projects/${project.slug}/gallery-3.webm`}
            autoPlay
          />
          <Video
            className='w-full aspect-video'
            src={project.presentation.video}
            autoPlay
          />
        </motion.div>

        <motion.div
          className='flex flex-col w-full gap-20'
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
            quality={90}
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
            quality={90}
          />
        </motion.div>
      </section>

      <section className='grid grid-cols-3 px-40 py-36 gap-36 bg-kili-dark-gray'>
        <div className='flex flex-col gap-36'>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
              {t('roleHeadline')}
            </h3>
            <p className='text-4xl text-kili-white'>{project.role}</p>
          </div>
          <div>
            <h3 className='mb-10 text-xl leading-tight text-kili-light-gray'>
              {t('stacksHeadline')}
            </h3>
            <ul className='flex flex-wrap flex-1 gap-4'>
              {project.stacks.map((stack, index) => (
                <li
                  key={index}
                  className='px-5 pt-2 pb-[7px] text-4xl border-2 rounded-full text-kili-white border-kili-light-gray'
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
          src={`/images/projects/${project.slug}/gallery-5.webp`}
          width={437}
          height={778}
          alt={project.name}
          quality={90}
          loading='lazy'
        />
      </section>
    </>
  )
}
