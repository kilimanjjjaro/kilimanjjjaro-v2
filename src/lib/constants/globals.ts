import getYearsOld from '@/lib/utils/getYearsOld'
import { CAREER_START_YEAR } from '@/lib/constants/personal'
import { StackId } from '@/lib/constants/skills'
import type {
  LanguageInterface,
  Locale,
  StackBaseInterface
} from '@/lib/types/globals'

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://kilimanjjjaro.com'
    : 'http://localhost:3000'

export const ADMIN_EMAIL = 'gonzaloemacastillo@gmail.com'

export const LANGUAGES: Record<Locale, LanguageInterface[]> = {
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
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzaloemanuelcastillo'
  }
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

export const STACKS: StackBaseInterface[] = [
  { id: StackId.Frontend, name: 'Frontend' },
  { id: StackId.Backend, name: 'Backend' },
  { id: StackId.Extra, name: 'Extra' }
]

export const YEARS_OLD = getYearsOld()

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - CAREER_START_YEAR

export const LOCALES = {
  en: 'en',
  es: 'es'
}
