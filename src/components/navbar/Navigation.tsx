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
              className='leading-none text-9xl text-kili-white relative before:h-[8px] before:scale-x-0 before:absolute before:-bottom-3 before:left-0 before:right-0 before:block before:bg-current before:origin-left hover:before:scale-x-100 before:transition-transform before:ease-in hover:before:ease-out before:duration-500 after:h-[8px] after:delay-500 after:absolute after:-bottom-3 after:scale-x-0 after:left-0 after:right-0 after:block after:bg-kili-dark-gray after:origin-left hover:after:scale-x-100 after:transition-transform after:ease-in hover:after:ease-out after:duration-500'
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
      <h2 className='leading-none uppercase text-kili-light-gray text-[12vw] flex flex-col items-end'>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            animate={
              navBarStatus
                ? {
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.85, 0.01, 0.4, 1],
                      delay: 0.7
                    }
                  }
                : {
                    y: '100%',
                    transition: {
                      duration: 0.7,
                      ease: [0.85, 0.01, 0.4, 1]
                    }
                  }
            }
          >
            Less but
          </motion.span>
        </span>
        <span className='overflow-hidden'>
          <motion.span
            className='block'
            animate={
              navBarStatus
                ? {
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.85, 0.01, 0.4, 1],
                      delay: 0.7
                    }
                  }
                : {
                    y: '100%',
                    transition: {
                      duration: 0.7,
                      ease: [0.85, 0.01, 0.4, 1]
                    }
                  }
            }
          >
            Better
          </motion.span>
        </span>
      </h2>
    </motion.nav>
  )
}
