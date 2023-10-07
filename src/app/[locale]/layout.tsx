import Providers from '@/components/Providers'
import SmoothScroll from '@/components/SmoothScroll'
import Footer from '@/components/Footer'
import CookiesConsent from '@/components/CookiesConsent'
import FormModal from '@/components/contact-form/FormModal'
import ScrollPercentage from '@/components/ScrollPercentage'
import Navigation from '@/components/navbar/Navigation'
import NavBar from '@/components/navbar/NavBar'
import CustomCursor from '@/components/CustomCursor'
import MessageForDevs from '@/components/MessageForDevs'
import { getCurrentLocale, getStaticParams } from '@/lib/i18n/server'
import { neueHaasGroteskDisplayFont } from '@/lib/utils/fonts'
import type { ChildrenType } from '@/lib/interfaces/general'
import { METADATA } from '@/lib/constants/metadata'
import type { Metadata } from 'next'
import '@/app/globals.css'

interface MetadataProps {
  params: { locale: string }
}

interface LayoutProps {
  children: ChildrenType
}

export async function generateMetadata({
  params
}: MetadataProps): Promise<Metadata> {
  const metadata = params.locale === 'en' ? METADATA.en : METADATA.es

  const fullMetadata: Metadata = {
    title: {
      template: '%s — Kilimanjjjaro',
      default: 'Kilimanjjjaro'
    },
    alternates: {
      canonical: '/',
      languages: {
        en: '/',
        es: '/es'
      }
    },
    description: metadata.description,
    openGraph: {
      title: {
        template: '%s — Kilimanjjjaro',
        default: 'Kilimanjjjaro'
      },
      description: metadata.description,
      images: [
        {
          url: 'https://kilimanjjjaro.com/images/og-image.png',
          width: 1200,
          height: 630
        }
      ],
      siteName: 'Kilimanjjjaro',
      type: 'website',
      url: metadata.url,
      locale: params.locale
    }
  }

  return fullMetadata
}

export function generateStaticParams() {
  return getStaticParams()
}

export default async function RootLayout({ children }: LayoutProps) {
  const currentLocale = getCurrentLocale()

  const htmlLang = currentLocale === 'en' ? 'en' : 'es'

  return (
    <html lang={htmlLang}>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased transition-colors duration-700 ease-in-out ${neueHaasGroteskDisplayFont}`}
      >
        <Providers>
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
          <CookiesConsent />
          <FormModal />
          <ScrollPercentage />
          <Navigation />
          <NavBar />
        </Providers>
        <CustomCursor />
        <MessageForDevs />
      </body>
    </html>
  )
}
