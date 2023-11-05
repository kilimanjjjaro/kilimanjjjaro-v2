'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import Link from '@/components/shared/Link'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useCurrentLocale } from '@/lib/i18n/client'
import {
  SECTIONS,
  LOCALES,
  INTRO_ANIMATION_DURATION
} from '@/lib/constants/general'

export default function LargeNavigation() {
  const currentLocale = useCurrentLocale()
  const { setNavbarStatus, setShowContactForm } = useStore()
  const [shouldDelay, setShouldDelay] = useState(true)
  const { version } = useNavbar()

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldDelay(false)
    }, INTRO_ANIMATION_DURATION)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setNavbarStatus(false)
      }
    })
  }, [setNavbarStatus])

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  return (
    <nav>
      <ul className='flex gap-20'>
        {sections.map((section, index) => (
          <li
            key={section.slug}
            className='text-monospace-light-gray text-xl leading-none transition-colors duration-1000 ease-in-out overflow-hidden'
          >
            <motion.span
              className='block'
              initial={{ y: '118%' }}
              animate={{
                y: version <= 1 ? '0%' : '118%',
                transition: {
                  duration: 1,
                  ease: [0.65, 0.05, 0.36, 1],
                  delay: shouldDelay ? 2 + index * 0.1 : 0 + index * 0.1
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
