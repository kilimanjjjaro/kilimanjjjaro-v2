'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { useStore } from '@/store/store'
import { CURSOR_STATUS } from '@/constants/general'
import type { ChildrenType } from '@/interfaces/general'

interface Props {
  children: ChildrenType
  className?: string
  href: string
  underlined?: boolean
}

export default function TextLink({
  children,
  className,
  href,
  underlined
}: Props) {
  const { setCursorStatus } = useStore()

  return (
    <Link
      className={clsx(
        underlined === true &&
          'relative before:h-[2px] before:scale-x-100 mb-2 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-right hover:before:scale-x-0 before:transition-transform before:ease-in hover:before:ease-out before:duration-700 before:delay-700 hover:before:delay-0 after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-700 hover:after:delay-700',
        className ?? ''
      )}
      href={href}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
    >
      {children}
    </Link>
  )
}
