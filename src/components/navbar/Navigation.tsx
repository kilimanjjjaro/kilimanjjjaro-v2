import Link from 'next/link'
import { motion } from 'framer-motion'
import { useStore } from '@/store/store'
import { SECTIONS } from '@/constants/general'
import { NAVBAR_LI_VARIANTS, NAVBAR_VARIANTS } from '@/constants/variants'

export default function Navigation() {
  const { navBarStatus } = useStore()

  return (
    <motion.nav
      className='fixed top-0 left-0 items-end justify-between hidden w-full h-full p-8 bg-kili-dark-gray z-9998'
      variants={NAVBAR_VARIANTS}
      animate={navBarStatus ? 'open' : 'closed'}
    >
      <ul className='flex flex-col gap-6'>
        {SECTIONS.map((section) => (
          <li key={section.id} className='overflow-hidden'>
            <Link
              className='leading-none text-7xl text-kili-white'
              href={`/#${section.id}`}
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
