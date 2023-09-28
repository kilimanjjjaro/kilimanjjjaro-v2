import { useEffect, useState } from 'react'
import { experimental_useFormStatus } from 'react-dom'
import clsx from 'clsx'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import type { InitialStateFormInterface } from '@/lib/interfaces/form'

export default function Button({ error, success }: InitialStateFormInterface) {
  const { setCursorStatus } = useStore()
  const { pending } = experimental_useFormStatus()
  const [isSended, setIsSended] = useState(false)

  useEffect(() => {
    if (success) {
      setIsSended(true)

      const timeout = setTimeout(() => {
        setIsSended(false)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [success])

  return (
    <button
      className={clsx(
        'flex absolute bottom-8 right-9 items-center gap-2 text-lg text-kili-white bg-[#030303] py-1 px-3',
        pending && 'cursor-not-allowed animate-pulse'
      )}
      disabled={pending}
      aria-disabled={pending}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      {error && !pending && (
        <>
          Try again!
          <ArrowRightIcon className='w-3' />
        </>
      )}
      {!error && !isSended && !pending && (
        <>
          Send message
          <ArrowRightIcon className='w-3' />
        </>
      )}
      {isSended && !error && 'Sent!'}
      {pending && 'Sending...'}
    </button>
  )
}
