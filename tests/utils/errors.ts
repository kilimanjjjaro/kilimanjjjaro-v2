import { IGNORED_ERROR_URLS } from '../constants/e2e'
import type { BrowserError } from '../types/browser'

export function unexpectedErrors(errors: BrowserError[]) {
  return errors
    .filter(
      ({ url }) => !IGNORED_ERROR_URLS.some((ignored) => url.includes(ignored))
    )
    .map(({ text, url }) => `${text} ${url}`.trim())
}
