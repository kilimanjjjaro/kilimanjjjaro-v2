'use client'

import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import Link from '@/components/shared/Link'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES } from '@/lib/constants/general'
import clsx from 'clsx'

export default function LargeNavigation() {
  const currentLocale = useCurrentLocale()
  const { navbarStatus, setNavbarStatus, setShowContactForm } = useStore()
  const { version } = useNavbar()

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
    <nav className='fixed inset-0 p-16 bg-monospace-dark-gray'>
      <ul
        className={clsx(
          'flex',
          navbarStatus ? 'flex-col gap-10' : 'flex-row gap-20'
        )}
      >
        {sections.map((section, index) => (
          <li
            key={section.slug}
            className={clsx(
              'text-monospace-light-gray leading-none overflow-hidden xl:hover:text-monospace-white transition-colors duration-700 ease-in-out',
              navbarStatus ? 'text-[7vw]' : 'text-xl'
            )}
          >
            <motion.span
              className='block'
              initial={{ y: '118%' }}
              animate={{
                y: version <= 1 || navbarStatus ? '0%' : '118%',
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
    </nav>
  )
}
