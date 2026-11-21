'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import Balancer from 'react-wrap-balancer'
import OtherProject from '@/components/projects/OtherProject'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { useScopedI18n } from '@/lib/i18n/client'
import { useStore } from '@/lib/store/store'
import { TOTAL_OTHER_PROJECTS } from '@/lib/constants/projects'
import getOtherProjectsButtonKey from '@/lib/utils/getOtherProjectsButtonKey'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import { FIRST_INDEX } from '@/lib/constants/math'
import {
  FADE_IN_STATE,
  FADE_OUT_STATE,
  REVEAL_STAGGER,
  REVEAL_TRANSITION,
  REVEALED_STATE,
  TEXT_REVEAL_HIDDEN_STATE
} from '@/lib/constants/animation'
import {
  INITIAL_VISIBLE_OTHER_PROJECTS,
  OTHER_PROJECTS_BUTTON_DELAY,
  OTHER_PROJECTS_HEADLINE_KEYS,
  OTHER_PROJECTS_PER_CLICK
} from '@/lib/constants/projects-ui'
import type { OtherProjectInterface } from '@/lib/types/projects'

interface Props {
  projects: OtherProjectInterface[]
}

export default function OtherProjects({ projects }: Props) {
  const t = useScopedI18n('home.otherProjects')
  const { setCursorStatus, setShowContactForm } = useStore()
  const sectionEl = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState(
    INITIAL_VISIBLE_OTHER_PROJECTS
  )
  const isInView = useInView(sectionEl, { once: true })
  const buttonText = t(getOtherProjectsButtonKey(visibleItems), {
    number: TOTAL_OTHER_PROJECTS - visibleItems
  })

  const handleShowMore = () => {
    setVisibleItems((prevItems) => prevItems + OTHER_PROJECTS_PER_CLICK)

    if (visibleItems >= TOTAL_OTHER_PROJECTS) setShowContactForm(true)
  }

  return (
    <section ref={sectionEl} className='px-6 pb-24 xl:pb-40 xl:px-20 2xl:px-40'>
      <h3 className='flex flex-col text-4xl leading-none xl:w-1/2 text-kili-white xl:text-6xl 2xl:text-7xl'>
        {OTHER_PROJECTS_HEADLINE_KEYS.map((key, index) => (
          <span key={key} className='overflow-hidden'>
            <motion.span
              className='block'
              initial={TEXT_REVEAL_HIDDEN_STATE}
              animate={isInView && REVEALED_STATE}
              transition={{
                ...REVEAL_TRANSITION,
                delay: index * REVEAL_STAGGER
              }}
            >
              {t(key)}
            </motion.span>
          </span>
        ))}
      </h3>
      <section className='mt-6 xl:mt-10'>
        {projects.slice(FIRST_INDEX, visibleItems).map((project) => (
          <OtherProject key={project.id} project={project} />
        ))}
      </section>
      <motion.button
        className='flex items-center w-full gap-2 mt-6 text-2xl xl:text-xl 2xl:text-2xl text-left xl:w-auto xl:mt-10 text-kili-white group'
        onClick={handleShowMore}
        onMouseEnter={() => {
          setCursorStatus(CURSOR_STATUS.HOVER)
        }}
        onMouseLeave={() => {
          setCursorStatus(CURSOR_STATUS.DEFAULT)
        }}
        initial={FADE_OUT_STATE}
        animate={isInView && FADE_IN_STATE}
        transition={{
          ...REVEAL_TRANSITION,
          delay: OTHER_PROJECTS_BUTTON_DELAY
        }}
      >
        <Balancer>{buttonText}</Balancer>
        {visibleItems < TOTAL_OTHER_PROJECTS && (
          <PlusIcon className='w-3 transition-transform duration-1000 ease-in-out xl:group-hover:rotate-180' />
        )}
      </motion.button>
    </section>
  )
}
