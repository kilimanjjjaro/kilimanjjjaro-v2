import { test, expect } from '@playwright/test'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
  HTTP_STATUS_TEMPORARY_REDIRECT,
  REDIRECT_STATUSES,
  REQUIRED_CSP_DIRECTIVES,
  SECURITY_HEADERS
} from '../constants/http'
import { MIN_IMAGE_BYTES, NO_REDIRECTS } from '../constants/e2e'

test.skip(({ browserName, isMobile }) => isMobile || browserName !== 'chromium')

test.describe('i18n middleware', () => {
  test('serves English at the root without redirecting', async ({
    request
  }) => {
    const response = await request.get('/', { maxRedirects: NO_REDIRECTS })
    expect(response.status()).toBe(HTTP_STATUS_OK)
    expect(await response.text()).toContain('<html lang="en"')
  })

  test('serves Spanish under /es once the locale cookie is set', async ({
    request
  }) => {
    const response = await request.get('/es', {
      maxRedirects: NO_REDIRECTS,
      headers: { cookie: 'Next-Locale=es' }
    })
    expect(response.status()).toBe(HTTP_STATUS_OK)
    expect(await response.text()).toContain('<html lang="es"')
  })

  test('the first visit to /es stores the locale and redirects', async ({
    request
  }) => {
    const response = await request.get('/es', { maxRedirects: NO_REDIRECTS })
    expect(response.status()).toBe(HTTP_STATUS_TEMPORARY_REDIRECT)
    expect(response.headers().location).toBe('/')
    expect(response.headers()['set-cookie']).toContain('Next-Locale=es')
  })

  test('the stored locale redirects the root to /es', async ({ request }) => {
    const response = await request.get('/', {
      maxRedirects: NO_REDIRECTS,
      headers: { cookie: 'Next-Locale=es' }
    })
    expect(response.status()).toBe(HTTP_STATUS_TEMPORARY_REDIRECT)
    expect(response.headers().location).toBe('/es')
  })

  test('redirects /en to the root', async ({ request }) => {
    const response = await request.get('/en', { maxRedirects: NO_REDIRECTS })
    expect(REDIRECT_STATUSES).toContain(response.status())
    expect(new URL(response.headers().location, 'http://x').pathname).toBe('/')
  })

  test('does not intercept API routes', async ({ request }) => {
    const response = await request.get('/api/unknown', {
      maxRedirects: NO_REDIRECTS
    })
    expect(response.status()).toBe(HTTP_STATUS_NOT_FOUND)
  })
})

test.describe('static SEO files', () => {
  test('robots.txt', async ({ request }) => {
    const response = await request.get('/robots.txt')
    expect(response.status()).toBe(HTTP_STATUS_OK)
    const body = await response.text()
    expect(body).toContain('User-Agent: *')
    expect(body).toContain('Allow: /')
    expect(body).toContain('Sitemap: https://kilimanjjjaro.com/sitemap.xml')
  })

  test('sitemap.xml', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(HTTP_STATUS_OK)
    expect(response.headers()['content-type']).toContain('xml')
    const body = await response.text()
    expect(body).toContain('<loc>https://kilimanjjjaro.com</loc>')
    for (const { slug } of FEATURED_PROJECTS.en) {
      expect(body).toContain(
        `<loc>https://kilimanjjjaro.com/es/project/${slug}</loc>`
      )
    }
    expect(body).toContain('hreflang="es"')
  })
})

test.describe('image optimization', () => {
  const IMAGE = '/_next/image?url=%2Fimages%2Fcookie.webp&w=64&q=75'

  for (const [accept, type] of [
    ['image/avif,image/webp,*/*', 'image/avif'],
    ['image/webp,*/*', 'image/webp']
  ]) {
    test(`serves ${type} when supported`, async ({ request }) => {
      const response = await request.get(IMAGE, { headers: { accept } })
      expect(response.status()).toBe(HTTP_STATUS_OK)
      expect(response.headers()['content-type']).toBe(type)
      expect((await response.body()).byteLength).toBeGreaterThan(
        MIN_IMAGE_BYTES
      )
    })
  }

  test('serves the portrait at the quality it requests', async ({
    request
  }) => {
    const response = await request.get(
      '/_next/image?url=%2Fimages%2Fportrait.webp&w=640&q=95',
      { headers: { accept: 'image/webp,*/*' } }
    )
    expect(response.status()).toBe(HTTP_STATUS_OK)
    expect(response.headers()['content-type']).toBe('image/webp')
  })

  test('rejects images from hosts that are not allowed', async ({
    request
  }) => {
    const url = encodeURIComponent('https://example.com/image.png')
    const response = await request.get(`/_next/image?url=${url}&w=64&q=75`)
    expect(response.status()).toBe(HTTP_STATUS_BAD_REQUEST)
  })
})

test.describe('security headers', () => {
  for (const path of ['/', '/es', '/project/wrkload', '/robots.txt']) {
    test(`are sent with ${path}`, async ({ request }) => {
      const response = await request.get(path)
      const headers = response.headers()

      expect(headers).toMatchObject(SECURITY_HEADERS)

      const directives = headers['content-security-policy']
        .split(';')
        .map((directive) => directive.trim())
      expect(directives).toEqual(
        expect.arrayContaining(REQUIRED_CSP_DIRECTIVES)
      )
    })
  }
})
