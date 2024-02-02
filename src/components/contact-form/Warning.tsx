import { motion } from 'framer-motion'
import Button from '@components/shared/Button'
import { useScopedI18n } from '@lib/i18n/client'

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
      <motion.div className='absolute flex w-64 flex-col items-center overflow-hidden rounded-md bg-monospace-dark-gray text-center'>
        <div className='flex w-full items-center bg-monospace-light-gray/30 px-3 py-2'>
          <Button
            className='h-3 w-3 rounded-full bg-red-600 text-monospace-black transition-colors duration-700 xl:hover:bg-monospace-white'
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
            <kbd className='mx-1 rounded-md border border-monospace-light-gray px-1 pb-px text-sm'>
              {t('warningModal.description.1')}
            </kbd>{' '}
            {t('warningModal.description.2')}{' '}
            <kbd className='mx-1 rounded-md border border-monospace-light-gray px-1 pb-px text-sm'>
              {t('warningModal.description.3')}
            </kbd>{' '}
            {t('warningModal.description.4')}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
