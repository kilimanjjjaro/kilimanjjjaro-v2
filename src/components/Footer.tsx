'use client'

import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import Link from '@/components/shared/Link'
import Button from '@/components/shared/Button'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { ArrowUpIcon } from '@/components/icons/ArrowUpIcon'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import {
  CURSOR_STATUS,
  LOCALES,
  SECTIONS,
  SOCIAL_LINKS
} from '@/lib/constants/general'

export default function Footer() {
  const t = useScopedI18n('footer')
  const { setShowContactForm, setCursorStatus } = useStore()
  const footerEl = useRef<HTMLElement>(null)
  const lenis = useLenis()
  const currentLocale = useCurrentLocale()

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  const { scrollYProgress } = useScroll({
    target: footerEl,
    offset: ['start end', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-35%', '0%'])

  return (
    <footer
      ref={footerEl}
      className='px-6 pt-20 pb-20 overflow-hidden overlow-hidden xl:py-20 xl:px-40 bg-monospace-black'
    >
      <motion.div initial={{ y: 0 }} style={{ y }}>
        <ul className='flex flex-col justify-start gap-6 mb-32 xl:justify-between xl:gap-0 xl:flex-row xl:mb-60'>
          {sections
            .filter((section) => section.slug !== 'contact')
            .map((section) => (
              <li key={section.slug}>
                <Link
                  className='text-2xl xl:text-3xl text-monospace-white before:bg-monospace-white after:bg-monospace-white'
                  href={`/#${section.slug}`}
                  onClick={() =>
                    lenis.scrollTo(`#${section.slug}`, { duration: 2 })
                  }
                  underlined
                >
                  {section.name}
                </Link>
              </li>
            ))}
        </ul>
        <section className='flex flex-col items-start justify-start gap-4 xl:items-end xl:justify-between xl:flex-row'>
          <Button
            className='overflow-hidden text-6xl leading-none transition-colors duration-1000 ease-in-out xl:-mb-6 text-monospace-white xl:text-10xl xl:hover:text-monospace-light-gray'
            onClick={() => setShowContactForm(true)}
          >
            <motion.span
              className='flex items-center gap-4 xl:gap-12'
              initial={{
                y: '111%',
                rotate: 6
              }}
              whileInView={{
                y: '0%',
                rotate: 0
              }}
              transition={{
                duration: 1.3,
                ease: 'easeInOut'
              }}
            >
              {t('contact')}
              <ArrowCornerIcon className='w-6 xl:w-10' />
            </motion.span>
          </Button>
          <ul className='flex items-end gap-6 leading-none xl:gap-4 xl:flex-col'>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <motion.a
                  className='block overflow-hidden text-xl transition-colors duration-1000 ease-in-out xl:text-base text-monospace-light-gray xl:hover:text-monospace-white'
                  href={social.link}
                  onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                  onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{
                    y: '115%',
                    rotate: 6
                  }}
                  whileInView={{
                    y: '0%',
                    rotate: 0
                  }}
                  transition={{
                    duration: 1.3,
                    ease: 'easeInOut'
                  }}
                >
                  {social.name}
                </motion.a>
              </li>
            ))}
            <li>
              <Button
                className='overflow-hidden text-xl transition-colors duration-1000 ease-in-out xl:text-base group text-monospace-light-gray xl:hover:text-monospace-white'
                onClick={() => lenis.scrollTo(0, { duration: 2 })}
              >
                <motion.span
                  className='flex items-center gap-2'
                  initial={{
                    y: '115%',
                    rotate: 6
                  }}
                  whileInView={{
                    y: '0%',
                    rotate: 0
                  }}
                  transition={{
                    duration: 1.3,
                    ease: 'easeInOut'
                  }}
                >
                  {t('goToTop')}{' '}
                  <ArrowUpIcon className='w-[11px] h-3 xl:group-hover:animate-translate-y' />
                </motion.span>
              </Button>
            </li>
          </ul>
        </section>
      </motion.div>
    </footer>
  )
}
