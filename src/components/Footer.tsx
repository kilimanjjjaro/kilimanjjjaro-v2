'use client'

import { useMemo, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@/lib/store/store'
import TextLink from '@/components/shared/TextLink'
import { ArrowCornerIcon } from '@/components/icons/ArrowCornerIcon'
import { CURSOR_STATUS, SECTIONS, SOCIAL_LINKS } from '@/lib/constants/general'

export default function Footer({
  locale,
  letsTalk,
  goToTop
}: {
  locale: string
  letsTalk: string
  goToTop: string
}) {
  const { setCursorStatus, setShowContactForm } = useStore()
  const footerEl = useRef<HTMLElement>(null)
  const isInView = useInView(footerEl)
  const lenis = useLenis()

  const { scrollYProgress } = useScroll({
    target: footerEl,
    offset: ['start end', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-35%', '0%'])

  const sections = useMemo(() => {
    return locale === 'en' ? SECTIONS.en : SECTIONS.es
  }, [locale])

  return (
    <footer
      ref={footerEl}
      className='px-40 pt-24 pb-16 overflow-hidden bg-kili-black'
    >
      <motion.div initial={{ y: 0 }} style={{ y }}>
        <ul className='flex justify-between mb-48'>
          {sections.map((section) => (
            <li key={section.slug}>
              <TextLink
                className='text-3xl text-kili-white before:bg-kili-white after:bg-kili-white'
                href={`/#${section.slug}`}
                onClick={() =>
                  lenis.scrollTo(`#${section.slug}`, {
                    duration: 2,
                    offset: section.slug === 'featured-projects' ? -160 : 0
                  })
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
              className='flex items-center leading-none translate-y-0 gap-14 text-kili-white text-10xl group-hover:animate-translate-y'
              initial={{
                y: '0%',
                rotate: 0
              }}
              animate={{
                y: isInView ? '0%' : '120%',
                rotate: isInView ? 0 : 6
              }}
              transition={{
                duration: 1.3,
                ease: 'easeInOut',
                delay: 0.1
              }}
            >
              {letsTalk}
              <ArrowCornerIcon className='w-10 h-10' />
            </motion.span>
          </button>
          <ul className='flex flex-col items-end gap-4 mb-5'>
            {SOCIAL_LINKS.map((social) => (
              <li className='overflow-hidden' key={social.name}>
                <a
                  className='block transition-colors duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
                  href={social.link}
                  onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                  onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {social.name}
                </a>
              </li>
            ))}
            <li className='overflow-hidden'>
              <button
                className='block transition-colors duration-700 ease-in-out text-kili-light-gray hover:text-kili-white'
                onClick={() => lenis.scrollTo(0, { duration: 2 })}
                onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
                onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
              >
                {goToTop}
              </button>
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  )
}
