'use client'

import SmoothScroll from '@/components/SmoothScroll'
import { I18nProviderClient, useCurrentLocale } from '@/lib/i18n/client'
import type { ChildrenType } from '@/lib/types/general'

export default function Providers({ children }: { children: ChildrenType }) {
  const currentLocale = useCurrentLocale()

  return (
    <I18nProviderClient locale={currentLocale}>
      <SmoothScroll>{children}</SmoothScroll>
    </I18nProviderClient>
  )
}
