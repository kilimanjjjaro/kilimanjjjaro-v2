'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import LanguageSelector from '@/components/shared/LanguageSelector'
import Link from '@/components/shared/Link'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES } from '@/lib/constants/general'

export default function LargeVariant() {
  const setNavbarStatus = useStore((state) => state.setNavbarStatus)
  const setShowContactForm = useStore((state) => state.setShowContactForm)
  const currentLocale = useCurrentLocale()

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const openContactModal = () => {
    setNavbarStatus(false)
    setShowContactForm(true)
  }

  return (
    <nav className='flex justify-between items-start w-full'>
      <h2 className='text-monospace-white text-xl leading-none overflow-hidden'>
        <motion.span
          className='block'
          initial={{ y: '118%' }}
          animate={{
            y: '0%',
            transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
          }}
          exit={{
            y: '118%',
            transition: { duration: 0.7, ease: [0.77, 0, 0.18, 1] }
          }}
        >
          A solo future-proof web lab.
        </motion.span>
      </h2>
      <div className='flex gap-20 items-start'>
        <ul className='flex gap-20'>
          {sections.map((section, index) => (
            <li
              key={section.slug}
              className='text-monospace-light-gray text-xl leading-none overflow-hidden xl:hover:text-monospace-white transition-colors duration-700 ease-in-out'
            >
              <motion.div
                className='block'
                initial={{ y: '118%' }}
                animate={{
                  y: '0%',
                  transition: {
                    duration: 0.7,
                    ease: [0.77, 0, 0.18, 1],
                    delay: index * 0.1
                  }
                }}
                exit={{
                  y: '118%',
                  transition: {
                    duration: 0.7,
                    ease: [0.77, 0, 0.18, 1],
                    delay: index * 0.1
                  }
                }}
              >
                {section.slug !== 'contact' ? (
                  <Link href={`/#${section.slug}`}>{section.name}</Link>
                ) : (
                  <Button onClick={() => openContactModal()}>
                    {section.name}
                  </Button>
                )}
              </motion.div>
            </li>
          ))}
        </ul>
        <div className='overflow-hidden'>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}
