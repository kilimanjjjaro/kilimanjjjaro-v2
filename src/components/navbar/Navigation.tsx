import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import { SECTIONS, CURSOR_STATUS } from '@/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/constants/variants'

export default function Navigation() {
  const { navBarStatus, setNavBarStatus, setCursorStatus } = useStore()
  const router = useRouter()

  const handleClick = async (hash: string) => {
    setNavBarStatus(false)
    router.push(`/#${hash}`)
  }

  return (
    <motion.nav
      className='fixed inset-0 items-center justify-center hidden p-8 bg-kili-dark-gray'
      variants={NAVBAR_VARIANTS}
      initial='closed'
      animate={navBarStatus ? 'open' : 'closed'}
    >
      <ul className='flex flex-col items-center gap-5'>
        {SECTIONS.map((section) => (
          <li key={section.id} className='overflow-hidden'>
            <motion.button
              className='flex items-center gap-5 text-9xl text-kili-white'
              variants={NAVBAR_LI_VARIANTS}
              onClick={async () => await handleClick(section.id)}
              onMouseEnter={() => setCursorStatus(CURSOR_STATUS.HOVER)}
              onMouseLeave={() => setCursorStatus(CURSOR_STATUS.DEFAULT)}
            >
              {section.name}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
