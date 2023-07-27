import { motion } from 'framer-motion'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/constants/variants'

const CLIENTS = [
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield',
  'Royal Enfield'
]

export default function Clients() {
  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex pt-20 pb-[82px] gap-x-10'
        variants={OTHER_PROJECT_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-kili-white'>Clients</h3>
        <ul className='grid flex-1 grid-cols-3 gap-10 text-2xl text-kili-white'>
          {CLIENTS.map((client) => (
            <li key={client}>{client}</li>
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