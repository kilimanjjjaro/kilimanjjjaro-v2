'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useScopedI18n } from '@lib/i18n/client'
import { CLIENTS } from '@lib/constants/knowledge'
import {
  HR_LINE_VARIANTS,
  KNOWLEDGE_ITEM_VARIANTS
} from '@lib/constants/variants'

export default function Clients() {
  const t = useScopedI18n('home.knowledge')
  const articleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(articleRef, { once: true })

  return (
    <article ref={articleRef} className='overflow-hidden'>
      <motion.div
        className='flex flex-col gap-6 pb-6 pt-6 xl:flex-row xl:gap-10 xl:pb-[82px] xl:pt-20'
        variants={KNOWLEDGE_ITEM_VARIANTS}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-monospace-white'>
          {t('clientsTitle')}
        </h3>
        <ul className='grid flex-1 grid-cols-2 gap-4 text-xl text-monospace-white xl:grid-cols-3 xl:gap-2 xl:text-2xl'>
          {CLIENTS.map((client) => (
            <li key={client}>{client}</li>
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
