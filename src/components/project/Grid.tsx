'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const gridScale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
  const columnYNegative = useTransform(scrollYProgress, [0, 1], ['25%', '-15%'])
  const columnYPositive = useTransform(scrollYProgress, [0, 1], ['-15%', '25%'])

  return (
    <>
      <section className='grid grid-cols-1 xl:grid-cols-3 px-6 gap-6 xl:px-40 xl:pb-36 xl:gap-36'>
        <Video
          className='w-full xl:col-span-3 aspect-video'
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
        <div className='flex flex-col pb-6 gap-6 xl:gap-36'>
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
        className='flex relative items-center w-full h-screen gap-20 overflow-hidden bg-kili-black'
      >
        <motion.section
          className='grid absolute grid-cols-2 xl:grid-cols-[auto_55vw_auto] w-full gap-6 xl:gap-20'
          style={{ scale: gridScale }}
        >
          <motion.div
            className='flex flex-col w-full gap-6 xl:gap-20'
            style={{ y: columnYNegative }}
          >
            <Image
              className='w-full'
              src={`/images/projects/${project.slug}/gallery-1.webp`}
              width={437}
              height={778}
              alt='Since 2017'
            />
            <Video
              className='w-full'
              src={`/images/projects/${project.slug}/gallery-2.webm`}
              autoPlay
            />
          </motion.div>

          <div className='hidden items-center h-full xl:flex'>
            <Video
              className='w-full aspect-video'
              src={project.presentation.video}
              autoPlay
            />
          </div>

          <motion.div
            className='flex flex-col w-full gap-6 xl:gap-20'
            style={{ y: columnYPositive }}
          >
            <Image
              className='w-full'
              src={`/images/projects/${project.slug}/gallery-5.webp`}
              width={437}
              height={778}
              alt='Since 2017'
            />
            <Video
              className='w-full'
              src={`/images/projects/${project.slug}/gallery-4.webm`}
              autoPlay
            />
          </motion.div>
        </motion.section>
      </section>

      <section className='grid xl:grid-cols-3 xl:px-40 xl:py-36 py-20 px-6 gap-6 xl:gap-36 bg-kili-dark-gray'>
        <div className='flex flex-col pb-6 xl:pb-0 gap-6 xl:gap-36'>
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
