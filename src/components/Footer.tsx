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
      className='px-40 py-20 overflow-hidden bg-kili-black'
    >
      <motion.div initial={{ y: 0 }} style={{ y }}>
        <ul className='flex justify-between mb-60'>
          {sections
            .filter((section) => section.slug !== 'lets-talk')
            .map((section) => (
              <li key={section.slug}>
                <Link
                  className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
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
        <div className='flex items-end justify-between'>
          <Button
            className='-mb-6 overflow-hidden leading-none transition-colors duration-1000 ease-in-out text-kili-white text-10xl xl:hover:text-kili-light-gray'
            onClick={() => setShowContactForm(true)}
          >
            <motion.span
              className='flex items-center gap-12'
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
              {t('letsTalk')}
              <ArrowCornerIcon className='w-10 h-10' />
            </motion.span>
          </Button>
          <ul className='flex flex-col items-end gap-4 leading-none'>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <motion.a
                  className='block overflow-hidden transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
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
                className='overflow-hidden transition-colors duration-1000 ease-in-out group text-kili-light-gray xl:hover:text-kili-white'
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
        </div>
      </motion.div>
    </footer>
  )
}
