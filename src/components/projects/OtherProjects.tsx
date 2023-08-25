'use client'

import { useRef, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { PlusIcon } from '@/icons/PlusIcon'
import { useStore } from '@/store/store'
import {
  OTHER_PROJECTS_VARIANTS,
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/constants/variants'
import { OTHER_PROJECTS } from '@/constants/projects'
import { CURSOR_STATUS } from '@/constants/general'

export default function OtherProjects() {
  const { setCursorStatus, setShowContactForm } = useStore()
  const sectionEl = useRef<HTMLElement>(null)
  const totalNumberOfProjects = useRef(OTHER_PROJECTS.length)
  const [visibleItems, setVisibleItems] = useState(3)
  const isInView = useInView(sectionEl, { once: true })

  const handleShowMore = () => {
    setVisibleItems((prevItems) => prevItems + 1)

    if (visibleItems >= totalNumberOfProjects.current) setShowContactForm(true)
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
        {OTHER_PROJECTS.slice(0, visibleItems).map((project) => (
          <a
            key={project.id}
            href={project.link}
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          >
            <article className='relative flex items-center group'>
              <div className='overflow-hidden'>
                <motion.div
                  className='flex items-center pt-10 pb-[42px] gap-x-10'
                  variants={OTHER_PROJECT_VARIANTS}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                  <div className='flex gap-[6px] items-center w-[30%] text-2xl'>
                    <h4 className='relative duration-700 ease-in-out text-kili-white before:h-[2px] before:scale-x-0 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-left group-hover:before:scale-x-100 before:transition-transform before:ease-in group-hover:before:ease-out before:duration-700 after:delay-700 group-hover:before:delay-0 after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:ease-in group-hover:after:ease-out after:duration-700 group-hover:after:delay-700'>
                      {project.name}
                    </h4>
                    <span className='text-kili-light-gray'>
                      — {project.role}
                    </span>
                  </div>
                  <p className='flex-1 text-2xl text-kili-light-gray'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap flex-1 gap-2 text-sm text-kili-light-gray'>
                    {project.stacks.map((stack, index) => (
                      <span
                        key={index}
                        className='px-[10px] py-[3px] border rounded-full border-kili-light-gray'
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <p className='text-2xl text-kili-light-gray'>
                    {project.year}
                  </p>
                </motion.div>
                <motion.hr
                  className='w-full h-[2px] border-kili-light-gray origin-left'
                  variants={OTHER_PROJECT_HR_VARIANTS}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </div>
              {project.image !== undefined && (
                <div
                  className={clsx(
                    'absolute overflow-hidden right-10 z-10',
                    project.id % 2 === 0 ? '-rotate-3' : 'rotate-3'
                  )}
                >
                  <Image
                    className='duration-700 ease-in-out transition-transform translate-y-[101%] group-hover:translate-y-0'
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={250}
                    quality={90}
                  />
                </div>
              )}
            </article>
          </a>
        ))}
      </motion.div>
      <motion.button
        className='flex items-center gap-2 mt-10 text-2xl text-kili-white group'
        onClick={handleShowMore}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
      >
        {visibleItems < totalNumberOfProjects.current ? (
          <>
            Load more
            <PlusIcon className='w-3 transition-transform duration-700 ease-in-out group-hover:rotate-180' />
          </>
        ) : (
          'No more projects. Do you want to be part?'
        )}
      </motion.button>
    </section>
  )
}
