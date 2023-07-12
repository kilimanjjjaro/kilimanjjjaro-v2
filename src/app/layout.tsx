import NavBar from '@/components/navbar/NavBar'
import ScrollPercentage from '@/components/ScrollPercentage'
import IntroAnimation from '@/components/IntroAnimation'
import { neueHaasGroteskDisplayFont } from '@/utils/fonts'
import type { ChildrenInterface } from '@/interfaces/general'
import '@/app/globals.css'

export const metadata = {
  title: 'Kilimanjjjaro'
}

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html lang='en'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased ${neueHaasGroteskDisplayFont}`}
      >
        <IntroAnimation />
        <NavBar />
        {children}
        <ScrollPercentage />
      </body>
    </html>
  )
}
