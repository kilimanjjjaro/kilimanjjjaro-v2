import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Balancer } from 'react-wrap-balancer'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import { EDUCATION } from '@/lib/constants/knowledge'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/lib/constants/variants'

export default function Education() {
  const t = useScopedI18n('home.knowledge')
  const currentLocale = useCurrentLocale()
  const education = useMemo(() => {
    return currentLocale === 'en' ? EDUCATION.en : EDUCATION.es
  }, [currentLocale])

  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex pt-20 pb-[82px] gap-x-10'
        variants={OTHER_PROJECT_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-kili-white'>
          {t('educationTitle')}
        </h3>
        <ul className='grid flex-1 grid-cols-3 gap-10 text-2xl'>
          {education.map((education) => (
            <li key={education.year} className='flex flex-col gap-2'>
              <span className='text-kili-white'>{education.year}</span>
              <span className='text-kili-light-gray'>
                <Balancer>{education.name}</Balancer>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.hr
        className='w-full h-[2px] border-kili-light-gray origin-left'
        variants={OTHER_PROJECT_HR_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}
