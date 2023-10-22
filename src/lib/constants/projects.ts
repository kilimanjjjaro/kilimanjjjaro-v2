import { getGitHubImage } from '@/lib/utils/getGitHubImage'
import type {
  FeaturedProjectsInterface,
  OtherProjectsInterface
} from '@/lib/interfaces/projects'

export const FEATURED_PROJECTS: FeaturedProjectsInterface = {
  en: [
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
      keyword: 'Simplicity',
      role: 'UX/UI Design — Frontend & Backend Development',
      year: '2023',
      backgroundColor: '#6174af',
      link: '/#',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/wrkload/background_tpyj7m.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015501/kilimanjjjaro-portfolio/wrkload/poster_zshexi.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015501/kilimanjjjaro-portfolio/wrkload/hero-video_rbgipo.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/wrkload/gallery-1_askbgt.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015500/kilimanjjjaro-portfolio/wrkload/gallery-2_f07yju.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015501/kilimanjjjaro-portfolio/wrkload/gallery-3_luvb5a.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015501/kilimanjjjaro-portfolio/wrkload/gallery-4_cgtv65.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015501/kilimanjjjaro-portfolio/wrkload/gallery-5_xqisom.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698017297/kilimanjjjaro-portfolio/wrkload/og-image_wdhj5x.jpg'
    },
    {
      id: 2,
      name: 'Royal Enfield',
      slug: 'royal-enfield',
      headerDescription:
        'Royal Enfield is a motorcycle brand based in India, known for its classic style and historical heritage. The company was founded in 1893 in Redditch, United Kingdom. Institutional websites was developed for three brand dealerships.',
      sectionDescription:
        'The Royal Enfield motorcycle is the main element in all sections of the website.',
      stacks: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'BEMIT', 'Bootstrap'],
      keyword: 'Simplicity',
      role: 'Frontend Development',
      year: '2021',
      backgroundColor: '#bb1c1c',
      link: 'https://royalenfieldmadero.com.ar/',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015499/kilimanjjjaro-portfolio/royal-enfield/background_sta26k.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015499/kilimanjjjaro-portfolio/royal-enfield/poster_mqsbnp.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015502/kilimanjjjaro-portfolio/royal-enfield/hero-video_yjmfjd.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-1_chagaw.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-2_b0vbxo.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/royal-enfield/gallery-3_zmflcg.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/royal-enfield/gallery-4_x2jn5p.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-5_dehjpk.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015499/kilimanjjjaro-portfolio/royal-enfield/og-image_glaezm.jpg'
    },
    {
      id: 3,
      name: 'Threads Clone',
      slug: 'threads-clone',
      headerDescription:
        'This project is a clone of the new social network by Meta called Threads. An attempt was made to recreate the desktop version of the application, and some UX/UI improvements were implemented. The content is obtained from the official Threads API.',
      sectionDescription:
        "The project's goal is to learn about and experiment with Qwik.",
      stacks: ['TypeScript', 'Qwik', 'Tailwind', 'Cloudinary'],
      keyword: 'Simplicity',
      role: 'Frontend Development',
      year: '2023',
      backgroundColor: '#dbb92f',
      link: 'https://threads-clone-kilimanjjjaro.vercel.app/',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/threads-clone/background_arpawn.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/threads-clone/poster_s9ynoa.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/hero-video_ldyk7e.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015496/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-1_kh43cp.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-2_qitadi.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015498/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-3_efruld.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-4_wxx0tc.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-5_gax8jb.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/threads-clone/og-image_vidxt0.jpg'
    },
    {
      id: 4,
      name: 'Kilimanjjjaro v1',
      slug: 'kilimanjjjaro-v1',
      headerDescription:
        'This is the first version of my personal portfolio with a profile more focused on graphic design. It was designed and developed as a static website focused on simplicity.',
      sectionDescription:
        "The UI theme adapts to the project's identity. The site coexists with light and dark versions.",
      stacks: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      keyword: 'Simplicity',
      role: 'UX/UI Design — Frontend Development',
      year: '2017',
      backgroundColor: '#111111',
      link: 'https://kilimanjjjaro-v1.pages.dev/',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015496/kilimanjjjaro-portfolio/kilimanjjjaro-v1/background_d3mol3.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/poster_srxeef.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/hero-video_ldyk7e.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015496/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-1_kh43cp.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-2_qitadi.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015498/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-3_efruld.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-4_wxx0tc.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-5_gax8jb.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698017447/kilimanjjjaro-portfolio/kilimanjjjaro-v1/og-image_oui5s4.jpg'
    }
  ],
  es: [
    {
      id: 1,
      name: 'wrkload',
      slug: 'wrkload',
      headerDescription:
        'wrkload es una aplicación web donde puedes hacer un seguimiento de lo que has trabajado de una manera simple y organizada. Puedes controlar detalladamente el tiempo que has dedicado a un proyecto y los datos adicionales asociados a él. Todo en el mismo lugar.',
      sectionDescription:
        'El modo oscuro fue diseñado y desarrollado en toda la aplicación para proporcionar una experiencia de usuario más relajada y enfocada.',
      stacks: [
        'Next JS',
        'TypeScript',
        'Tailwind',
        'Node JS',
        'MongoDB',
        'Express',
        'Figma'
      ],
      keyword: 'Simplicity',
      role: 'Diseño UX/UI — Desarrollo Frontend & Backend',
      year: '2023',
      backgroundColor: '#6174af',
      link: '/#',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/wrkload/background_tpyj7m.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015501/kilimanjjjaro-portfolio/wrkload/poster_zshexi.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015501/kilimanjjjaro-portfolio/wrkload/hero-video_rbgipo.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/wrkload/gallery-1_askbgt.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015500/kilimanjjjaro-portfolio/wrkload/gallery-2_f07yju.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015501/kilimanjjjaro-portfolio/wrkload/gallery-3_luvb5a.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015501/kilimanjjjaro-portfolio/wrkload/gallery-4_cgtv65.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015501/kilimanjjjaro-portfolio/wrkload/gallery-5_xqisom.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698017297/kilimanjjjaro-portfolio/wrkload/og-image_wdhj5x.jpg'
    },
    {
      id: 2,
      name: 'Royal Enfield',
      slug: 'royal-enfield',
      headerDescription:
        'Royal Enfield es una marca de motocicletas con sede en India, conocida por su estilo clásico y su patrimonio histórico. La empresa fue fundada en 1893 en Redditch, Reino Unido. Se desarrollaron sitios web institucionales para tres concesionarios de la marca.',
      sectionDescription:
        'La motocicleta es el elemento principal en todas las secciones del sitio web.',
      stacks: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'BEMIT', 'Bootstrap'],
      keyword: 'Simplicity',
      role: 'Desarrollo Frontend',
      year: '2021',
      backgroundColor: '#bb1c1c',
      link: 'https://royalenfieldmadero.com.ar/',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015499/kilimanjjjaro-portfolio/royal-enfield/background_sta26k.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015499/kilimanjjjaro-portfolio/royal-enfield/poster_mqsbnp.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015502/kilimanjjjaro-portfolio/royal-enfield/hero-video_yjmfjd.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-1_chagaw.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-2_b0vbxo.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/royal-enfield/gallery-3_zmflcg.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/royal-enfield/gallery-4_x2jn5p.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-5_dehjpk.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015499/kilimanjjjaro-portfolio/royal-enfield/og-image_glaezm.jpg'
    },
    {
      id: 3,
      name: 'Threads Clone',
      slug: 'threads-clone',
      headerDescription:
        'Este proyecto es un clon de la nueva red social de Meta llamada Threads. Se intentó recrear la versión de escritorio de la aplicación y se implementaron algunas mejoras en UX/UI. El contenido es obtenido de la API oficial de Threads.',
      sectionDescription:
        'El principal objetivo del proyecto es aprender y experimentar con Qwik.',
      stacks: ['TypeScript', 'Qwik', 'Tailwind', 'Cloudinary'],
      keyword: 'Simplicity',
      role: 'Desarrollo Frontend',
      year: '2023',
      backgroundColor: '#dbb92f',
      link: 'https://threads-clone-kilimanjjjaro.vercel.app/',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/threads-clone/background_arpawn.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/threads-clone/poster_s9ynoa.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/hero-video_ldyk7e.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-1_chagaw.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-2_b0vbxo.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/royal-enfield/gallery-3_zmflcg.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/royal-enfield/gallery-4_x2jn5p.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/royal-enfield/gallery-5_dehjpk.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/threads-clone/og-image_vidxt0.jpg'
    },
    {
      id: 4,
      name: 'Kilimanjjjaro v1',
      slug: 'kilimanjjjaro-v1',
      headerDescription:
        'Esta es la primera versión de mi portafolio personal con un enfoque más centrado en el diseño gráfico. Fue diseñado y desarrollado como un sitio web estático enfocado en la simplicidad.',
      sectionDescription:
        'El tema de la UI se adapta a la identidad del proyecto. El sitio coexiste con versiones claras y oscuras.',
      stacks: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      keyword: 'Simplicity',
      role: 'Diseño UX/UI — Desarrollo Frontend',
      year: '2017',
      backgroundColor: '#111111',
      link: 'https://kilimanjjjaro-v1.pages.dev/',
      presentation: {
        background:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015496/kilimanjjjaro-portfolio/kilimanjjjaro-v1/background_d3mol3.webp',
        poster:
          'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/poster_srxeef.webp',
        video:
          'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/hero-video_ldyk7e.webm'
      },
      gallery: [
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015496/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-1_kh43cp.webp',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-2_qitadi.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015498/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-3_efruld.webm',
        'https://res.cloudinary.com/dfzzgyj7r/video/upload/ac_none/v1698015499/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-4_wxx0tc.webm',
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/kilimanjjjaro-v1/gallery-5_gax8jb.webp'
      ],
      metaImage:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698017447/kilimanjjjaro-portfolio/kilimanjjjaro-v1/og-image_oui5s4.jpg'
    }
  ]
}

export const OTHER_PROJECTS: OtherProjectsInterface = {
  en: [
    {
      id: 1,
      name: 'Volvo Test Drive',
      slug: 'volvo-test-drive',
      link: 'https://volvotestdrive.com.ar/',
      description:
        'Landing page developed for Volvo Argentina with the objective of simplifying the request for test drives.',
      stacks: ['TypeScript', 'React', 'Tailwind'],
      role: 'Frontend Development',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/volvo-test-drive/poster_oonvgi.webp',
      year: '2023',
      isRepository: false
    },
    {
      id: 2,
      name: 'DolArg API',
      slug: 'dolarg-api',
      link: 'https://github.com/kilimanjjjaro/dolarg-api',
      description:
        'REST API to get the most commonly dollar quotes of Argentina. The data is updated from Monday to Friday at 11 AM and 16 PM local time.',
      stacks: ['TypeScript', 'Hono', 'Cloudflare Workers', 'Scrapping'],
      role: 'Backend Development',
      image: getGitHubImage('dolarg-api'),
      year: '2023',
      isRepository: true
    },
    {
      id: 3,
      name: 'wrkload API',
      slug: 'wrkload-api',
      link: 'https://github.com/kilimanjjjaro/wrkload-api',
      description:
        'REST API developed to be implemented as the backend for an application. It includes all the functionalities needed to develop a task app.',
      stacks: ['JavaScript', 'Node JS', 'MongoDB', 'Express', 'JWT Auth'],
      role: 'Backend Development',
      image: getGitHubImage('wrkload-api'),
      year: '2023',
      isRepository: true
    },

    {
      id: 4,
      name: 'Plan Ovalo',
      slug: 'plan-ovalo',
      link: 'https://planovalo.automotoresmataderos.com.ar/',
      description:
        'Landing page developed for a Ford dealership. Its objective is to inform about the financing plan and provide a means of communication.',
      stacks: ['TypeScript', 'Astro', 'Tailwind'],
      role: 'Frontend Development',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/plan-ovalo/poster_qywgbl.webp',
      year: '2023',
      isRepository: false
    },
    {
      id: 5,
      name: 'Mujeres al Mundo',
      slug: 'mujeres-al-mundo',
      link: 'https://www.mujeresalmundo.hsbc.com.ar/',
      description:
        "It's the HSBC bank's community created in 2019 for ambitious women seeking to enhance their leadership in the business world. Collaborative Project.",
      stacks: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'BEMIT', 'Bootstrap'],
      role: 'Frontend Development',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/mam/poster_ri7amy.webp',
      year: '2022',
      isRepository: false
    },
    {
      id: 6,
      name: 'Plantemos un Árbol',
      slug: 'plantemos-un-arbol',
      link: 'https://www.bio-land.com/plantemos-un-arbol/',
      description:
        'Landing page developed for an environmental awareness campaign driven by BioLand.',
      stacks: ['WordPress', 'WPBakery', 'CSS'],
      role: 'Frontend Development',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/plantemos-un-arbol/poster_hgzx6i.webp',
      year: '2022',
      isRepository: false
    },
    {
      id: 7,
      name: 'Automotores Mataderos',
      slug: 'automotores-mataderos',
      link: 'https://automotoresmataderos.com.ar/',
      description:
        "Project developed for a Ford dealership. It's an institutional page and its objective is to contain information about the dealership and the brand.",
      stacks: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'BEMIT', 'Bootstrap'],
      role: 'Frontend Development',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015501/kilimanjjjaro-portfolio/automotores-mataderos/poster_fkuudg.webp',
      year: '2021',
      isRepository: false
    }
  ],
  es: [
    {
      id: 1,
      name: 'Volvo Test Drive',
      slug: 'volvo-test-drive',
      link: 'https://volvotestdrive.com.ar/',
      description:
        'Landing page desarrollada para Volvo Argentina. Su objetivo es simplificar la solicitud de pruebas de manejo.',
      stacks: ['TypeScript', 'React', 'Tailwind'],
      role: 'Desarrollo Frontend',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015500/kilimanjjjaro-portfolio/volvo-test-drive/poster_oonvgi.webp',
      year: '2023',
      isRepository: false
    },
    {
      id: 2,
      name: 'DolArg API',
      slug: 'dolarg-api',
      link: 'https://github.com/kilimanjjjaro/dolarg-api',
      description:
        'API REST para obtener las cotizaciones más utilizadas del dólar en Argentina. Los datos se actualizan de lunes a viernes a las 11 AM y 4 PM, hora local.',
      stacks: ['TypeScript', 'Hono', 'Cloudflare Workers', 'Scrapping'],
      role: 'Desarrollo Backend',
      image: getGitHubImage('dolarg-api'),
      year: '2023',
      isRepository: false
    },
    {
      id: 3,
      name: 'wrkload API',
      slug: 'wrkload-api',
      link: 'https://github.com/kilimanjjjaro/wrkload-api',
      description:
        'API REST desarrollada para ser implementada como backend de una aplicación. Incluye todas las funcionalidades necesarias para desarrollar una aplicación de tareas.',
      stacks: ['JavaScript', 'Node JS', 'MongoDB', 'Express', 'JWT Auth'],
      role: 'Desarrollo Backend',
      image: getGitHubImage('wrkload-api'),
      year: '2023',
      isRepository: false
    },

    {
      id: 4,
      name: 'Plan Ovalo',
      slug: 'plan-ovalo',
      link: 'https://planovalo.automotoresmataderos.com.ar/',
      description:
        'Landing page desarrollada para un concesionario de Ford. Su objetivo es informar sobre el plan de financiamiento y proporcionar un medio de comunicación.',
      stacks: ['TypeScript', 'Astro', 'Tailwind'],
      role: 'Desarrollo Frontend',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015498/kilimanjjjaro-portfolio/plan-ovalo/poster_qywgbl.webp',
      year: '2023',
      isRepository: false
    },
    {
      id: 5,
      name: 'Mujeres al Mundo',
      slug: 'mujeres-al-mundo',
      link: 'https://www.mujeresalmundo.hsbc.com.ar/',
      description:
        'Es la comunidad del banco HSBC creada en 2019 para mujeres ambiciosas que buscan mejorar su liderazgo en el mundo empresarial.',
      stacks: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'BEMIT', 'Bootstrap'],
      role: 'Desarrollo Frontend',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/mam/poster_ri7amy.webp',
      year: '2022',
      isRepository: false
    },
    {
      id: 6,
      name: 'Plantemos un Árbol',
      slug: 'plantemos-un-arbol',
      link: 'https://www.bio-land.com/plantemos-un-arbol/',
      description:
        'Landing page desarrollada para una campaña de concienciación ambiental impulsada por BioLand.',
      stacks: ['WordPress', 'WPBakery', 'CSS'],
      role: 'Desarrollo Frontend',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015497/kilimanjjjaro-portfolio/plantemos-un-arbol/poster_hgzx6i.webp',
      year: '2022',
      isRepository: false
    },
    {
      id: 7,
      name: 'Automotores Mataderos',
      slug: 'automotores-mataderos',
      link: 'https://automotoresmataderos.com.ar/',
      description:
        'Proyecto desarrollado para una concesionaria de Ford. Es una página institucional y su objetivo es brindar información sobre la concesionaria y la marca.',
      stacks: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'BEMIT', 'Bootstrap'],
      role: 'Desarrollo Frontend',
      image:
        'https://res.cloudinary.com/dfzzgyj7r/image/upload/v1698015501/kilimanjjjaro-portfolio/automotores-mataderos/poster_fkuudg.webp',
      year: '2021',
      isRepository: false
    }
  ]
}
