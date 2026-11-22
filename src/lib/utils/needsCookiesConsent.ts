import { COOKIES_CONSENT_STORAGE_KEY } from '@/lib/constants/projects-ui'

export default function needsCookiesConsent() {
  return window.localStorage.getItem(COOKIES_CONSENT_STORAGE_KEY) === null
}
