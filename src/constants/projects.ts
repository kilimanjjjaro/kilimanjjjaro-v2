import type {
  FeaturedProjectInterface,
  OtherProjectInterface
} from '@/interfaces/general'

export const FEATURED_PROJECTS: FeaturedProjectInterface[] = [
  {
    id: 1,
    name: 'wrkload',
    slug: 'wrkload',
    headerDescription:
      "wrkload is a web app where you can track what you've worked on in a simple and organized way. You can control in detail the time you worked on a project and extra data associated with it. All in the same place.",
    sectionDescription:
      'The dark mode was designed and developed throughout the application for a more relaxed and focused user experience.',
    stacks: [
      'Next JS',
      'TypeScript',
      'Tailwind',
      'Node JS',
      'MongoDB',
      'Express',
      'Figma'
    ],
    role: 'UX/UI Design — Frontend & Backend Development',
    year: '2023',
    backgroundColor: '#7686b7',
    link: '/#',
    presentation: {
      background: '/images/projects/wrkload/background.webp',
      poster: '/images/projects/wrkload/poster.webp',
      heroVideo: '/images/projects/wrkload/hero-video.mp4'
    },
    gallery: [
      '/images/projects/wrkload/gallery-1.webp',
      '/images/projects/wrkload/gallery-2.mp4',
      '/images/projects/wrkload/gallery-3.webp',
      '/images/projects/wrkload/gallery-4.mp4',
      '/images/projects/wrkload/gallery-5.webp',
      '/images/projects/wrkload/gallery-6.mp4',
      '/images/projects/wrkload/gallery-7.webp'
    ]
  },
  {
    id: 2,
    name: 'Royal Enfield',
    slug: 'royal-enfield',
    headerDescription:
      'Royal Enfield is a motorcycle brand based in India, known for its classic style and historical heritage. The company was founded in 1893 in Redditch, United Kingdom. Institutional websites was developed for three brand dealerships.',
    sectionDescription:
      'The dark mode was designed and developed throughout the application.',
    stacks: ['HTML', 'JavaScript', 'PHP', 'CSS', 'SCSS', 'BEMIT'],
    role: 'Frontend Development',
    year: '2021',
    backgroundColor: '#ed3414',
    link: 'https://royalenfieldmadero.com.ar/',
    presentation: {
      background: '/images/projects/royal-enfield/background.webp',
      poster: '/images/projects/royal-enfield/poster.webp',
      heroVideo: '/images/projects/royal-enfield/hero-video.mp4'
    },
    gallery: [
      '/images/projects/royal-enfield/gallery-1.webp',
      '/images/projects/royal-enfield/gallery-2.mp4',
      '/images/projects/royal-enfield/gallery-3.webp',
      '/images/projects/royal-enfield/gallery-4.mp4',
      '/images/projects/royal-enfield/gallery-5.webp',
      '/images/projects/royal-enfield/gallery-6.mp4',
      '/images/projects/royal-enfield/gallery-7.webp'
    ]
  },
  {
    id: 3,
    name: 'Threads Clone',
    slug: 'threads-clone',
    headerDescription:
      'This project is a clone of the new social network by Meta called Threads. An attempt was made to recreate the desktop version of the application, and some UX/UI improvements were implemented.',
    sectionDescription:
      "The project's goal is to learn about and experiment with Qwik.",
    stacks: ['TypeScript', 'Qwik', 'Tailwind', 'Cloudinary'],
    role: 'Frontend Development',
    year: '2023',
    backgroundColor: '#d31aed',
    link: 'https://threads-clone-kilimanjjjaro.vercel.app/',
    presentation: {
      background: '/images/projects/threads-clone/background.webp',
      poster: '/images/projects/threads-clone/poster.webp',
      heroVideo: '/images/projects/threads-clone/hero-video.mp4'
    },
    gallery: [
      '/images/projects/threads-clone/gallery-1.webp',
      '/images/projects/threads-clone/gallery-2.mp4',
      '/images/projects/threads-clone/gallery-3.webp',
      '/images/projects/threads-clone/gallery-4.mp4',
      '/images/projects/threads-clone/gallery-5.webp',
      '/images/projects/threads-clone/gallery-6.mp4',
      '/images/projects/threads-clone/gallery-7.webp'
    ]
  },
  {
    id: 4,
    name: 'Kilimanjjjaro v1',
    slug: 'kilimanjjjaro-v1',
    headerDescription:
      'This is the first version of my personal portfolio. It was designed and developed as a static website focused on simplicity.',
    sectionDescription: 'The website layout adapts to the projects.',
    stacks: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    role: 'UX/UI Design — Frontend Development',
    year: '2017',
    backgroundColor: '#111111',
    link: 'https://kilimanjjjaro-v1.pages.dev/',
    presentation: {
      background: '/images/projects/kilimanjjjaro-v1/background.webp',
      poster: '/images/projects/kilimanjjjaro-v1/poster.webp',
      heroVideo: '/images/projects/kilimanjjjaro-v1/hero-video.mp4'
    },
    gallery: [
      '/images/projects/kilimanjjjaro-v1/gallery-1.webp',
      '/images/projects/kilimanjjjaro-v1/gallery-2.mp4',
      '/images/projects/kilimanjjjaro-v1/gallery-3.webp',
      '/images/projects/kilimanjjjaro-v1/gallery-4.mp4',
      '/images/projects/kilimanjjjaro-v1/gallery-5.webp',
      '/images/projects/kilimanjjjaro-v1/gallery-6.mp4',
      '/images/projects/kilimanjjjaro-v1/gallery-7.webp'
    ]
  }
]

export const OTHER_PROJECTS: OtherProjectInterface[] = [
  {
    id: 1,
    name: 'Volvo Test Drive',
    link: 'https://volvotestdrive.com.ar/',
    description:
      'Landing page developed for Volvo Argentina (through ATOMO Agency) with the objective of simplifying the request for test drives.',
    stacks: ['TypeScript', 'React', 'Tailwind', 'PHP'],
    role: 'Frontend Development',
    image: '/images/projects/volvo-test-drive/poster.webp',
    year: '2023'
  },
  {
    id: 2,
    name: 'DolArg API',
    link: 'https://github.com/kilimanjjjaro/dolarg-api',
    description:
      'REST API to get the most commonly dollar quotes of Argentina. The data is updated from Monday to Friday at 11 AM and 16 PM local time.',
    stacks: ['TypeScript', 'Hono', 'Cloudflare Wordkers', 'Scrapping'],
    role: 'Backend Development',
    year: '2023'
  },
  {
    id: 3,
    name: 'wrkload API',
    link: 'https://github.com/kilimanjjjaro/wrkload-api',
    description:
      'REST API developed to be implemented as the backend for an application. It includes all the functionalities needed to develop a task app.',
    stacks: [
      'JavaScript',
      'Node JS',
      'MongoDB',
      'Express',
      'JWT Authentication',
      'Cookies'
    ],
    role: 'Backend Development',
    year: '2023'
  },

  {
    id: 4,
    name: 'Plan Ovalo',
    link: 'https://planovalo.automotoresmataderos.com.ar/',
    description:
      'Landing page developed for a Ford dealership. Its objective is to inform about the financing plan and provide a means of communication.',
    stacks: ['TypeScript', 'Astro', 'Tailwind', 'PHP'],
    role: 'Frontend Development',
    image: '/images/projects/plan-ovalo/poster.webp',
    year: '2023'
  },
  {
    id: 5,
    name: 'Mujeres al Mundo',
    link: 'https://www.mujeresalmundo.hsbc.com.ar/',
    description:
      "It's the HSBC bank's community created in 2019 for ambitious women seeking to enhance their leadership in the business world.",
    stacks: ['HTML', 'JavaScript', 'PHP', 'CSS', 'SCSS', 'BEMIT'],
    role: 'Frontend Development',
    image: '/images/projects/mam/poster.webp',
    year: '2022'
  },
  {
    id: 6,
    name: 'Plantemos un Árbol',
    link: 'https://www.bio-land.com/plantemos-un-arbol/',
    description:
      "It's a landing page developed (through circulo.digital) for an environmental awareness campaign driven by BioLand.",
    stacks: ['WordPress', 'WPBakery', 'CSS'],
    role: 'Frontend Development',
    image: '/images/projects/plantemos-un-arbol/poster.webp',
    year: '2022'
  },
  {
    id: 7,
    name: 'Automotores Mataderos',
    link: 'https://automotoresmataderos.com.ar/',
    description:
      "Project developed for a Ford dealership. It's an institutional page and its objective is to contain information about the dealership and the brand.",
    stacks: ['HTML', 'JavaScript', 'PHP', 'CSS', 'SCSS', 'BEMIT'],
    role: 'Frontend Development',
    image: '/images/projects/automotores-mataderos/poster.webp',
    year: '2021'
  }
]
