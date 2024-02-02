import { useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import { ArrowRightIcon } from '@components/icons/ArrowRightIcon'
import { useScopedI18n } from '@lib/i18n/client'

interface Props {
  error: boolean
  success: boolean
  shouldFocus: boolean
}

export default function SubmitButton({ error, success, shouldFocus }: Props) {
  const t = useScopedI18n('contactForm')
  const { pending } = useFormStatus()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (shouldFocus) {
      buttonRef.current?.focus()
    }
  }, [shouldFocus])

  const renderWelcomeText = !error && !success && !pending
  const renderSuccessText = success && !error && !pending
  const renderErrorText = error && !success && !pending

  return (
    <button
      ref={buttonRef}
      className={clsx(
        'text-md absolute bottom-8 right-9 flex items-center gap-2 rounded-md bg-[#030303] px-4 pb-2 pt-[10px] text-monospace-white transition-colors duration-700 xl:hover:bg-monospace-dark-gray',
        pending && 'animate-pulse cursor-not-allowed'
      )}
      disabled={pending}
      aria-disabled={pending}
    >
      {renderWelcomeText && (
        <>
          {t('sendButton.0')}
          <ArrowRightIcon className='w-3' />
        </>
      )}
      {renderErrorText && (
        <>
          {t('sendButton.2')}
          <ArrowRightIcon className='w-3' />
        </>
      )}
      {renderSuccessText && t('sendButton.3')}
      {pending && t('sendButton.1')}
    </button>
  )
}
