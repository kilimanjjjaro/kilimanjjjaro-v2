import { MouseEventHandler } from 'react'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import type { ChildrenType } from '@/lib/interfaces/general'

const UNDERLINE_STYLES =
  'relative before:h-px before:scale-x-100 before:absolute mb-1 xl:mb-2 before:-bottom-1.5 xl:before:-bottom-2 before:left-0 before:right-0 before:block before:origin-right xl:hover:before:scale-x-0 before:transition-transform before:ease-in xl:hover:before:ease-out before:duration-1000 before:delay-1000 xl:hover:before:delay-0 after:h-px after:absolute after:-bottom-1.5 xl:after:-bottom-2 after:left-0 after:right-0 after:block after:origin-left after:scale-x-0 xl:hover:after:scale-x-100 after:transition-transform after:ease-in xl:hover:after:ease-out after:duration-1000 xl:hover:after:delay-1000'

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
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
