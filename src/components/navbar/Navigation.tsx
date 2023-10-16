'use client'

import { useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

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
              <li key={section.slug} className='overflow-hidden'>
                <TextLink
                  onClick={() => setNavbarStatus(false)}
                  href={`/#${section.slug}`}
                >
                  <motion.span
                    className='block text-kili-white text-9xl'
                    variants={NAVBAR_LI_VARIANTS}
                  >
                    {section.name}
                  </motion.span>
                </TextLink>
              </li>
            ))}
            <li className='overflow-hidden peer-[.isHovered]:opacity-90'>
              <TextButton onClick={() => openContactModal()}>
                <motion.span
                  className='block text-kili-white text-9xl'
                  variants={NAVBAR_LI_VARIANTS}
                >
                  {t('letsTalk')}
                </motion.span>
              </TextButton>
            </li>
            {/* <div className='absolute inset-0 bg-kili-dark-gray opacity-0 transition-all duration-1000 ease-in-out pointer-events-none peer-[.isHovered]:opacity-90' /> */}
          </ul>
          <ul className='flex flex-col items-end gap-5 text-5xl text-kili-light-gray'>
            <li className='overflow-hidden group'>
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
                <span className='block transition-transform duration-1000 ease-in-out xl:group-hover:animate-translate-y'>
                  GitHub
                </span>
              </motion.a>
            </li>
            <li className='overflow-hidden group'>
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
                <span className='block transition-transform duration-1000 ease-in-out xl:group-hover:animate-translate-y'>
                  LinkedIn
                </span>
              </motion.a>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
