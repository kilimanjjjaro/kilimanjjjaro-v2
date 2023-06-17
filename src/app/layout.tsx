import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import { neueFont } from '@/utils/fonts'
import type { ChildrenInterface } from '@/interfaces/general'
import '@/app/globals.css'

export const metadata = {
  title: 'Kilimanjjjaro'
}

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html lang='en'>
      <body
        className={`bg-kilimanjjjaro-black font-neue antialiased ${neueFont}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
