'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import TextButton from '@/components/shared/TextButton'
import TextLink from '@/components/shared/TextLink'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { SECTIONS, LOCALES, SOCIAL_LINKS } from '@/lib/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/lib/constants/variants'

export default function Navigation() {
  const t = useScopedI18n('navbar')
  const currentLocale = useCurrentLocale()
  const { navbarStatus, setNavbarStatus, setShowContactForm } = useStore()
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
          className='fixed inset-0 z-40 flex flex-col justify-end gap-24 px-6 pt-32 pb-8 xl:p-8 xl:justify-end xl:gap-0 bg-kili-dark-gray'
          variants={NAVBAR_VARIANTS}
          initial='closed'
          animate={navbarStatus ? 'open' : 'closed'}
          exit='closed'
        >
          <h2 className='text-3xl xl:text-7xl text-kili-light-gray md:hidden'>
            <span className='block overflow-hidden'>
              <motion.span className='block' variants={NAVBAR_LI_VARIANTS}>
                {t('description.0')}
              </motion.span>
            </span>
            <span className='block overflow-hidden'>
              <motion.span className='block' variants={NAVBAR_LI_VARIANTS}>
                {t('description.1')}
              </motion.span>
            </span>
          </h2>
          <div className='flex flex-col justify-between gap-10 xl:items-end xl:flex-row'>
            <ul className='relative flex flex-col items-start gap-4 xl:-mb-3'>
              {sections.map((section) => (
                <li
                  key={section.slug}
                  className={clsx(
                    'block text-kili-white text-3xl leading-none xl:text-9xl overflow-hidden transition-colors duration-1000 ease-in-out',
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
                        {section.name}
                      </motion.span>
                    </TextButton>
                  )}
                </li>
              ))}
            </ul>
            <ul className='flex gap-6 xl:items-end xl:flex-col xl:static'>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <TextLink
                    className='text-xl leading-none transition-colors duration-1000 ease-in-out xl:text-6xl text-kili-light-gray xl:hover:text-kili-white'
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.name}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
