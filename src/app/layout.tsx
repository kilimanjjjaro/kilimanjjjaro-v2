import NavBar from '@/components/navbar/NavBar'
import ScrollPercentage from '@/components/ScrollPercentage'
import IntroAnimation from '@/components/IntroAnimation'
import SmoothScroll from '@/components/SmoothScroll'
import { neueHaasGroteskDisplayFont } from '@/utils/fonts'
import type { ChildrenInterface } from '@/interfaces/general'
import '@/app/globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata = {
  title: 'Kilimanjjjaro'
}

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html lang='en'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased ${neueHaasGroteskDisplayFont}`}
      >
        {/* <IntroAnimation /> */}
        <CustomCursor />
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollPercentage />
      </body>
    </html>
  )
}
