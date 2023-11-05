import getYearsOld from '@/lib/utils/getYearsOld'

export const BASE_URL = `${
  process.env.NODE_ENV === 'production'
    ? 'https://monospace-frontend.vercel.app'
    : 'http://localhost:3000'
}`

export const ADMIN_EMAIL = 'hello@monospace.ar'

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
  { name: 'GitHub', link: 'https://github.com/monospace' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/monospace' }
]

export const SECTIONS = {
  en: [
    { slug: 'top', name: 'Index' },
    { slug: 'projects', name: 'Projects' },
    { slug: 'knowledge', name: 'Knowledge' },
    { slug: 'contact', name: 'Contact' }
  ],
  es: [
    { slug: 'top', name: 'Inicio' },
    { slug: 'projects', name: 'Proyectos' },
    { slug: 'knowledge', name: 'Conocimientos' },
    { slug: 'contact', name: 'Contacto' }
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

export const INTRO_ANIMATION_DURATION = 2500

export const NAVIGATION_VARIANTS = {
  large: 1,
  small: 2
}
