'use client'

import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'
import { useStore } from '@lib/store/store'
import Link from '@components/shared/Link'
import Button from '@components/shared/Button'
import { ArrowCornerIcon } from '@components/icons/ArrowCornerIcon'
import { ArrowUpIcon } from '@components/icons/ArrowUpIcon'
import { useCurrentLocale, useScopedI18n } from '@lib/i18n/client'
import { LOCALES, SECTIONS, SOCIAL_LINKS } from '@lib/constants/general'

export default function Footer() {
  const t = useScopedI18n('footer')
  const setShowContactForm = useStore((state) => state.setShowContactForm)
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
      className='overlow-hidden overflow-hidden bg-monospace-black px-6 pb-20 pt-20 xl:px-40 xl:py-20'
    >
      <motion.div initial={{ y: 0 }} style={{ y }}>
        <ul className='mb-32 flex flex-col justify-start gap-6 xl:mb-60 xl:flex-row xl:justify-between xl:gap-0'>
          {sections
            .filter((section) => section.slug !== 'contact')
            .map((section) => (
              <li key={section.slug}>
                <Link
                  className='text-2xl text-monospace-white before:bg-monospace-white after:bg-monospace-white xl:text-3xl'
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
        <section className='flex flex-col items-start justify-start gap-4 xl:flex-row xl:items-end xl:justify-between'>
          <Button
            className='overflow-hidden text-6xl leading-none text-monospace-white transition-colors duration-700 ease-in-out xl:-mb-6 xl:text-10xl xl:hover:text-monospace-light-gray'
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
          <ul className='flex items-end gap-6 leading-none xl:flex-col xl:gap-4'>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <motion.a
                  className='block overflow-hidden text-xl text-monospace-light-gray transition-colors duration-700 ease-in-out xl:text-base xl:hover:text-monospace-white'
                  href={social.link}
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
                className='group overflow-hidden text-xl text-monospace-light-gray transition-colors duration-700 ease-in-out xl:text-base xl:hover:text-monospace-white'
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
                  <ArrowUpIcon className='h-3 w-[11px] xl:group-hover:animate-translate-y' />
                </motion.span>
              </Button>
            </li>
          </ul>
        </section>
      </motion.div>
    </footer>
  )
}
