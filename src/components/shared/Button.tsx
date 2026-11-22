import type { MouseEventHandler } from 'react'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import type { ChildrenType } from '@/lib/types/globals'
import { UNDERLINE_STYLES } from '@/lib/constants/styles'
import { CursorStatus } from '@/lib/constants/cursor'

interface Props {
  children?: ChildrenType
  className?: string
  ariaLabel?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  underlined?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  className,
  onClick,
  ariaLabel,
  underlined,
  disabled
}: Props) {
  const { setCursorStatus } = useStore()

  return (
    <button
      className={clsx(className ?? '', underlined === true && UNDERLINE_STYLES)}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => {
        setCursorStatus(CursorStatus.Hover)
      }}
      onMouseLeave={() => {
        setCursorStatus(CursorStatus.Default)
      }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
