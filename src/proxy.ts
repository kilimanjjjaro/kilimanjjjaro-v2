import { createI18nMiddleware } from 'next-international/middleware'
import type { NextRequest } from 'next/server'
import {
  COOKIES_CONSENT_COOKIE,
  DECLINED_COOKIES_CONSENT,
  LOCALE_COOKIE
} from '@/lib/constants/cookies'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: () => 'en'
})

export function proxy(request: NextRequest) {
  const response = I18nMiddleware(request)
  const consent = request.cookies.get(COOKIES_CONSENT_COOKIE)?.value

  if (consent === DECLINED_COOKIES_CONSENT) {
    response.cookies.delete(LOCALE_COOKIE)
  }

  return response
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
