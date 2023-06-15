import { Inter } from 'next/font/google'

const interFont = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  preload: true
})

export const inter = interFont.variable
