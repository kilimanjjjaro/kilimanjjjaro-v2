// import { Analytics } from '@vercel/analytics/react'
import NavBar from '@/components/navbar/NavBar'
import FormModal from '@/components/contact-form/FormModal'
import Footer from '@/components/footer/Footer'
import ScrollPercentage from '@/components/ScrollPercentage'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import ConsoleLogMessage from '@/components/ConsoleLogMessage'
import { neueHaasGroteskDisplayFont } from '@/utils/fonts'
import type { ChildrenType } from '@/interfaces/general'
import type { Metadata } from 'next'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Kilimanjjjaro',
  description: 'Kilimanjjjaro is a digital product studio based in Berlin.',
  openGraph: {
    title: 'Kilimanjjjaro',
    description: 'Kilimanjjjaro is a digital product studio based in Berlin.',
    images: [
      {
        url: 'https://kilimanjjjaro.com/images/og-image.png',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kilimanjjjaro',
    title: 'Kilimanjjjaro',
    description: 'Kilimanjjjaro is a digital product studio based in Berlin.',
    images: [
      {
        url: 'https://kilimanjjjaro.com/images/og-image.png',
        width: 1200,
        height: 630
      }
    ]
  }
}

export default function RootLayout({ children }: { children: ChildrenType }) {
  return (
    <html lang='en'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased ${neueHaasGroteskDisplayFont}`}
      >
        <NavBar />
        <div
          id='page-wrapper'
          className='transition-transform duration-[1.7s] ease-kili-in'
        >
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
          <FormModal />
        </div>
        <ScrollPercentage />
        <CustomCursor />
        <ConsoleLogMessage />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
