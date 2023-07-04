'use client'

import { useEffect, useRef, useState } from 'react'
import { PlusIcon } from '@/icons/PlusIcon'
import { PROJECTS } from '@/constants/projects'

export default function OtherProjects() {
  const [visibleItems, setVisibleItems] = useState(3)
  const sectionRef = useRef<HTMLElement>(null)

  const handleShowMore = () => {
    setVisibleItems((prevItems) => prevItems + 2)
  }

  useEffect(() => {
    if (sectionRef.current === null) return

    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }, [visibleItems])

  return (
    <section ref={sectionRef} className='px-40 mt-32 pb-36'>
      <h3 className='w-1/2 leading-none text-kili-white text-7xl'>
        And other equally important projects...
      </h3>
      <div className='flex flex-col w-full gap-10 mt-20'>
        {PROJECTS.filter((project) => !project.featured)
          .slice(0, visibleItems)
          .map((project) => (
            <div
              key={project.id}
              className='flex [&>*]:flex-1 items-center gap-x-10 border-b border-kili-light-gray pb-10'
            >
              <div className='flex gap-[6px]'>
                <h4 className='text-2xl text-kili-white'>{project.name}</h4>
                <span className='text-2xl text-kili-light-gray'>
                  — {project.role}
                </span>
              </div>
              <p className='text-2xl text-kili-light-gray'>
                {project.description}
              </p>
              <p className='text-2xl text-kili-light-gray'>{project.stacks}</p>
            </div>
          ))}
      </div>
      <button
        className='flex items-center gap-2 text-2xl duration-500 ease-in-out text-kili-white group hover:text-kili-light-gray'
        onClick={handleShowMore}
      >
        {visibleItems <
        PROJECTS.filter((project) => !project.featured).length ? (
          <>
            Load more
            <span className='transition-transform duration-500 ease-in-out group-hover:rotate-180'>
              <PlusIcon className='w-3' />
            </span>
          </>
        ) : (
          'No more projects'
        )}
      </button>
    </section>
  )
}
