import { motion } from 'framer-motion'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import NavbarButton from '@/components/navbar/NavbarButton'

export default function SmallVersion() {
  return (
    <motion.nav
      className='absolute right-0 flex items-center gap-6 xl:gap-10'
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
          ease: 'easeInOut'
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
    >
      <LanguageSelector />
      <NavbarButton />
    </motion.nav>
  )
}
