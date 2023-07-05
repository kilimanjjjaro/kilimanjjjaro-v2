import Link from 'next/link'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import { SECTIONS } from '@/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/constants/variants'

export default function Navigation() {
  const { navBarStatus, setNavBarStatus } = useStore()

  return (
    <motion.nav
      className='fixed inset-0 items-end hidden p-8 bg-kili-dark-gray'
      variants={NAVBAR_VARIANTS}
      initial='closed'
      animate={navBarStatus ? 'open' : 'closed'}
    >
      <ul>
        {SECTIONS.map((section) => (
          <li key={section.id} className='pb-4 overflow-hidden'>
            <Link
              className='text-9xl text-kili-white relative before:h-[8px] before:scale-x-0 before:absolute before:-bottom-3 before:left-0 before:right-0 before:block before:bg-current before:origin-left hover:before:scale-x-100 before:transition-transform before:ease-in hover:before:ease-out before:duration-500 after:h-[8px] after:delay-500 after:absolute after:-bottom-3 after:scale-x-0 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-500'
              href={`/#${section.id}`}
              onClick={setNavBarStatus}
            >
              <motion.div variants={NAVBAR_LI_VARIANTS}>
                {section.name}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
