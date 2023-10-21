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
    { slug: 'projects', name: 'Projects' },
    { slug: 'introducing-me', name: 'Introducing Me' },
    { slug: 'knowledge', name: 'Knowledge' },
    { slug: 'lets-talk', name: "Let's Talk!" }
  ],
  es: [
    { slug: 'projects', name: 'Proyectos' },
    { slug: 'introducing-me', name: 'Conóceme' },
    { slug: 'knowledge', name: 'Sobre Mí' },
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
