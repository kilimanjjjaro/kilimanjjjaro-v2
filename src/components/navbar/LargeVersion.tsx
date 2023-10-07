import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import TextLink from '@/components/shared/TextLink'
import TextButton from '@/components/shared/TextButton'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, CURSOR_STATUS } from '@/lib/constants/general'

export default function LargeVersion() {
  const { setCursorStatus, setShowContactForm } = useStore()
  const lenis = useLenis()
  const currentLocale = useCurrentLocale()

  const sections = useMemo(() => {
    return currentLocale === 'en' ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const letsTalkText = currentLocale === 'en' ? "Let's talk!" : '¡Hablemos!'

  return (
    <motion.nav
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.7,
          ease: 'easeInOut'
        }
      }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut'
      }}
    >
      <ul className='flex gap-10 leading-none'>
        {sections.map((section) => (
          <li
            key={section.slug}
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          >
            <TextLink
              className='tracking-wide transition-colors duration-700 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
              href={`/#${section.slug}`}
              onClick={() =>
                lenis.scrollTo(`#${section.slug}`, {
                  duration: 2,
                  offset: section.slug === 'featured-projects' ? -160 : 0
                })
              }
            >
              {section.name}
            </TextLink>
          </li>
        ))}
        <li
          onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
          onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
        >
          <TextButton
            className='tracking-wide transition-colors duration-700 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
            onClick={() => setShowContactForm(true)}
          >
            {letsTalkText}
          </TextButton>
        </li>
      </ul>
    </motion.nav>
  )
}
