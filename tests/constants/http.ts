export const HTTP_STATUS_OK = 200
export const HTTP_STATUS_BAD_REQUEST = 400
export const HTTP_STATUS_NOT_FOUND = 404
export const HTTP_STATUS_UNPROCESSABLE_ENTITY = 422

export const HTTP_STATUS_MOVED_PERMANENTLY = 301
export const HTTP_STATUS_FOUND = 302
export const HTTP_STATUS_TEMPORARY_REDIRECT = 307
export const HTTP_STATUS_PERMANENT_REDIRECT = 308

export const REDIRECT_STATUSES = [
  HTTP_STATUS_MOVED_PERMANENTLY,
  HTTP_STATUS_FOUND,
  HTTP_STATUS_TEMPORARY_REDIRECT,
  HTTP_STATUS_PERMANENT_REDIRECT
]

export const SECURITY_HEADERS = {
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy':
    'camera=(), microphone=(), geolocation=(), browsing-topics=()'
}

export const REQUIRED_CSP_DIRECTIVES = [
  "default-src 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'"
]
