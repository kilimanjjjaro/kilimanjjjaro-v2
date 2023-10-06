import { experimental_useFormStatus } from 'react-dom'
import clsx from 'clsx'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import { useScopedI18n } from '@/lib/i18n/client'
import { useEffect, useRef } from 'react'

interface Props {
  error: boolean
  success: boolean
  shouldFocus: boolean
}

export default function Button({ error, success, shouldFocus }: Props) {
  const t = useScopedI18n('contactForm')
  const { setCursorStatus } = useStore()
  const { pending } = experimental_useFormStatus()
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
        'flex absolute bottom-8 right-9 items-center gap-2 text-lg text-kili-white bg-[#030303] py-1 px-3',
        pending && 'cursor-not-allowed animate-pulse'
      )}
      disabled={pending}
      aria-disabled={pending}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
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
