import SmoothScroll from '@/components/shared/SmoothScroll'
import NavBar from '@/components/navbar/NavBar'
import ScrollPercentage from '@/components/ScrollPercentage'
import { neueHaasGroteskDisplayFont } from '@/utils/fonts'
import type { ChildrenInterface } from '@/interfaces/general'
import '@/app/globals.css'
import IntroAnimation from '@/components/IntroAnimation'

export const metadata = {
  title: 'kilimanjjjaro'
}

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html lang='en'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased ${neueHaasGroteskDisplayFont}`}
      >
        {/* <IntroAnimation /> */}
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollPercentage />
      </body>
    </html>
  )
}
