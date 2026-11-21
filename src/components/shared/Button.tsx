import type { MouseEventHandler } from 'react'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/globals'
import type { ChildrenType } from '@/lib/types/globals'
import { UNDERLINE_STYLES } from '@/lib/constants/styles'

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
        setCursorStatus(CURSOR_STATUS.HOVER)
      }}
      onMouseLeave={() => {
        setCursorStatus(CURSOR_STATUS.DEFAULT)
      }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
