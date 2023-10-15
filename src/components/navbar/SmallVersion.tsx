import { motion } from 'framer-motion'
import LanguageSelector from '@/components/navbar/LanguageSelector'
import NavbarButton from '@/components/navbar/NavbarButton'

export default function SmallVersion() {
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
          duration: 1,
          ease: 'easeInOut'
        }
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
    >
      <ul className='flex items-center gap-10 leading-none'>
        <li>
          <LanguageSelector />
        </li>
        <li>
          <NavbarButton />
        </li>
      </ul>
    </motion.nav>
  )
}
