'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Balancer from 'react-wrap-balancer'
import OtherProject from '@/components/projects/OtherProject'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { OTHER_PROJECTS } from '@/lib/constants/projects'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import type { OtherProjectInterface } from '@/lib/types/projects'

interface Props {
  projects: OtherProjectInterface[]
}

export default function OtherProjects({ projects }: Props) {
  const t = useScopedI18n('home.otherProjects')
  const { setCursorStatus, setShowContactForm } = useStore()
  const sectionEl = useRef<HTMLElement>(null)
  const totalNumberOfProjects = useRef(OTHER_PROJECTS.en.length)
  const [visibleItems, setVisibleItems] = useState(2)
  const isInView = useInView(sectionEl, { once: true })
  const [buttonText, setButtonText] = useState('Load more')

  const handleShowMore = () => {
    setVisibleItems((prevItems) => prevItems + 1)

    if (visibleItems >= totalNumberOfProjects.current) setShowContactForm(true)
  }

  useEffect(() => {
    const restOfProjects = totalNumberOfProjects.current - visibleItems

    setButtonText(t('otherProjectsButtons.0'))

    if (visibleItems > 2) {
      setButtonText(t('otherProjectsButtons.1', { number: restOfProjects }))
    }

    if (visibleItems === totalNumberOfProjects.current - 1) {
      setButtonText(t('otherProjectsButtons.2'))
    }

    if (visibleItems >= totalNumberOfProjects.current) {
      setButtonText(t('otherProjectsButtons.3'))
    }
  }, [visibleItems, isInView, t])

  return (
    <section ref={sectionEl} className='px-6 pb-24 xl:pb-40 xl:px-20 2xl:px-40'>
      <h3 className='flex flex-col text-4xl leading-none xl:w-1/2 text-kili-white xl:text-6xl 2xl:text-7xl'>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            initial={{ y: '127%', rotate: 4 }}
            animate={isInView && { y: '0%', rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
          >
            {t('headline.0')}
          </motion.span>
        </span>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            initial={{ y: '127%', rotate: 4 }}
            animate={isInView && { y: '0%', rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: 0.2
            }}
          >
            {t('headline.1')}
          </motion.span>
        </span>
      </h3>
      <section className='mt-6 xl:mt-10'>
        {projects.slice(0, visibleItems).map((project) => (
          <OtherProject key={project.id} project={project} />
        ))}
      </section>
      <motion.button
        className='flex items-center w-full gap-2 mt-6 text-2xl xl:text-xl 2xl:text-2xl text-left xl:w-auto xl:mt-10 text-kili-white group'
        onClick={handleShowMore}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
      >
        <Balancer>{buttonText}</Balancer>
        {visibleItems < totalNumberOfProjects.current && (
          <PlusIcon className='w-3 transition-transform duration-1000 ease-in-out xl:group-hover:rotate-180' />
        )}
      </motion.button>
    </section>
  )
}
