import Link from 'next/link'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  href: string
}

export default function TextLink({ children, className, href }: Props) {
  return (
    <Link
      className={clsx(
        'relative before:h-[2px] before:scale-x-100 mb-2 before:absolute before:-bottom-2 before:left-0 before:right-0 before:block before:bg-current before:origin-right hover:before:scale-x-0 before:transition-transform before:ease-in hover:before:ease-out before:duration-700 before:delay-500 hover:before:delay-0 after:h-[2px] after:absolute after:-bottom-2 after:left-0 after:right-0 after:block after:bg-kili-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-700 hover:after:delay-500',
        className ?? ''
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
