import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { useScopedI18n } from '@/lib/i18n/client'

interface Props {
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Warning({ setShowWarning }: Props) {
  const t = useScopedI18n('contactForm')

  return (
    <div
      role='dialog'
      className='absolute inset-0 z-10 flex items-center justify-center bg-monospace-black/95 backdrop-blur-sm'
    >
      <motion.div className='absolute flex flex-col items-center w-64 overflow-hidden text-center rounded-md bg-monospace-dark-gray'>
        <div className='flex items-center w-full px-3 py-2 bg-monospace-light-gray/30'>
          <Button
            className='w-3 h-3 transition-colors duration-700 bg-red-600 rounded-full text-monospace-black xl:hover:bg-monospace-white'
            onClick={() => setShowWarning(false)}
            aria-label='Close warning'
          />
        </div>
        <div className='p-6'>
          <h3 className='mb-4 text-lg text-monospace-white'>
            {t('warningModal.headline')}
          </h3>
          <p className='text-monospace-light-gray'>
            {t('warningModal.description.0')}{' '}
            <kbd className='px-1 pb-px mx-1 text-sm border rounded-md border-monospace-light-gray'>
              {t('warningModal.description.1')}
            </kbd>{' '}
            {t('warningModal.description.2')}{' '}
            <kbd className='px-1 pb-px mx-1 text-sm border rounded-md border-monospace-light-gray'>
              {t('warningModal.description.3')}
            </kbd>{' '}
            {t('warningModal.description.4')}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
