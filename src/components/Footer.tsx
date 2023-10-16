'use client'

import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import TextLink from '@/components/shared/TextLink'
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
  const { setCursorStatus, setShowContactForm } = useStore()
  const footerEl = useRef<HTMLElement>(null)
  const lenis = useLenis()
  const currentLocale = useCurrentLocale()

  const { scrollYProgress } = useScroll({
    target: footerEl,
    offset: ['start end', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-35%', '0%'])

  const sections = useMemo(() => {
    return currentLocale === LOCALES.en ? SECTIONS.en : SECTIONS.es
  }, [currentLocale])

  return (
    <footer
      ref={footerEl}
      className='px-40 pt-24 pb-16 overflow-hidden bg-kili-black'
    >
      <motion.div initial={{ y: 0 }} style={{ y }}>
        <ul className='flex justify-between mb-60'>
          {sections
            .filter((section) => section.slug !== 'lets-talk')
            .map((section) => (
              <li key={section.slug}>
                <TextLink
                  className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
                  href={`/#${section.slug}`}
                  onClick={() =>
                    lenis.scrollTo(`#${section.slug}`, { duration: 2 })
                  }
                  underlined
                >
                  {section.name}
                </TextLink>
              </li>
            ))}
        </ul>
        <div className='flex items-end justify-between'>
          <button
            className='overflow-hidden group'
            onClick={() => setShowContactForm(true)}
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
          >
            <motion.span
              className='flex items-center leading-none translate-y-0 gap-14 text-kili-white text-10xl xl:group-hover:animate-translate-y'
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
          </button>
          <ul className='flex flex-col items-end gap-4 mb-5'>
            {SOCIAL_LINKS.map((social) => (
              <li className='overflow-hidden' key={social.name}>
                <motion.a
                  className='block transition-colors duration-1000 ease-in-out text-kili-light-gray xl:hover:text-kili-white'
                  href={social.link}
                  onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                  onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{
                    y: '100%',
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
            <li className='overflow-hidden'>
              <motion.button
                className='flex gap-2 overflow-hidden transition-colors duration-1000 ease-in-out group text-kili-light-gray xl:hover:text-kili-white'
                onClick={() => lenis.scrollTo(0, { duration: 2 })}
                onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                initial={{
                  y: '100%',
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
                <ArrowUpIcon className='w-[11px] self-center h-3 xl:group-hover:animate-translate-y' />
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  )
}
