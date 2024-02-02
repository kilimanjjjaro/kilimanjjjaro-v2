'use client'

import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Balancer } from 'react-wrap-balancer'
import { useCurrentLocale, useScopedI18n } from '@lib/i18n/client'
import { LOCALES } from '@lib/constants/general'
import { EDUCATION } from '@lib/constants/knowledge'
import {
  HR_LINE_VARIANTS,
  KNOWLEDGE_ITEM_VARIANTS
} from '@lib/constants/variants'

export default function Education() {
  const t = useScopedI18n('home.knowledge')
  const articleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(articleRef, { once: true })
  const currentLocale = useCurrentLocale()

  const education = useMemo(() => {
    return currentLocale === LOCALES.en ? EDUCATION.en : EDUCATION.es
  }, [currentLocale])

  return (
    <article ref={articleRef} className='overflow-hidden'>
      <motion.div
        className='flex flex-col gap-4 pb-6 pt-6 xl:flex-row xl:gap-10 xl:pb-[82px] xl:pt-20'
        variants={KNOWLEDGE_ITEM_VARIANTS}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-monospace-white'>
          {t('educationTitle')}
        </h3>
        <ul className='grid flex-1 gap-6 text-xl xl:grid-cols-3 xl:gap-10 xl:text-2xl'>
          {education.map((education) => (
            <li key={education.year} className='flex flex-col gap-1 xl:gap-2'>
              <span className='mb-px text-monospace-white xl:mb-0'>
                {education.year}
              </span>
              <span className='text-monospace-light-gray'>
                <Balancer>{education.name}</Balancer>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.hr
        className='h-0.5 w-full origin-left border-monospace-light-gray'
        initial='hidden'
        variants={HR_LINE_VARIANTS}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}
