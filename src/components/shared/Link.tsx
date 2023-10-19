'use client'

import NextLink from 'next/link'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS, UNDERLINED_STYLES } from '@/lib/constants/general'
import type { ChildrenType } from '@/lib/interfaces/general'

interface Props {
  children: ChildrenType
  className?: string
  href: string
  underlined?: boolean
  onClick?: () => void
  target?: string
  rel?: string
}

export default function Link({
  children,
  className,
  href,
  underlined,
  onClick,
  target,
  rel
}: Props) {
  const { setCursorStatus } = useStore()

  return (
    <NextLink
      className={clsx(
        className ?? '',
        underlined === true && UNDERLINED_STYLES
      )}
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      onClick={onClick}
    >
      {children}
    </NextLink>
  )
}
