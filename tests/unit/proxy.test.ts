import { NextRequest } from 'next/server'
import { describe, expect, it } from 'vitest'
import { proxy } from '@/proxy'
import {
  COOKIES_CONSENT_COOKIE,
  DECLINED_COOKIES_CONSENT,
  LOCALE_COOKIE
} from '@/lib/constants/cookies'
import { SPANISH_HOME_URL } from '../constants/unit'

const DECLINED = `${COOKIES_CONSENT_COOKIE}=${DECLINED_COOKIES_CONSENT}`

function request(cookie?: string) {
  return new NextRequest(
    SPANISH_HOME_URL,
    cookie === undefined ? {} : { headers: { cookie } }
  )
}

describe('i18n proxy', () => {
  it('stores the locale of the url in a cookie', () => {
    const response = proxy(request())

    expect(response.cookies.get(LOCALE_COOKIE)?.value).toBe('es')
  })

  it('does not store the locale after cookies were declined', () => {
    const response = proxy(request(DECLINED))

    expect(response.cookies.get(LOCALE_COOKIE)?.value).toBe('')
  })

  it('removes a locale cookie left from before declining', () => {
    const response = proxy(request(`${DECLINED}; ${LOCALE_COOKIE}=es`))

    expect(response.cookies.get(LOCALE_COOKIE)?.value).toBe('')
  })
})
