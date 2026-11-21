import { useMemo } from 'react'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import NavbarButton from '@/components/navbar/NavbarButton'
import Link from '@/components/shared/Link'
import Button from '@/components/shared/Button'
import { useStore } from '@/lib/store/store'
import { useCurrentLocale } from '@/lib/i18n/client'
import { SECTIONS, LOCALES } from '@/lib/constants/globals'
import {
  FADE_IN_STATE,
  FADE_OUT_STATE,
  TRANSITION
} from '@/lib/constants/animation'
import { SECTION_SCROLL_DURATION } from '@/lib/constants/scroll'

export default function LargeVersion() {
  const { setShowContactForm } = useStore()
  const lenis = useLenis()
  const currentLocale = useCurrentLocale()

  const sections = useMemo(
    () => (currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es),
    [currentLocale]
  )

  return (
    <motion.nav
      initial={FADE_OUT_STATE}
      animate={FADE_IN_STATE}
      exit={{ ...FADE_OUT_STATE, transition: TRANSITION }}
      transition={TRANSITION}
    >
      <ul className='flex gap-10 leading-none mt-0.5'>
        {sections.map((section) => (
          <li
            key={section.slug}
            className='hidden tracking-wide transition-colors duration-1000 ease-in-out xl:list-item text-kili-light-gray xl:hover:text-kili-white'
          >
            {section.slug === 'lets-talk' ? (
              <Button
                onClick={() => {
                  setShowContactForm(true)
                }}
              >
                {section.name}
              </Button>
            ) : (
              <Link
                href={`/#${section.slug}`}
                onClick={() =>
                  lenis?.scrollTo(`#${section.slug}`, {
                    duration: SECTION_SCROLL_DURATION
                  })
                }
              >
                {section.name}
              </Link>
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
