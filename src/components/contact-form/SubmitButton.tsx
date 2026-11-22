import { useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { useStore } from '@/lib/store/store'
import { useScopedI18n } from '@/lib/i18n/client'
import getSubmitButtonContent from '@/lib/utils/getSubmitButtonContent'
import { CursorStatus } from '@/lib/constants/cursor'

interface Props {
  error: boolean
  success: boolean
  shouldFocus: boolean
}

export default function SubmitButton({ error, success, shouldFocus }: Props) {
  const t = useScopedI18n('contactForm')
  const { setCursorStatus } = useStore()
  const { pending } = useFormStatus()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const content = getSubmitButtonContent({ error, success, pending })

  useEffect(() => {
    if (shouldFocus) {
      buttonRef.current?.focus()
    }
  }, [shouldFocus])

  return (
    <button
      ref={buttonRef}
      className={clsx(
        'flex absolute bottom-6 right-5 xl:bottom-8 xl:right-9 items-center gap-2 text-sm xl:text-lg rounded-md text-kili-white bg-[#030303] pb-2 pt-[10px] px-4 xl:hover:bg-kili-dark-gray transition-colors duration-1000',
        pending && 'cursor-not-allowed animate-pulse'
      )}
      disabled={pending}
      aria-disabled={pending}
      onMouseEnter={() => {
        setCursorStatus(CursorStatus.Hover)
      }}
      onMouseLeave={() => {
        setCursorStatus(CursorStatus.Default)
      }}
    >
      {content !== null && (
        <>
          {t(content.label)}
          {content.showArrow && <ArrowRightIcon className='w-3' />}
        </>
      )}
    </button>
  )
}
