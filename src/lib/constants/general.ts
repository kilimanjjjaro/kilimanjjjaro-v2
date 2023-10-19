import getYearsOld from '@/lib/utils/getYearsOld'

export const BASE_URL = `${
  process.env.NODE_ENV === 'production'
    ? 'https://kilimanjjjaro-portfolio.vercel.app'
    : 'http://localhost:3000'
}`

export const ADMIN_EMAIL = 'hola@kilimanjjjaro.com'

export const LANGUAGES = {
  en: [
    { id: 'en', name: 'English' },
    { id: 'es', name: 'Spanish' }
  ],
  es: [
    { id: 'en', name: 'Inglés' },
    { id: 'es', name: 'Español' }
  ]
}

export const SOCIAL_LINKS = [
  { name: 'GitHub', link: 'https://github.com/kilimanjjjaro' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/kilimanjjjaro' }
]

export const SECTIONS = {
  en: [
    { slug: 'featured-projects', name: 'Featured Projects' },
    { slug: 'introducing-me', name: 'Introducing Me' },
    { slug: 'more-projects', name: 'More Projects' },
    { slug: 'knowledge', name: 'Knowledge' },
    { slug: 'lets-talk', name: "Let's Talk!" }
  ],
  es: [
    { slug: 'featured-projects', name: 'Proyectos' },
    { slug: 'introducing-me', name: 'Presentándome' },
    { slug: 'more-projects', name: 'Más Proyectos' },
    { slug: 'knowledge', name: 'Conocimientos' },
    { slug: 'lets-talk', name: '¡Hablemos!' }
  ]
}

export const STACKS = [
  {
    id: 1,
    name: 'Frontend',
    startIndex: 0,
    endIndex: 0
  },
  {
    id: 2,
    name: 'Backend',
    startIndex: 0,
    endIndex: 0
  },
  {
    id: 3,
    name: 'Extra',
    startIndex: 0,
    endIndex: 0
  }
]

export const CURSOR_STATUS = {
  DEFAULT: 'default',
  HIDDEN: 'hidden',
  HOVER: 'hover',
  FEATURED: 'featured'
}

export const YEARS_OLD = getYearsOld()

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2017

export const LOCALES = {
  en: 'en',
  es: 'es'
}

export const UNDERLINED_STYLES =
  'relative before:h-[1px] before:scale-x-100 before:absolute mb-1 xl:mb-2 before:-bottom-[6px] xl:before:-bottom-2 before:left-0 before:right-0 before:block before:origin-right xl:hover:before:scale-x-0 before:transition-transform before:ease-in xl:hover:before:ease-out before:duration-1000 before:delay-1000 xl:hover:before:delay-0 after:h-[1px] after:absolute after:-bottom-[6px] xl:after:-bottom-2 after:left-0 after:right-0 after:block after:origin-left after:scale-x-0 xl:hover:after:scale-x-100 after:transition-transform after:ease-in xl:hover:after:ease-out after:duration-1000 xl:hover:after:delay-1000'
