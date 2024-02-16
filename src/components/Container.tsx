'use client'

import Footer from '@components/Footer'
import Navigation from '@components/navbar/Navigation'
import Navbar from '@components/navbar/Navbar'
import FormModal from '@components/contact-form/FormModal'
import CookiesConsent from '@components/CookiesConsent'
import { I18nProviderClient, useCurrentLocale } from '@lib/i18n/client'
import type { ChildrenType } from '@lib/types/general'

export default function Container({ children }: { children: ChildrenType }) {
  const currentLocale = useCurrentLocale()

  return (
    <I18nProviderClient locale={currentLocale}>
      {children}
      <Footer />
      <FormModal />
      <CookiesConsent />
      <Navigation />
      <Navbar />
    </I18nProviderClient>
  )
}
