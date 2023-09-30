import { motion } from 'framer-motion'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import { useStore } from '@/lib/store/store'
import { CURSOR_STATUS } from '@/lib/constants/general'

import {
  NAVBAR_BUTTON_ONE_VARIANTS,
  NAVBAR_BUTTON_TWO_VARIANTS
} from '@/lib/constants/variants'

export default function SmallVersion() {
  const { setCursorStatus, setNavBarStatus, navBarStatus } = useStore()

  return (
    <motion.nav
      className='absolute right-0'
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.7,
          ease: 'easeInOut'
        }
      }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut'
      }}
    >
      <ul className='flex items-center gap-8 leading-none'>
        <li>
          <LanguageSelector />
        </li>
        <li>
          <button
            className='flex flex-col gap-2 cursor-pointer group'
            onClick={() => setNavBarStatus(!navBarStatus)}
            onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
            onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            aria-label='Toggle navigation menu'
          >
            <motion.div
              className='w-7 h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-700 group-hover:bg-kili-white'
              variants={NAVBAR_BUTTON_ONE_VARIANTS}
              animate={navBarStatus ? 'open' : 'closed'}
              transition={{
                duration: 0.7,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className='w-7 h-[2px] bg-kili-light-gray transition-colors ease-in-out duration-700 group-hover:bg-kili-white'
              variants={NAVBAR_BUTTON_TWO_VARIANTS}
              animate={navBarStatus ? 'open' : 'closed'}
              transition={{
                duration: 0.7,
                ease: 'easeInOut'
              }}
            />
          </button>
        </li>
      </ul>
    </motion.nav>
  )
}
