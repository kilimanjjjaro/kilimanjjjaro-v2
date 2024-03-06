'use client'

import { motion } from 'framer-motion'

export default function PixelatedArrow() {
  return (
    <svg
      className='fill-monospace-white'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 140 140'
      width='140'
      height='140'
    >
      <motion.path
        d='M0 105H35V140H0V105Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.path
        d='M35 70H70V105H35V70Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.path
        d='M70 35H105V70H70V35Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          delay: 1.3,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />

      <motion.path
        d='M105 0H140V35H105V0Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          delay: 1,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.path
        d='M70 0H105V35H70V0Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          delay: 1.1,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.path
        d='M105 35H140V70H105V35Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          delay: 1.1,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.path
        d='M105 70H140V105H105V70Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      <motion.path
        d='M35 0H70V35H35V0Z'
        initial={{ fill: 'none' }}
        animate={{ fill: 'currentColor' }}
        transition={{
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </svg>
  )
}
