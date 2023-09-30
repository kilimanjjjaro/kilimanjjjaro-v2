import NavBar from '@/components/navbar/NavBar'
import FormModal from '@/components/contact-form/FormModal'
import Footer from '@/components/Footer'
import ScrollPercentage from '@/components/ScrollPercentage'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import MessageForDevs from '@/components/MessageForDevs'
import Providers from '@/components/Providers'
import { neueHaasGroteskDisplayFont } from '@/lib/utils/fonts'
import { getStaticParams } from '@/lib/locales/server'
import type { ChildrenType } from '@/lib/interfaces/general'
import type { Metadata } from 'next'
import '@/app/globals.css'
import Navigation from '@/components/navbar/Navigation'

export const metadata: Metadata = {
  title: {
    template: '%s — Kilimanjjjaro',
    default: 'Kilimanjjjaro'
  },
  description: 'Kilimanjjjaro is a creative studio focused on web experiences.',
  openGraph: {
    title: {
      template: '%s — Kilimanjjjaro',
      default: 'Kilimanjjjaro'
    },
    description:
      'Kilimanjjjaro is a creative studio focused on web experiences.',
    images: [
      {
        url: 'https://kilimanjjjaro.com/images/og-image.png',
        width: 1200,
        height: 630
      }
    ],
    siteName: 'Kilimanjjjaro',
    type: 'website',
    url: 'https://kilimanjjjaro.com'
  }
}

export function generateStaticParams() {
  return getStaticParams()
}

export default function RootLayout({ children }: { children: ChildrenType }) {
  return (
    <html lang='en'>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased transition-colors duration-700 ease-in-out ${neueHaasGroteskDisplayFont}`}
      >
        <Providers>
          <Navigation />
          <NavBar />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
          <ScrollPercentage />
          <FormModal />
          <MessageForDevs />
          <CustomCursor />
        </Providers>
      </body>
    </html>
  )
}
