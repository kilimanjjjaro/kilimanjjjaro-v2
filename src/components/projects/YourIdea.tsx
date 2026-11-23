import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import {
  REVEAL_STAGGER,
  REVEAL_TRANSITION,
  REVEALED_STATE,
  TEXT_REVEAL_HIDDEN_STATE
} from '@/lib/constants/animation'
import { YOUR_IDEA_KEYS } from '@/lib/constants/projects-ui'
import { CursorStatus } from '@/lib/constants/cursor'

export default function YourIdea() {
  const t = useScopedI18n('home.featuredProjects')
  const setShowContactForm = useStore((state) => state.setShowContactForm)
  const setCursorStatus = useStore((state) => state.setCursorStatus)
  const buttonEl = useRef<HTMLButtonElement>(null)
  const isInView = useInView(buttonEl, { once: true })

  return (
    <button
      ref={buttonEl}
      onClick={() => {
        setShowContactForm(true)
      }}
      onMouseEnter={() => {
        setCursorStatus(CursorStatus.Hover)
      }}
      onMouseLeave={() => {
        setCursorStatus(CursorStatus.Default)
      }}
      className='text-5xl leading-none flex flex-col text-kili-white xl:text-9xl 2xl:text-8xl text-left xl:hover:text-kili-light-gray transition-colors duration-1000 ease-in-out'
    >
      {YOUR_IDEA_KEYS.map((key, index) => (
        <span key={key} className='overflow-hidden'>
          <motion.span
            className='xl:block'
            initial={TEXT_REVEAL_HIDDEN_STATE}
            animate={isInView && REVEALED_STATE}
            transition={{ ...REVEAL_TRANSITION, delay: index * REVEAL_STAGGER }}
          >
            {t(key)}
          </motion.span>
        </span>
      ))}
    </button>
  )
}
