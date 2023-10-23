import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Balancer } from 'react-wrap-balancer'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { EDUCATION } from '@/lib/constants/knowledge'
import {
  HR_LINE_VARIANTS,
  KNOWLEDGE_ITEM_VARIANTS
} from '@/lib/constants/variants'
import { LOCALES } from '@/lib/constants/general'

export default function Education() {
  const t = useScopedI18n('home.knowledge')
  const currentLocale = useCurrentLocale()
  const education = useMemo(() => {
    return currentLocale === LOCALES.en ? EDUCATION.en : EDUCATION.es
  }, [currentLocale])

  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex flex-col gap-4 xl:flex-row pt-6 pb-6 xl:pb-[82px] xl:pt-20 xl:gap-10'
        variants={KNOWLEDGE_ITEM_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-kili-white'>
          {t('educationTitle')}
        </h3>
        <ul className='grid flex-1 gap-6 text-xl xl:text-2xl xl:gap-10 xl:grid-cols-3'>
          {education.map((education) => (
            <li key={education.year} className='flex flex-col gap-1 xl:gap-2'>
              <span className='mb-px text-kili-white xl:mb-0'>
                {education.year}
              </span>
              <span className='text-kili-light-gray'>
                <Balancer>{education.name}</Balancer>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.hr
        className='w-full h-0.5 border-kili-light-gray origin-left'
        variants={HR_LINE_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}
