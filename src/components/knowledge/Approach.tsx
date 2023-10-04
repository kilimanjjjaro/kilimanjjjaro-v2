import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Balancer } from 'react-wrap-balancer'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/lib/constants/variants'
import { APPROACH } from '@/lib/constants/knowledge'

export default function Approach({ locale }: { locale: string }) {
  const approach = useMemo(() => {
    return locale === 'en' ? APPROACH.en : APPROACH.es
  }, [locale])

  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex pb-[82px] gap-x-10'
        variants={OTHER_PROJECT_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-kili-white'>Approach</h3>
        {approach.map((approach) => (
          <div key={approach.title} className='flex-1 text-2xl'>
            <h4 className='mb-10 text-kili-white'>{approach.title}</h4>
            <p className='text-kili-light-gray'>
              <Balancer>{approach.description}</Balancer>
            </p>
          </div>
        ))}
      </motion.div>
      <motion.hr
        className='w-full h-[2px] border-kili-light-gray origin-left'
        variants={OTHER_PROJECT_HR_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}