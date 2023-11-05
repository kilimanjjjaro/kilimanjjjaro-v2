'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import Link from '@/components/shared/Link'
import { useStore } from '@/lib/store/store'
import useNavbar from '@/lib/hooks/useNavbar'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES, NAVIGATION_VARIANTS } from '@/lib/constants/general'

export default function LargeVariant() {
  const { setNavbarStatus, setShowContactForm } = useStore()
  const currentLocale = useCurrentLocale()
  const { variant } = useNavbar()

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  return (
    <nav>
      <ul className='flex gap-20'>
        {sections.map((section, index) => (
          <li
            key={section.slug}
            className='text-monospace-light-gray text-xl leading-none overflow-hidden xl:hover:text-monospace-white transition-colors duration-700 ease-in-out'
          >
            <motion.span
              className='block'
              initial={{ y: '118%' }}
              animate={{
                y: variant === NAVIGATION_VARIANTS.large ? '0%' : '118%',
                transition: {
                  duration: 0.7,
                  ease: [0.77, 0, 0.18, 1],
                  delay: index * 0.1
                }
              }}
            >
              {section.slug !== 'contact' ? (
                <Link href={`/#${section.slug}`}>
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
