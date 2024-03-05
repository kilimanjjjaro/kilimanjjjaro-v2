import { motion } from 'framer-motion'

export default function Headline() {
  return (
    <h2 className='mb-20 flex w-full flex-col text-balance text-9xl font-medium uppercase text-monospace-white'>
      <span className='overflow-hidden'>
        <motion.span
          className='block'
          initial={{ y: '100%' }}
          whileInView={{ y: ['100%', '0%', '0%'], x: ['0%', '0%', '5%'] }}
        >
          Selected work
        </motion.span>
      </span>
      <span className='overflow-hidden'>
        <motion.span
          className='block'
          initial={{ y: '100%' }}
          whileInView={{ y: ['100%', '0%', '0%'] }}
        >
          to hightlight
        </motion.span>
      </span>
    </h2>
  )
}
