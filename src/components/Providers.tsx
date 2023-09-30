'use client'

import { ChildrenType } from '@/lib/interfaces/general'
import { I18nProviderClient } from '@/lib/locales/client'

export default function Providers({ children }: { children: ChildrenType }) {
  return <I18nProviderClient>{children}</I18nProviderClient>
}
