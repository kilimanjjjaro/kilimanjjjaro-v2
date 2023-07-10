'use client'

import { useRef, useState } from 'react'
import { PlusIcon } from '@/icons/PlusIcon'
import { PROJECTS } from '@/constants/projects'
import { useLenis } from '@studio-freight/react-lenis'
import { motion, useInView } from 'framer-motion'
import useSplitText from '@/hooks/useSplitText'
import { ArrowLongRightIcon } from '@/icons/ArrowLongRightIcon'

export default function OtherProjects() {
  const [visibleItems, setVisibleItems] = useState(3)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const lenis = useLenis()
  const { elRef } = useSplitText()

  const handleShowMore = () => {
    setVisibleItems((prevItems) => prevItems + 2)

    if (lenis !== undefined) {
      const startOfSection = document.getElementById('projects')?.offsetTop

      lenis.scrollTo(startOfSection, {
        duration: 3
      })
    }
  }

  return (
    <section className='px-40 mt-32 pb-36'>
      <h3 ref={elRef} className='w-1/2 leading-none text-kili-white text-7xl'>
        And other equally important projects...
      </h3>
      <motion.div
        ref={sectionRef}
        className='mt-10'
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
              staggerChildren: 0.3,
              delayChildren: 0.3
            }
          }
        }}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
      >
        {PROJECTS.filter((project) => !project.featured)
          .slice(0, visibleItems)
          .map((project) => (
            <motion.article
              key={project.id}
              className='flex items-center py-10 border-b gap-x-10 border-kili-light-gray group'
              variants={{
                hidden: {
                  opacity: 0,
                  y: '50%',
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                  }
                },
                show: {
                  opacity: 1,
                  y: '0%',
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                  }
                }
              }}
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
              <p className='text-2xl text-kili-light-gray'>{project.stacks}</p>
              <p className='text-2xl text-kili-light-gray'>{project.year}</p>
            </motion.article>
          ))}
      </motion.div>
      <motion.button
        className='flex items-center gap-2 mt-10 text-2xl duration-700 ease-in-out opacity-0 text-kili-white group hover:text-kili-light-gray'
        onClick={handleShowMore}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
              delay: 1.3
            }
          }
        }}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
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
