import { AnimatePresence, motion } from 'motion/react'
import { useStore } from '@/lib/store/store'
import Button from '@/components/shared/Button'
import { useState } from 'react'
import { TRANSITION } from '@/lib/constants/animation'
import {
  MENU_ICON_DELAY,
  MENU_ICON_EXIT_STAGGER,
  MENU_ICON_SECOND_LINE_DELAY
} from '@/lib/constants/navbar'

export default function NavbarButton() {
  const { setNavbarStatus, navbarStatus } = useStore()
  const [disable, setDisable] = useState(false)

  return (
    <Button
      className='relative flex items-center justify-center cursor-pointer w-7 h-7 group'
      ariaLabel='Toggle navigation menu'
      onClick={() => {
        setNavbarStatus(!navbarStatus)
      }}
      disabled={disable}
    >
      <AnimatePresence initial={false}>
        {navbarStatus ? (
          <div
            className='absolute flex flex-col items-center justify-center w-full gap-2'
            key='close-button'
          >
            <motion.span
              key='top-line'
              className='block h-0.5 bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white translate-y-[5px] rotate-[135deg]'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{
                width: '0%',
                transition: TRANSITION
              }}
              transition={{ ...TRANSITION, delay: MENU_ICON_DELAY }}
              onAnimationStart={() => {
                setDisable(true)
              }}
            />
            <motion.span
              className='block h-0.5 bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white translate-y-[-5px] rotate-[-135deg]'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{
                width: '0%',
                transition: TRANSITION
              }}
              transition={{ ...TRANSITION, delay: MENU_ICON_DELAY }}
              onAnimationComplete={() => {
                setDisable(false)
              }}
            />
          </div>
        ) : (
          <div
            className='absolute flex flex-col w-full gap-2'
            key='open-button'
          >
            <motion.span
              className='block w-full h-0.5 bg-kili-light-gray origin-right transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white'
              initial={{ scaleX: '0%' }}
              animate={{ scaleX: '100%' }}
              exit={{
                scaleX: '0%',
                transition: TRANSITION
              }}
              transition={{ ...TRANSITION, delay: MENU_ICON_DELAY }}
              onAnimationStart={() => {
                setDisable(true)
              }}
            />
            <motion.span
              className='block w-full h-0.5 bg-kili-light-gray origin-right transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white'
              initial={{ scaleX: '0%' }}
              animate={{ scaleX: '100%' }}
              exit={{
                scaleX: '0%',
                transition: { ...TRANSITION, delay: MENU_ICON_EXIT_STAGGER }
              }}
              transition={{ ...TRANSITION, delay: MENU_ICON_SECOND_LINE_DELAY }}
              onAnimationComplete={() => {
                setDisable(false)
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </Button>
  )
}
