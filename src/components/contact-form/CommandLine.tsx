import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TypingEffect from '@/components/shared/TypingEffect'

const FOLDERS = [
  'app',
  'components',
  'constants',
  'hooks',
  'interfaces',
  'store'
]

const FILES = ['messages.json', 'issues.json']

export default function CommandLine() {
  const [stepOne, setStepOne] = useState(false)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)

  useEffect(() => {
    const timeoutOne = setTimeout(() => {
      setStepOne(true)
    }, 1500)

    const timeoutTwo = setTimeout(() => {
      setStepTwo(true)
    }, 2700)

    const timeoutThree = setTimeout(() => {
      setStepThree(true)
    }, 4800)

    return () => {
      clearTimeout(timeoutOne)
      clearTimeout(timeoutTwo)
      clearTimeout(timeoutThree)
    }
  }, [])

  return (
    <div className='flex flex-col w-full h-full gap-6 text-sm xl:text-lg'>
      <div>
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src</p>
        <div className='text-kili-white'>
          {stepOne && <TypingEffect text='ls' />}
          <motion.span
            initial={{ display: 'inline' }}
            animate={{ display: 'none' }}
            transition={{ delay: 2.1 }}
            className='animate-typing'
          >
            |
          </motion.span>
        </div>
      </div>
      <motion.div
        className='grid-cols-3'
        initial={{ display: 'none' }}
        animate={{ display: 'grid' }}
        transition={{ delay: 2.1 }}
      >
        {FOLDERS.map((folder) => (
          <p key={folder} className='text-kili-white'>
            {folder}
          </p>
        ))}
      </motion.div>
      <motion.div
        initial={{ display: 'none' }}
        animate={{ display: 'block' }}
        transition={{ delay: 2.1 }}
      >
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src</p>
        <div className='text-kili-white'>
          {stepTwo && <TypingEffect text='cd store && ls' />}
          <motion.span
            initial={{ display: 'inline' }}
            animate={{ display: 'none' }}
            transition={{ delay: 4.1 }}
            className='animate-typing'
          >
            |
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        className='grid grid-cols-3'
        initial={{ display: 'none' }}
        animate={{ display: 'grid' }}
        transition={{ delay: 4.1 }}
      >
        {FILES.map((folder) => (
          <p key={folder} className='text-kili-white'>
            {folder}
          </p>
        ))}
      </motion.div>
      <motion.div
        initial={{ display: 'none' }}
        animate={{ display: 'block' }}
        transition={{ delay: 4.1 }}
      >
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src/store</p>
        <div className='text-kili-white'>
          {stepThree && <TypingEffect text='nano messages.json' />}
          <span className='animate-typing'>|</span>
        </div>
      </motion.div>
    </div>
  )
}
