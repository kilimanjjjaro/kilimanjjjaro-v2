'use client'

import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import Link from '@/components/shared/Link'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES } from '@/lib/constants/general'

export default function Navigation() {
  const currentLocale = useCurrentLocale()
  const { navbarStatus, setNavbarStatus, setShowContactForm } = useStore()

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setNavbarStatus(false)
      }
    })
  }, [setNavbarStatus])

  return (
    <motion.nav
      className='z-10 fixed inset-0 p-16 overflow-hidde bg-monospace-dark-gray'
      initial={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
      }}
      animate={{
        clipPath: navbarStatus
          ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
          : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
      }}
      transition={{
        duration: 0.7,
        ease: [0.77, 0, 0.18, 1]
      }}
    >
      <ul className='flex flex-col items-center gap-5'>
        {sections.map((section, index) => (
          <li
            key={section.slug}
            className='text-monospace-light-gray text-9xl leading-[1.1] overflow-hidden xl:hover:text-monospace-white xl:transition-colors xl:duration-700 xl:ease-in-out'
          >
            <motion.span
              className='block'
              initial={{ y: '118%' }}
              animate={{
                y: navbarStatus ? '0%' : '118%',
                transition: {
                  duration: 0.7,
                  ease: [0.77, 0, 0.18, 1],
                  delay: index * 0.1
                }
              }}
            >
              {section.slug !== 'contact' ? (
                <Link
                  onClick={() => setNavbarStatus(false)}
                  href={`/#${section.slug}`}
                >
                  <motion.span className='block'>{section.name}</motion.span>
                </Link>
              ) : (
                <Button onClick={() => openContactModal()}>
                  <motion.span className='block'>{section.name}</motion.span>
                </Button>
              )}
            </motion.span>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
