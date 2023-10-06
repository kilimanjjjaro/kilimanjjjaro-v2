import { createI18nClient } from 'next-international/client'
import en from '@/lib/locales/en'

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale
} = createI18nClient(
  {
    en: async () => await import('../locales/en'),
    es: async () => await import('../locales/es')
  },
  {
    fallbackLocale: en
  }
)
