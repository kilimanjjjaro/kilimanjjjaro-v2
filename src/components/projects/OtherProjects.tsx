'use client'

import { useRef, useState } from 'react'
import { PlusIcon } from '@/icons/PlusIcon'
import { PROJECTS } from '@/constants/projects'
import { motion, useInView } from 'framer-motion'
import { ArrowLongRightIcon } from '@/icons/ArrowLongRightIcon'
import {
  OTHER_PROJECTS_VARIANTS,
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/constants/variants'

export default function OtherProjects() {
  const [visibleItems, setVisibleItems] = useState(3)
  const sectionEl = useRef<HTMLElement>(null)
  const isInView = useInView(sectionEl, { once: true })

  const handleShowMore = () => {
    setVisibleItems((prevItems) => prevItems + 2)
  }

  return (
    <section ref={sectionEl} className='px-40 pb-36'>
      <h3 className='flex flex-col w-1/2 leading-none text-kili-white text-7xl'>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            initial={{ y: '100%' }}
            animate={isInView && { y: '0%' }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
          >
            And other equally
          </motion.span>
        </span>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            initial={{ y: '100%' }}
            animate={isInView && { y: '0%' }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: 0.2
            }}
          >
            important projects...
          </motion.span>
        </span>
      </h3>
      <motion.div
        className='mt-10'
        variants={OTHER_PROJECTS_VARIANTS}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 0, staggerChildren: 0.3 }}
      >
        {PROJECTS.filter((project) => !project.featured)
          .slice(0, visibleItems)
          .map((project) => (
            <article key={project.id} className='relative overflow-hidden'>
              <motion.div
                className='flex items-center py-10 overflow-x-hidden gap-x-10 group'
                variants={OTHER_PROJECT_VARIANTS}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              >
                <div className='relative flex gap-[6px] items-center flex-1'>
                  <span className='absolute overflow-hidden'>
                    <ArrowLongRightIcon className='w-6 duration-700 ease-in-out -translate-x-full text-kili-light-gray group-hover:text-kili-white group-hover:translate-x-0' />
                  </span>
                  <h4 className='text-2xl duration-700 ease-in-out text-kili-white group-hover:ml-10'>
                    {project.name}
                  </h4>
                  <span className='text-2xl text-kili-light-gray'>
                    — {project.role}
                  </span>
                </div>
                <p className='flex-1 text-2xl text-kili-light-gray'>
                  {project.description}
                </p>
                <p className='text-2xl text-kili-light-gray'>
                  {project.stacks}
                </p>
                <p className='text-2xl text-kili-light-gray'>{project.year}</p>
              </motion.div>
              <motion.hr
                className='bottom-0 w-full h-[2px] border-kili-light-gray absolute origin-left'
                variants={OTHER_PROJECT_HR_VARIANTS}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </article>
          ))}
      </motion.div>
      <motion.button
        className='flex items-center gap-2 mt-10 text-2xl duration-700 ease-in-out text-kili-white group hover:text-kili-light-gray'
        onClick={handleShowMore}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
      >
        {visibleItems <
        PROJECTS.filter((project) => !project.featured).length ? (
          <>
            Load more
            <span className='transition-transform duration-700 ease-in-out group-hover:rotate-180'>
              <PlusIcon className='w-3' />
            </span>
          </>
        ) : (
          'No more projects'
        )}
      </motion.button>
    </section>
  )
}
