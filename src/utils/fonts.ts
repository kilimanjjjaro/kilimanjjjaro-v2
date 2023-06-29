import localFont from 'next/font/local'

const neueHaasGroteskDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/neue-haas-grotesk-display-light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-light-italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-light-italic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-roman.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-roman.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-italic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-medium-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-medium-italic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-bold-italic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/neue-haas-grotesk-display-bold-italic.woff',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--neue-haas-grotesk-display-font'
})

export const neueHaasGroteskDisplayFont = neueHaasGroteskDisplay.variable
