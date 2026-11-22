'use client'

import NextLink from 'next/link'
import clsx from 'clsx'
import { useStore } from '@/lib/store/store'
import type { ChildrenType } from '@/lib/types/globals'
import { UNDERLINE_STYLES } from '@/lib/constants/styles'
import { CursorStatus } from '@/lib/constants/cursor'

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
      className={clsx(className ?? '', underlined === true && UNDERLINE_STYLES)}
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => {
        setCursorStatus(CursorStatus.Hover)
      }}
      onMouseLeave={() => {
        setCursorStatus(CursorStatus.Default)
      }}
      onClick={onClick}
    >
      {children}
    </NextLink>
  )
}
