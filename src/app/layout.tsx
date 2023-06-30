import SmoothScroll from '@/components/shared/SmoothScroll'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
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
        <SmoothScroll>
          <NavBar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
