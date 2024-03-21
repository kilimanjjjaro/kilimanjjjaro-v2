import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import NavbarButton from '@/components/navbar/NavbarButton'
import Link from '@/components/shared/Link'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES } from '@/lib/constants/globals'

export default function LargeVersion() {
  const { setShowContactForm } = useStore()
  const lenis = useLenis(() => {})
  const currentLocale = useCurrentLocale()

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

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
          duration: 1,
          ease: 'easeInOut'
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
    >
      <ul className='flex gap-10 leading-none mt-0.5'>
        {sections.map((section) => (
          <li
            key={section.slug}
            className='hidden tracking-wide transition-colors duration-1000 ease-in-out xl:list-item text-kili-light-gray xl:hover:text-kili-white'
          >
            {section.slug !== 'lets-talk' ? (
              <Link
                href={`/#${section.slug}`}
                onClick={() =>
                  lenis?.scrollTo(`#${section.slug}`, { duration: 2 })
                }
              >
                {section.name}
              </Link>
            ) : (
              <Button onClick={() => setShowContactForm(true)}>
                {section.name}
              </Button>
            )}
          </li>
        ))}
        <li className='xl:hidden'>
          <NavbarButton />
        </li>
      </ul>
    </motion.nav>
  )
}
