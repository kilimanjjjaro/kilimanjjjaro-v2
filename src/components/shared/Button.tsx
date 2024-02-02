import { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ChildrenType } from '@lib/types/general'
import {
  BUTTON_TEXT_VARIANTS,
  BUTTON_UNDERLINE_VARIANTS
} from '@lib/constants/variants'

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
        underlined && 'group flex flex-col gap-2.5'
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
            <div className='xl:ease-in-out-monospace h-0.5 w-full bg-current transition-transform duration-700 xl:origin-right xl:group-hover:origin-left xl:group-hover:scale-x-0' />
          </motion.span>
        </>
      ) : (
        children
      )}
    </button>
  )
}
