import { motion } from 'motion/react'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import NavbarButton from '@/components/navbar/NavbarButton'
import {
  FADE_IN_STATE,
  FADE_OUT_STATE,
  TRANSITION
} from '@/lib/constants/animation'

export default function SmallVersion() {
  return (
    <motion.nav
      className='absolute right-0 flex items-center gap-6 xl:gap-10'
      initial={FADE_OUT_STATE}
      animate={FADE_IN_STATE}
      exit={{ ...FADE_OUT_STATE, transition: TRANSITION }}
      transition={TRANSITION}
    >
      <LanguageSelector />
      <NavbarButton />
    </motion.nav>
  )
}
