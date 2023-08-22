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
      background: '/images/projects/wrkload/background.jpg',
      poster: '/images/projects/wrkload/poster.jpg',
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
      background: '/images/projects/royal-enfield/background.jpg',
      poster: '/images/projects/royal-enfield/poster.jpg',
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
      background: '/images/projects/threads-clone/background.jpg',
      poster: '/images/projects/threads-clone/poster.jpg',
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
    backgroundColor: '#fff',
    link: 'https://kilimanjjjaro-v1.pages.dev/',
    presentation: {
      background: '/images/projects/kilimanjjjaro-v1/background.jpg',
      poster: '/images/projects/kilimanjjjaro-v1/poster.jpg',
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
      "It's the HSBC bank's community created in 2019 for ambitious women seeking to enhance their leadership in the business world.",
    stacks: ['TypeScript', 'Astro', 'Tailwind', 'PHP'],
    role: 'Frontend Development',
    image: '/images/projects/volvo-test-drive/poster.jpg',
    year: '2023'
  },
  {
    id: 2,
    name: 'DolArg API',
    link: 'https://github.com/kilimanjjjaro/dolarg-api',
    description:
      'Is an API to get the most commonly dollar quotes of Argentina. The data is updated from Monday to Friday at 11 AM and 16 PM Argentina time.',
    stacks: [
      'TypeScript',
      'Hono',
      'Wrangler',
      'Cloudflare Wordkers',
      'Scrapping'
    ],
    role: 'Backend Development',
    year: '2023'
  },
  {
    id: 3,
    name: 'wrkload API',
    link: 'https://github.com/kilimanjjjaro/wrkload-api',
    description:
      'Is an easy-to-use API REST developed to be implemented as backend by an app. Gives the possibility to a user to keep organized and documented the time he was working on his tasks.',
    stacks: [
      'JavaScript',
      'Node JS',
      'MongoDb',
      'Express',
      'JWT Authentication'
    ],
    role: 'Backend Development',
    year: '2023'
  },

  {
    id: 4,
    name: 'Plan Ovalo',
    link: 'https://planovalo.automotoresmataderos.com.ar/',
    description:
      "It's the HSBC bank's community created in 2019 for ambitious women seeking to enhance their leadership in the business world.",
    stacks: ['HTML', 'JavaScript', 'PHP', 'CSS', 'SCSS', 'BEMIT'],
    role: 'Frontend Development',
    image: '/images/projects/plan-ovalo/poster.jpg',
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
    image: '/images/projects/mam/poster.jpg',
    year: '2022'
  },
  {
    id: 6,
    name: 'Plantemos un arbol',
    link: 'https://www.bio-land.com/plantemos-un-arbol/',
    description:
      "It's the HSBC bank's community created in 2019 for ambitious women seeking to enhance their leadership in the business world.",
    stacks: ['WordPress', 'WPBakery', 'CSS'],
    role: 'Frontend Development',
    image: '/images/projects/plantemos-un-arbol/poster.jpg',
    year: '2022'
  },
  {
    id: 7,
    name: 'Automotores Mataderos',
    link: 'https://automotoresmataderos.com.ar/',
    description:
      "It's the HSBC bank's community created in 2019 for ambitious women seeking to enhance their leadership in the business world.",
    stacks: ['HTML', 'JavaScript', 'PHP', 'CSS', 'SCSS', 'BEMIT'],
    role: 'Frontend Development',
    image: '/images/projects/automotores-maderos/poster.jpg',
    year: '2021'
  }
]
