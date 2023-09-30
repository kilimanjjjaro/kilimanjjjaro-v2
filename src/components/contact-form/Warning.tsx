import { motion } from 'framer-motion'
import { neueHaasGroteskDisplayFont } from '@/lib/utils/fonts'

interface Props {
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Warning({ setShowWarning }: Props) {
  return (
    <div
      role='dialog'
      className={`absolute inset-0 z-10 flex items-center justify-center bg-kili-black/95 backdrop-blur-sm ${neueHaasGroteskDisplayFont}`}
    >
      <motion.div className='absolute flex flex-col items-center w-64 overflow-hidden text-center rounded-md bg-kili-dark-gray'>
        <div className='flex items-center w-full px-3 py-2 bg-kili-light-gray/30'>
          <button
            className='w-3 h-3 transition-colors duration-700 bg-red-600 rounded-full text-kili-black hover:bg-kili-white'
            onClick={() => setShowWarning(false)}
            aria-label='Close warning'
          />
        </div>
        <div className='p-6'>
          <h3 className='mb-4 text-lg text-kili-white'>Close terminal</h3>
          <p className='text-kili-light-gray'>
            Press{' '}
            <kbd className='px-1 mx-1 text-sm pb-[1px] rounded-md border border-kili-light-gray'>
              enter
            </kbd>{' '}
            if you are sure or{' '}
            <kbd className='px-1 mx-1 text-sm pb-[1px] rounded-md border border-kili-light-gray'>
              any
            </kbd>{' '}
            key to keep writing.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
