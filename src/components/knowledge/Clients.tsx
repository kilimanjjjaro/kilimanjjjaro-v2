'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useScopedI18n } from '@/lib/i18n/client'
import { CLIENTS } from '@/lib/constants/knowledge'
import {
  HR_LINE_VARIANTS,
  KNOWLEDGE_ITEM_VARIANTS
} from '@/lib/constants/variants'

export default function Clients() {
  const t = useScopedI18n('home.knowledge')
  const articleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(articleRef, { once: true })

  return (
    <article ref={articleRef} className='overflow-hidden'>
      <motion.div
        className='flex flex-col xl:flex-row pt-6 pb-6 xl:pb-[82px] xl:pt-20 gap-6 xl:gap-10'
        variants={KNOWLEDGE_ITEM_VARIANTS}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl xl:text-3xl 2xl:text-4xl text-kili-white'>
          {t('clientsTitle')}
        </h3>
        <ul className='grid flex-1 grid-cols-2 gap-4 text-xl 2xl:text-2xl xl:gap-2 xl:grid-cols-3 text-kili-white'>
          {CLIENTS.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </motion.div>
      <motion.hr
        className='w-full h-0.5 border-kili-light-gray origin-left'
        initial='hidden'
        variants={HR_LINE_VARIANTS}
        animate={isInView ? 'show' : 'hidden'}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}
