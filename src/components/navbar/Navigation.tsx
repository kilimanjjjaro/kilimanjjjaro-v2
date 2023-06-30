import Link from 'next/link'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import { SECTIONS } from '@/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/constants/variants'

export default function Navigation() {
  const { navBarStatus, setNavBarStatus } = useStore()

  return (
    <motion.nav
      className='fixed top-0 left-0 items-end justify-between hidden w-full h-full p-8 bg-kili-dark-gray z-9998'
      variants={NAVBAR_VARIANTS}
      initial='closed'
      animate={navBarStatus ? 'open' : 'closed'}
    >
      <ul className='flex flex-col items-start gap-6'>
        {SECTIONS.map((section) => (
          <li key={section.id} className='pb-4 overflow-hidden'>
            <Link
              className='leading-none text-9xl text-kili-white relative before:h-[6px] before:scale-x-0 before:absolute before:-bottom-4 before:left-0 before:right-0 before:block before:bg-current before:origin-left hover:before:scale-x-100 before:transition-transform before:ease-in hover:before:ease-out before:duration-500 after:h-[6px] after:delay-500 after:absolute after:-bottom-4 after:scale-x-0 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-500'
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
      <h2 className='flex flex-col items-end italic leading-none uppercase text-kili-light-gray text-9xl'>
        Less but better
      </h2>
    </motion.nav>
  )
}
