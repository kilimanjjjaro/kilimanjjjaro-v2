'use client'

import clsx from 'clsx'

interface Props {
  className?: string
}

export default function MonospaceLogo({ className }: Props) {
  return (
    <h1
      className={clsx(
        'font-mono leading-none',
        className !== undefined && className
      )}
    >
      Monospace
    </h1>
  )
}
