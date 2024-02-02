import getYearsOld from '@lib/utils/getYearsOld'
import addStackIndexes from '@lib/utils/addStackIndexes'

export const BASE_URL = `${
  process.env.NODE_ENV === 'production'
    ? 'https://monospace-frontend.vercel.app'
    : 'http://localhost:3000'
}`

export const ADMIN_EMAIL = 'hello@monospace.ar'

export const LANGUAGES = [
  { id: 'en', name: 'En' },
  { id: 'es', name: 'Es' }
]

export const SOCIAL_LINKS = [
  { name: 'GitHub', link: 'https://github.com/monospace' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/monospace' }
]

export const SECTIONS = {
  en: [
    { slug: 'top', name: 'Index' },
    { slug: 'projects', name: 'Projects' },
    { slug: 'studio', name: 'Studio' },
    { slug: 'lets-talk', name: "Let's Talk!" }
  ],
  es: [
    { slug: 'top', name: 'Inicio' },
    { slug: 'projects', name: 'Proyectos' },
    { slug: 'studio', name: 'Estudio' },
    { slug: 'lets-talk', name: '¡Hablemos!' }
  ]
}

export const BASE_STACKS = [
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

export const STACKS = addStackIndexes()

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

export const INTRO_ANIMATION_DURATION = 2.3

export const NAVIGATION_VARIANTS = {
  LARGE: 1,
  SMALL: 2
}

export const MAGIC_KEYS = [
  { char: 'm', code: 'KeyM' },
  {
    char: 'n',
    code: 'KeyN'
  },
  {
    char: 's',
    code: 'KeyS'
  },
  {
    char: 'p',
    code: 'KeyP'
  },
  {
    char: 'c',
    code: 'KeyC'
  }
]
export const SUCCESS_KEY_COMBINATION = ['KeyM', 'KeyN', 'KeyS', 'KeyP', 'KeyC']

export const GRADIENTS = {
  default: {
    firstColor: [0.3 / 255.0, 0.3 / 255.0, 0.3 / 255.0],
    secondColor: [0.4 / 255.0, 0.4 / 255.0, 0.4 / 255.0],
    accentColor: [0.2 / 255.0, 0.2 / 255.0, 0.2 / 255.0]
  },
  random: [
    // {
    //   firstColor: [200 / 255.0, 0 / 255.0, 20 / 255.0],
    //   secondColor: [20 / 255.0, 0 / 255.0, 0 / 255.0],
    //   accentColor: [100 / 255.0, 20 / 255.0, 50 / 255.0]
    // },
    {
      firstColor: [255 / 255.0, 150 / 255.0, 0 / 255.0],
      secondColor: [255 / 255.0, 0 / 255.0, 0 / 255.0],
      accentColor: [255 / 255.0, 5 / 255.0, 0 / 255.0]
    },
    {
      firstColor: [255 / 255.0, 0 / 255.0, 0 / 255.0],
      secondColor: [255 / 255.0, 0 / 255.0, 0 / 255.0],
      accentColor: [0 / 255.0, 0 / 255.0, 50 / 255.0]
    }
  ]
}
