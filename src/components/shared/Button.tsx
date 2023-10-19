import { MouseEventHandler } from 'react'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS, UNDERLINED_STYLES } from '@/lib/constants/general'
import type { ChildrenType } from '@/lib/interfaces/general'

interface Props {
  children?: ChildrenType
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  underlined?: boolean
}

export default function Button({
  children,
  className,
  onClick,
  underlined
}: Props) {
  const { setCursorStatus } = useStore()

  return (
    <button
      className={clsx(
        className ?? '',
        underlined === true && UNDERLINED_STYLES
      )}
      onClick={onClick}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      {children}
    </button>
  )
}
