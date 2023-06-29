import type { LanguageInterface, StackInterface } from '@/interfaces/general'

export const LANGUAGES: LanguageInterface[] = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Spanish' }
]

export const SECTIONS = [
  { id: 'introducing', name: 'Introducing' },
  { id: 'projects', name: 'Projects' },
  { id: 'know-me', name: 'Know me' },
  { id: 'lets-talk', name: "Let's talk!" }
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
