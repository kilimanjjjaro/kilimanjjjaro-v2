import { motion } from 'framer-motion'
import {
  OTHER_PROJECT_HR_VARIANTS,
  OTHER_PROJECT_VARIANTS
} from '@/constants/variants'

const EXPERIENCE_AND_EDUCATION = [
  {
    year: '2011 — 2017',
    name: 'Graphic Design'
  },
  {
    year: '2011 — 2017',
    name: 'Graphic Design'
  },
  {
    year: '2011 — 2017',
    name: 'Graphic Design'
  },
  {
    year: '2011 — 2017',
    name: 'Graphic Design'
  },
  {
    year: '2011 — 2017',
    name: 'Graphic Design'
  }
]

export default function ExperienceAndEducation() {
  return (
    <article className='overflow-hidden'>
      <motion.div
        className='flex pt-20 pb-[82px] gap-x-10'
        variants={OTHER_PROJECT_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <h3 className='w-[30%] text-4xl text-kili-white'>
          Experience & Education
        </h3>
        <ul className='grid flex-1 grid-cols-3 gap-10 text-2xl'>
          {EXPERIENCE_AND_EDUCATION.map((experience) => (
            <li key={experience.year} className='flex flex-col gap-2'>
              <span className='text-kili-white'>{experience.year}</span>
              <span className='text-kili-light-gray'>{experience.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.hr
        className='w-full h-[2px] border-kili-light-gray origin-left'
        variants={OTHER_PROJECT_HR_VARIANTS}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </article>
  )
}
