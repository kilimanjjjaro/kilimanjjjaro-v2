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
    }
  ],
  variable: '--neue-haas-grotesk-display-font'
})

export const neueHaasGroteskDisplayFont = neueHaasGroteskDisplay.variable
