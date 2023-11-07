'use client'

import { I18nProviderClient, useCurrentLocale } from '@/lib/i18n/client'
import type { ChildrenType } from '@/lib/types/general'

interface Props {
  children: ChildrenType
}

export default function Providers({ children }: Props) {
  const currentLocale = useCurrentLocale()

  return (
    <I18nProviderClient locale={currentLocale}>{children}</I18nProviderClient>
  )
}
