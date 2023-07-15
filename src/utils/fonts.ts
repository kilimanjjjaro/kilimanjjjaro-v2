import localFont from 'next/font/local'

const neueHaasGroteskDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/neue-haas-grotesk-display-roman.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--neue-haas-grotesk-display-font'
})

export const neueHaasGroteskDisplayFont = neueHaasGroteskDisplay.variable
