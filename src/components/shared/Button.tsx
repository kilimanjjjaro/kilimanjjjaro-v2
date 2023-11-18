import { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ChildrenType } from '@/lib/types/general'
import {
  BUTTON_TEXT_VARIANTS,
  BUTTON_UNDERLINE_VARIANTS
} from '@/lib/constants/variants'

interface Props {
  children?: ChildrenType
  className?: string
  ariaLabel?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  underlined?: boolean
  underlineTrigger?: boolean
}

export default function Button({
  children,
  className,
  onClick,
  ariaLabel,
  underlined = false,
  underlineTrigger = false
}: Props) {
  return (
    <button
      className={clsx(
        className ?? '',
        underlined && 'flex flex-col gap-2.5 group'
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {underlined ? (
        <>
          <span className='overflow-hidden'>
            <motion.span
              className='block leading-none'
              variants={BUTTON_TEXT_VARIANTS}
              initial={{ y: '100%' }}
              animate={underlineTrigger ? 'open' : 'closed'}
              exit='closed'
            >
              {children}
            </motion.span>
          </span>
          <motion.span
            className='w-full'
            aria-hidden
            variants={BUTTON_UNDERLINE_VARIANTS}
            initial={{ scaleX: 0, originX: 'right' }}
            animate={underlineTrigger ? 'open' : 'closed'}
            exit='closed'
          >
            <div className='h-0.5 w-full bg-current xl:origin-right xl:group-hover:scale-x-0 xl:group-hover:origin-left transition-transform duration-700 xl:ease-in-out-monospace' />
          </motion.span>
        </>
      ) : (
        children
      )}
    </button>
  )
}
