'use client'

import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Balancer } from 'react-wrap-balancer'
import { useCurrentLocale, useScopedI18n } from '@lib/i18n/client'
import { LOCALES } from '@lib/constants/general'
import { APPROACH } from '@lib/constants/knowledge'
import {
  HR_LINE_VARIANTS,
  KNOWLEDGE_ITEM_VARIANTS
} from '@lib/constants/variants'

export default function Approach() {
  const t = useScopedI18n('home.knowledge')
  const articleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(articleRef, { once: true })
  const currentLocale = useCurrentLocale()

  const approach = useMemo(() => {
    return currentLocale === LOCALES.en ? APPROACH.en : APPROACH.es
  }, [currentLocale])

  return (
    <article ref={articleRef} className='overflow-hidden'>
      <motion.div
        className='flex flex-col gap-6 pb-6 xl:flex-row xl:gap-10 xl:pb-[82px]'
        variants={KNOWLEDGE_ITEM_VARIANTS}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='text-4xl text-monospace-white xl:w-[30%]'>
          {t('approachTitle')}
        </h3>
        {approach.map((approach) => (
          <div key={approach.title} className='flex-1'>
            <h4 className='mb-2 text-xl text-monospace-white xl:mb-10 xl:text-2xl'>
              {approach.title}
            </h4>
            <p className='text-xl text-monospace-light-gray xl:text-2xl'>
              <Balancer>{approach.description}</Balancer>
            </p>
          </div>
        ))}
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
