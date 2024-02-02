'use client'

import NextLink from 'next/link'
import clsx from 'clsx'
import type { ChildrenType } from '@lib/types/general'

const UNDERLINE_STYLES =
  'relative before:h-px before:scale-x-100 before:absolute mb-1 xl:mb-2 before:-bottom-1.5 xl:before:-bottom-2 before:left-0 before:right-0 before:block before:origin-right xl:hover:before:scale-x-0 before:transition-transform before:ease-in xl:hover:before:ease-out before:duration-700 before:delay-1000 xl:hover:before:delay-0 after:h-px after:absolute after:-bottom-1.5 xl:after:-bottom-2 after:left-0 after:right-0 after:block after:origin-left after:scale-x-0 xl:hover:after:scale-x-100 after:transition-transform after:ease-in xl:hover:after:ease-out after:duration-700 xl:hover:after:delay-1000'

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
  return (
    <NextLink
      className={clsx(className ?? '', underlined === true && UNDERLINE_STYLES)}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </NextLink>
  )
}
