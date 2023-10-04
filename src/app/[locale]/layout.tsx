import Navigation from '@/components/navbar/Navigation'
import NavBar from '@/components/navbar/NavBar'
import FormModal from '@/components/contact-form/FormModal'
import Footer from '@/components/Footer'
import ScrollPercentage from '@/components/ScrollPercentage'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import MessageForDevs from '@/components/MessageForDevs'
import Providers from '@/components/Providers'
import { neueHaasGroteskDisplayFont } from '@/lib/utils/fonts'
import {
  getCurrentLocale,
  getScopedI18n,
  getStaticParams
} from '@/lib/locales/server'
import type { ChildrenType } from '@/lib/interfaces/general'
import type { Metadata } from 'next'
import '@/app/globals.css'
import { METADATA } from '@/lib/constants/metadata'

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
      canonical: '/en',
      languages: {
        en: '/en',
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
  const t = await getScopedI18n('footer')
  const locale = getCurrentLocale()

  const htmlLang = locale === 'en' ? 'en' : 'es'

  const goToTopButton = t('goToTop')
  const letsTalkButton = t('letsTalk')

  return (
    <html lang={htmlLang}>
      <body
        className={`bg-kili-black font-neue-haas-grotesk-display antialiased transition-colors duration-700 ease-in-out ${neueHaasGroteskDisplayFont}`}
      >
        <Providers>
          <SmoothScroll>
            {children}
            <Footer
              locale={locale}
              goToTop={goToTopButton}
              letsTalk={letsTalkButton}
            />
          </SmoothScroll>
          <ScrollPercentage />
          <FormModal />
          <MessageForDevs />
          <Navigation locale={locale} letsTalk={letsTalkButton} />
          <NavBar locale={locale} />
          <CustomCursor />
        </Providers>
      </body>
    </html>
  )
}
