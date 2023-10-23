import { motion } from 'framer-motion'
import {
  HR_LINE_VARIANTS,
  KNOWLEDGE_ITEM_VARIANTS
} from '@/lib/constants/variants'
import { CLIENTS } from '@/lib/constants/knowledge'
import { useScopedI18n } from '@/lib/i18n/client'

export default function Clients() {
  const t = useScopedI18n('home.knowledge')
  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex flex-col xl:flex-row pt-6 pb-6 xl:pb-[82px] xl:pt-20 gap-6 xl:gap-10'
        variants={KNOWLEDGE_ITEM_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-kili-white'>
          {t('clientsTitle')}
        </h3>
        <ul className='grid flex-1 grid-cols-2 gap-4 text-xl xl:text-2xl xl:gap-2 xl:grid-cols-3 text-kili-white'>
          {CLIENTS.map((client) => (
            <li key={client}>{client}</li>
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
