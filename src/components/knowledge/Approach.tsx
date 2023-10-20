import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Balancer } from 'react-wrap-balancer'
import { useCurrentLocale, useScopedI18n } from '@/lib/i18n/client'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/lib/constants/variants'
import { APPROACH } from '@/lib/constants/knowledge'
import { LOCALES } from '@/lib/constants/general'

export default function Approach() {
  const t = useScopedI18n('home.knowledge')
  const currentLocale = useCurrentLocale()
  const approach = useMemo(() => {
    return currentLocale === LOCALES.en ? APPROACH.en : APPROACH.es
  }, [currentLocale])

  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex flex-col gap-6 xl:flex-row pb-6 xl:pb-[82px] xl:gap-10'
        variants={OTHER_PROJECT_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='xl:w-[30%] text-4xl text-kili-white'>
          {t('approachTitle')}
        </h3>
        {approach.map((approach) => (
          <div key={approach.title} className='flex-1'>
            <h4 className='mb-2 text-xl xl:text-2xl xl:mb-10 text-kili-white'>
              {approach.title}
            </h4>
            <p className='text-xl text-kili-light-gray xl:text-2xl'>
              <Balancer>{approach.description}</Balancer>
            </p>
          </div>
        ))}
      </motion.div>
      <motion.hr
        className='w-full h-0.5 border-kili-light-gray origin-left'
        variants={OTHER_PROJECT_HR_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}
