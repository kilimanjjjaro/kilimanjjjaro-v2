import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { neueFont } from '@/utils/fonts'
import type { ChildrenInterface } from '@/interfaces/general'
import './globals.css'

export const metadata = {
  title: 'Kilimanjjjaro'
}

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html lang='en'>
      <body
        className={`bg-kilimanjjjaro-black font-neue antialiased ${neueFont}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
