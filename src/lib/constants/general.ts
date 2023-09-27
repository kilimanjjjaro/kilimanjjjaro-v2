import type {
  LanguageInterface,
  StackInterface
} from '@/lib/interfaces/general'

export const LANGUAGES: LanguageInterface[] = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Spanish' }
]

export const SECTIONS = [
  { slug: 'featured-projects', name: 'Featured Projects' },
  { slug: 'introducing', name: 'Introducing' },
  { slug: 'other-projects', name: 'Other Projects' },
  { slug: 'know-me', name: 'Know me' },
  { slug: 'lets-talk', name: "Let's talk!" }
]

export const STACKS: StackInterface[] = [
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

export const INTRO_ANIMATION_DURATION = 6