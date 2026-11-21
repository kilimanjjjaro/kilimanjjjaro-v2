import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import TypingEffect from '@/components/shared/TypingEffect'
import {
  COMMAND_LINE_FILES,
  COMMAND_LINE_FILES_DELAY,
  COMMAND_LINE_FIRST_COMMAND_MS,
  COMMAND_LINE_FOLDERS,
  COMMAND_LINE_FOLDERS_DELAY,
  COMMAND_LINE_SECOND_COMMAND_MS,
  COMMAND_LINE_THIRD_COMMAND_MS
} from '@/lib/constants/form'

export default function CommandLine() {
  const [stepOne, setStepOne] = useState(false)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)

  useEffect(() => {
    const timeoutOne = setTimeout(() => {
      setStepOne(true)
    }, COMMAND_LINE_FIRST_COMMAND_MS)

    const timeoutTwo = setTimeout(() => {
      setStepTwo(true)
    }, COMMAND_LINE_SECOND_COMMAND_MS)

    const timeoutThree = setTimeout(() => {
      setStepThree(true)
    }, COMMAND_LINE_THIRD_COMMAND_MS)

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
            transition={{ delay: COMMAND_LINE_FOLDERS_DELAY }}
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
        transition={{ delay: COMMAND_LINE_FOLDERS_DELAY }}
      >
        {COMMAND_LINE_FOLDERS.map((folder) => (
          <p key={folder} className='text-kili-white'>
            {folder}
          </p>
        ))}
      </motion.div>
      <motion.div
        initial={{ display: 'none' }}
        animate={{ display: 'block' }}
        transition={{ delay: COMMAND_LINE_FOLDERS_DELAY }}
      >
        <p className='text-kili-light-gray'>~/kilimanjjjaro/src</p>
        <div className='text-kili-white'>
          {stepTwo && <TypingEffect text='cd store && ls' />}
          <motion.span
            initial={{ display: 'inline' }}
            animate={{ display: 'none' }}
            transition={{ delay: COMMAND_LINE_FILES_DELAY }}
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
        transition={{ delay: COMMAND_LINE_FILES_DELAY }}
      >
        {COMMAND_LINE_FILES.map((folder) => (
          <p key={folder} className='text-kili-white'>
            {folder}
          </p>
        ))}
      </motion.div>
      <motion.div
        initial={{ display: 'none' }}
        animate={{ display: 'block' }}
        transition={{ delay: COMMAND_LINE_FILES_DELAY }}
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
