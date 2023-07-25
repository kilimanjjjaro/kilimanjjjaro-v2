import NavBar from '@/components/navbar/NavBar'
import ScrollPercentage from '@/components/ScrollPercentage'
import IntroAnimation from '@/components/IntroAnimation'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import { neueHaasGroteskDisplayFont } from '@/utils/fonts'
import type { ChildrenType } from '@/interfaces/general'
import '@/app/globals.css'

export const metadata = {
  title: 'Kilimanjjjaro'
}

export default function RootLayout({ children }: { children: ChildrenType }) {
  return (
    <html lang='en'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased ${neueHaasGroteskDisplayFont}`}
      >
        <IntroAnimation />
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollPercentage />
        <CustomCursor />
      </body>
    </html>
  )
}
