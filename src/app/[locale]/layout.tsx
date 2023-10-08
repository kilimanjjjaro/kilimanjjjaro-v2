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
import {
  getCurrentLocale,
  getScopedI18n,
  getStaticParams
} from '@/lib/i18n/server'
import { neueHaasGroteskDisplayFont } from '@/lib/utils/fonts'
import { LOCALES } from '@/lib/constants/general'
import type { ChildrenType } from '@/lib/interfaces/general'
import type { Metadata } from 'next'
import '@/app/globals.css'

interface MetadataProps {
  params: { locale: string }
}

export async function generateMetadata({
  params
}: MetadataProps): Promise<Metadata> {
  const t = await getScopedI18n('metadata')

  const fullMetadata: Metadata = {
    title: {
      template: '%s — Kilimanjjjaro',
      default: 'Kilimanjjjaro'
    },
    metadataBase: new URL(t('url')),
    alternates: {
      canonical: '/',
      languages: {
        en: '/',
        es: '/es'
      }
    },
    description: t('description'),
    openGraph: {
      title: {
        template: '%s — Kilimanjjjaro',
        default: 'Kilimanjjjaro'
      },
      description: t('description'),
      images: [
        {
          url: 'https://kilimanjjjaro.com/images/og-image.png',
          width: 1200,
          height: 630
        }
      ],
      siteName: 'Kilimanjjjaro',
      type: 'website',
      url: t('url'),
      locale: params.locale
    }
  }

  return fullMetadata
}

export function generateStaticParams() {
  return getStaticParams()
}

export default async function RootLayout({
  children
}: {
  children: ChildrenType
}) {
  const currentLocale = getCurrentLocale()

  const htmlLang = currentLocale === LOCALES.en ? 'en' : 'es'

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
