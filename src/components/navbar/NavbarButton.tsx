import { motion } from 'framer-motion'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'
import {
  NAVBAR_BUTTON_ONE_VARIANTS,
  NAVBAR_BUTTON_TWO_VARIANTS
} from '@/lib/constants/variants'

export default function NavbarButton() {
  const { setNavBarStatus, navBarStatus, setCursorStatus } = useStore()
  return (
    <button
      className='flex flex-col gap-2 cursor-pointer group'
      onClick={() => setNavBarStatus(!navBarStatus)}
      onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
      onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
      aria-label='Toggle navigation menu'
    >
      <motion.div
        className='w-7 h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white'
        variants={NAVBAR_BUTTON_ONE_VARIANTS}
        animate={navBarStatus ? 'open' : 'closed'}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className='w-7 h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-1000 xl:group-hover:bg-kili-white'
        variants={NAVBAR_BUTTON_TWO_VARIANTS}
        animate={navBarStatus ? 'open' : 'closed'}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      />
    </button>
  )
}
