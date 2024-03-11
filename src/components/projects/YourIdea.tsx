import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'

export default function YourIdea() {
  const t = useScopedI18n('home.featuredProjects')
  const setShowContactForm = useStore((state) => state.setShowContactForm)
  const buttonEl = useRef<HTMLButtonElement>(null)
  const isInView = useInView(buttonEl, { once: true })

  return (
    <button
      ref={buttonEl}
      onClick={() => setShowContactForm(true)}
      className='text-6xl leading-none flex flex-col text-kili-white xl:text-9xl 2xl:text-10xl text-left xl:hover:text-kili-light-gray transition-colors duration-1000 ease-in-out'
    >
      <span className='overflow-hidden'>
        <motion.span
          className='xl:block'
          initial={{ y: '127%', rotate: 4 }}
          animate={isInView && { y: '0%', rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }}
        >
          {t('yourIdea.0')}
        </motion.span>
      </span>
      <span className='overflow-hidden'>
        <motion.span
          className='xl:block'
          initial={{ y: '127%', rotate: 4 }}
          animate={isInView && { y: '0%', rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.2
          }}
        >
          {t('yourIdea.1')}
        </motion.span>
      </span>
      <span className='overflow-hidden'>
        <motion.span
          className='xl:block'
          initial={{ y: '127%', rotate: 4 }}
          animate={isInView && { y: '0%', rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.4
          }}
        >
          {t('yourIdea.2')}
        </motion.span>
      </span>
      <span className='overflow-hidden'>
        <motion.span
          className='xl:block'
          initial={{ y: '127%', rotate: 4 }}
          animate={isInView && { y: '0%', rotate: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: 0.6
          }}
        >
          {t('yourIdea.3')}
        </motion.span>
      </span>
    </button>
  )
}
