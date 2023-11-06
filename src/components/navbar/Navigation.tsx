'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import Button from '@/components/shared/Button'
import Link from '@/components/shared/Link'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES, NAVIGATION_VARIANTS } from '@/lib/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/lib/constants/variants'

export default function Navigation() {
  const currentLocale = useCurrentLocale()
  const { navbarStatus, setNavbarStatus, setShowContactForm } = useStore()
  const [hoveredSection, setHoveredSection] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  const { variant } = useNavbar()

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  const handleMouseEnter = (slug: string) => {
    setIsHovering(true)
    setHoveredSection(slug)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setHoveredSection('')
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setNavbarStatus(false)
      }
    })

    if (variant === NAVIGATION_VARIANTS.large) setNavbarStatus(false)
  }, [setNavbarStatus, variant])

  return (
    <AnimatePresence>
      {navbarStatus && (
        <motion.nav
          className='z-40 fixed inset-0 flex justify-center items-center px-6 pt-32 pb-8 bg-monospace-dark-gray xl:px-20 xl:py-16'
          variants={NAVBAR_VARIANTS}
          initial={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
          }}
          animate={navbarStatus ? 'open' : 'closed'}
          exit='closed'
        >
          <ul className='relative flex flex-col items-center gap-4'>
            {sections.map((section) => (
              <li
                key={section.slug}
                className={clsx(
                  'block text-3xl font-geist-mono text-monospace-white leading-none xl:text-9xl xl:leading-[1.1] overflow-hidden transition-colors duration-700 xl:ease-in-out-monospace',
                  isHovering &&
                    hoveredSection !== section.slug &&
                    '!text-monospace-light-gray'
                )}
                onMouseEnter={() => handleMouseEnter(section.slug)}
                onMouseLeave={handleMouseLeave}
              >
                {section.slug !== 'contact' ? (
                  <Link
                    onClick={() => setNavbarStatus(false)}
                    href={`/#${section.slug}`}
                  >
                    <motion.span
                      className='block'
                      variants={NAVBAR_LI_VARIANTS}
                      initial={{ y: '118%' }}
                    >
                      {section.name}
                    </motion.span>
                  </Link>
                ) : (
                  <Button onClick={() => openContactModal()}>
                    <motion.span
                      className='block'
                      variants={NAVBAR_LI_VARIANTS}
                      initial={{ y: '118%' }}
                    >
                      {section.name}
                    </motion.span>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
