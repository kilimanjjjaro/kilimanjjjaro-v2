import { MouseEventHandler } from 'react'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import type { ChildrenType } from '@/lib/interfaces/general'

const UNDERLINE_STYLES =
  'relative mb-2.5 leading-none before:absolute before:-bottom-2 before:block before:scale-x-100 before:w-full before:origin-right before:bg-current before:translate-y-full xl:hover:before:scale-x-0 before:transition-transform before:ease-in xl:hover:before:ease-out before:duration-1000 before:delay-1000 xl:hover:before:delay-0 after:block after:w-full after:origin-left after:scale-x-0 after:bg-current xl:hover:after:scale-x-100 after:transition-transform after:ease-in xl:hover:after:ease-out after:duration-1000 xl:hover:after:delay-1000'

interface Props {
  children?: ChildrenType
  className?: string
  ariaLabel?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  underlined?: boolean
}

export default function Button({
  children,
  className,
  onClick,
  ariaLabel,
  underlined = false
}: Props) {
  const { setCursorStatus } = useStore()

  return (
    <button
      className={clsx(className ?? '', underlined && UNDERLINE_STYLES)}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      {children}
    </button>
  )
}
