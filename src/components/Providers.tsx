'use client'

import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { I18nProviderClient, useCurrentLocale } from '@/lib/i18n/client'
import type { ChildrenType } from '@/lib/types/general'

interface Props {
  children: ChildrenType
}

export default function Providers({ children }: Props) {
  const currentLocale = useCurrentLocale()

  return (
    <I18nProviderClient locale={currentLocale}>
      <SmoothScrollbar />
      <GlobalCanvas />
      {children}
    </I18nProviderClient>
  )
}
