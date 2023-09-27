import localFont from 'next/font/local'
import { Fira_Mono } from 'next/font/google'

const neueHaasGroteskDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/neue-haas-grotesk-display-roman.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap'
})

const firaMono = Fira_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const neueHaasGroteskDisplayFont = neueHaasGroteskDisplay.className
export const firaMonoFont = firaMono.className
