import clsx from 'clsx'
import { useScopedI18n } from '@/lib/i18n/client'
import getFormStatusMessage from '@/lib/utils/getFormStatusMessage'
import type { FormStep } from '@/lib/constants/form'

interface Props {
  step: FormStep
  error: boolean
  success: boolean
}

export default function StatusBar({ step, error, success }: Props) {
  const t = useScopedI18n('contactForm')
  const message = getFormStatusMessage({ step, error, success })

  return (
    <div
      className={clsx(
        'absolute top-0 left-0 flex items-center justify-between bg-[#00ff00] w-full h-6 px-4 text-xs xl:text-sm',
        error && 'bg-red-600'
      )}
    >
      <span>GNU nano 2.8.4</span>
      {message !== null && <span>{t(message)}</span>}
    </div>
  )
}
