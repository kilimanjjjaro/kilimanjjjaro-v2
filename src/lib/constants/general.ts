import getYearsOld from '@/lib/utils/getYearsOld'

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

export const SECTIONS = {
  en: [
    { slug: 'featured-projects', name: 'Featured Projects' },
    { slug: 'introducing-me', name: 'Introducing Me' },
    { slug: 'more-projects', name: 'More Projects' },
    { slug: 'knowledge', name: 'Knowledge' }
  ],
  es: [
    { slug: 'featured-projects', name: 'Proyectos' },
    { slug: 'introducing-me', name: 'Presentándome' },
    { slug: 'more-projects', name: 'Más Proyectos' },
    { slug: 'knowledge', name: 'Conocimientos' }
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
