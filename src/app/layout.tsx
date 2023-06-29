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
    <html lang='en' className='scroll-smooth'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased ${neueHaasGroteskDisplayFont}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
