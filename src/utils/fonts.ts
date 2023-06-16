import localFont from 'next/font/local'

const neue = localFont({
  src: [
    {
      path: '../../public/fonts/neue-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-regular-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-regular-italic.woff',
      weight: '400',
      style: 'italic'
    }
  ],
  variable: '--neue-font'
})

export const neueFont = neue.variable
