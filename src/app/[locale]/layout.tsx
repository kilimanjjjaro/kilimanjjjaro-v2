import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Container from '@components/Container'
import Footer from '@components/Footer'
import CookiesConsent from '@components/CookiesConsent'
import FormModal from '@components/contact-form/FormModal'
import Navigation from '@components/navbar/Navigation'
import Navbar from '@components/navbar/Navbar'
import MessageForDevs from '@components/MessageForDevs'
import IntroAnimation from '@components/IntroAnimation'
import ScrollPercentage from '@components/ScrollPercentage'
import {
  getCurrentLocale,
  getScopedI18n,
  getStaticParams
} from '@lib/i18n/server'
import type { ChildrenType } from '@lib/types/general'
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
      template: '%s — Monospace',
      default: t('defaultTitle')
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
        template: '%s — Monospace',
        default: t('defaultTitle')
      },
      description: t('description'),
      images: [
        {
          url: 'https://monospace.ar/images/og-image.jpg',
          width: 1000,
          height: 563
        }
      ],
      siteName: 'Monospace',
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

  return (
    <html lang={currentLocale}>
      <body
        className={`bg-monospace-black font-geist-sans antialiased transition-colors duration-700 ease-in-out ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Container>
          {children}
          <Footer />
          <CookiesConsent />
          <Navigation />
          <Navbar />
          <FormModal />
          <IntroAnimation />
        </Container>
        <ScrollPercentage />
        <MessageForDevs />
      </body>
    </html>
  )
}
