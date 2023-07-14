import { MouseEventHandler } from 'react'
import clsx from 'clsx'
import { useStore } from '@/store/store'
import { CURSOR_STATUS } from '@/constants/general'

interface Props {
  children: React.ReactNode
  className?: string
  handler: MouseEventHandler<HTMLButtonElement>
  underlined?: boolean
}

export default function TextButton({
  children,
  className,
  handler,
  underlined
}: Props) {
  const { setCursorStatus } = useStore()

  return (
    <button
      className={clsx(
        underlined === true &&
          'relative before:h-[2px] before:scale-x-100 before:absolute mb-2 before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-right hover:before:scale-x-0 before:transition-transform before:ease-in hover:before:ease-out before:duration-700 before:delay-500 hover:before:delay-0 after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-700 hover:after:delay-500',
        className ?? ''
      )}
      onClick={handler}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      {children}
    </button>
  )
}
