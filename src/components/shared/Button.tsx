import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  handler: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, className, handler }: Props) {
  return (
    <button
      className={clsx(
        'relative before:h-[2px] before:scale-x-0 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-left hover:before:scale-x-100 before:transition-transform before:ease-in hover:before:ease-out before:duration-400 before:delay-0 hover:before:delay-75 after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-current after:origin-right hover:after:scale-x-0 after:transition-transform after:ease-in hover:after:ease-out after:duration-400 after:delay-75 hover:after:delay-0',
        className ?? ''
      )}
      onClick={handler}
    >
      {children}
    </button>
  )
}
