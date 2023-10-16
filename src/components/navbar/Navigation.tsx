'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import TextButton from '@/components/shared/TextButton'
import TextLink from '@/components/shared/TextLink'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { SECTIONS, CURSOR_STATUS, LOCALES } from '@/lib/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/lib/constants/variants'

export default function Navigation() {
  const t = useScopedI18n('footer')
  const currentLocale = useCurrentLocale()
  const { navbarStatus, setNavbarStatus, setCursorStatus, setShowContactForm } =
    useStore()
  const [hoveredSection, setHoveredSection] = useState('')
  const [isHovering, setIsHovering] = useState(false)

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const handleMouseEnter = useCallback((slug: string) => {
    setIsHovering(true)
    setHoveredSection(slug)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setHoveredSection('')
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setNavbarStatus(false)
      }
    })
  }, [setNavbarStatus])

  return (
    <AnimatePresence>
      {navbarStatus && (
        <motion.nav
          className='fixed inset-0 z-40 flex items-end justify-between p-8 bg-kili-dark-gray'
          variants={NAVBAR_VARIANTS}
          initial='closed'
          animate={navbarStatus ? 'open' : 'closed'}
          exit='closed'
        >
          <ul className='relative flex flex-col items-start gap-4'>
            {sections.map((section) => (
              <li
                key={section.slug}
                className={clsx(
                  'block text-kili-white text-9xl overflow-hidden transition-colors duration-1000 ease-in-out',
                  isHovering &&
                    hoveredSection !== section.slug &&
                    '!text-kili-light-gray'
                )}
                onMouseEnter={() => handleMouseEnter(section.slug)}
                onMouseLeave={handleMouseLeave}
              >
                {section.slug !== 'lets-talk' ? (
                  <TextLink
                    onClick={() => setNavbarStatus(false)}
                    href={`/#${section.slug}`}
                  >
                    <motion.span
                      className='block'
                      variants={NAVBAR_LI_VARIANTS}
                    >
                      {section.name}
                    </motion.span>
                  </TextLink>
                ) : (
                  <TextButton onClick={() => openContactModal()}>
                    <motion.span
                      className='block'
                      variants={NAVBAR_LI_VARIANTS}
                    >
                      {t('letsTalk')}
                    </motion.span>
                  </TextButton>
                )}
              </li>
            ))}
          </ul>
          <ul className='flex flex-col items-end gap-5'>
            <li className='overflow-hidden text-5xl transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'>
              <motion.a
                href='#'
                onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                initial={{ y: '110%', rotate: 4 }}
                animate={
                  navbarStatus
                    ? { y: '0%', rotate: 0 }
                    : { y: '110%', rotate: 4 }
                }
                transition={{
                  duration: 1.3,
                  ease: [0.77, 0, 0.18, 1],
                  delay: 0.2
                }}
              >
                GitHub
              </motion.a>
            </li>
            <li className='overflow-hidden text-5xl transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'>
              <motion.a
                href='#'
                onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                initial={{ y: '110%', rotate: 4 }}
                animate={
                  navbarStatus
                    ? { y: '0%', rotate: 0 }
                    : { y: '110%', rotate: 4 }
                }
                transition={{ duration: 1.3, ease: [0.77, 0, 0.18, 1] }}
              >
                LinkedIn
              </motion.a>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
