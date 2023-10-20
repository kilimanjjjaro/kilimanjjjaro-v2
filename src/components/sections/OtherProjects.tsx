'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import OtherProject from '@/components/projects/OtherProject'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { OTHER_PROJECTS_VARIANTS } from '@/lib/constants/variants'
import { MORE_PROJECTS } from '@/lib/constants/projects'
import { CURSOR_STATUS, LOCALES } from '@/lib/constants/general'

export default function OtherProjects() {
  const t = useScopedI18n('home.otherProjects')
  const currentLocale = useCurrentLocale()
  const { setCursorStatus, setShowContactForm } = useStore()
  const sectionEl = useRef<HTMLElement>(null)
  const totalNumberOfProjects = useRef(MORE_PROJECTS.en.length)
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

  const otherProjects = useMemo(() => {
    return currentLocale === LOCALES.en ? MORE_PROJECTS.en : MORE_PROJECTS.es
  }, [currentLocale])

  return (
    <section
      id='other-projects'
      ref={sectionEl}
      className='px-6 pt-20 pb-24 xl:pb-40 xl:px-40 xl:pt-36 bg-kili-black'
    >
      <h3 className='flex flex-col text-4xl leading-none xl:w-1/2 text-kili-white xl:text-7xl'>
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
      <motion.section
        className='mt-6 xl:mt-10'
        variants={OTHER_PROJECTS_VARIANTS}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 0, staggerChildren: 0.3 }}
      >
        {otherProjects.slice(0, visibleItems).map((project) => (
          <OtherProject
            key={project.id}
            project={project}
            visitButton={t('visitButton')}
          />
        ))}
      </motion.section>
      <motion.button
        className='flex items-center w-full gap-2 mt-6 text-2xl xl:w-auto xl:mt-10 text-kili-white group'
        onClick={handleShowMore}
        onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
        onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 2 }}
      >
        {buttonText}
        {visibleItems < totalNumberOfProjects.current && (
          <PlusIcon className='w-3 transition-transform duration-1000 ease-in-out xl:group-hover:rotate-180' />
        )}
      </motion.button>
    </section>
  )
}
