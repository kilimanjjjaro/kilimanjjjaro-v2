import { test, expect } from '@playwright/test'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'

test.skip(({ browserName, isMobile }) => isMobile || browserName !== 'chromium')

test.describe('i18n middleware', () => {
  test('serves English at the root without redirecting', async ({ request }) => {
    const response = await request.get('/', { maxRedirects: 0 })
    expect(response.status()).toBe(200)
    expect(await response.text()).toContain('<html lang="en"')
  })

  test('serves Spanish under /es once the locale cookie is set', async ({
    request
  }) => {
    const response = await request.get('/es', {
      maxRedirects: 0,
      headers: { cookie: 'Next-Locale=es' }
    })
    expect(response.status()).toBe(200)
    expect(await response.text()).toContain('<html lang="es"')
  })

  test('the first visit to /es stores the locale and redirects', async ({
    request
  }) => {
    const response = await request.get('/es', { maxRedirects: 0 })
    expect(response.status()).toBe(307)
    expect(response.headers().location).toBe('/')
    expect(response.headers()['set-cookie']).toContain('Next-Locale=es')
  })

  test('the stored locale redirects the root to /es', async ({ request }) => {
    const response = await request.get('/', {
      maxRedirects: 0,
      headers: { cookie: 'Next-Locale=es' }
    })
    expect(response.status()).toBe(307)
    expect(response.headers().location).toBe('/es')
  })

  test('redirects /en to the root', async ({ request }) => {
    const response = await request.get('/en', { maxRedirects: 0 })
    expect([301, 302, 307, 308]).toContain(response.status())
    expect(new URL(response.headers().location, 'http://x').pathname).toBe('/')
  })

  test('does not intercept API routes', async ({ request }) => {
    const response = await request.get('/api/send-mail', { maxRedirects: 0 })
    expect(response.status()).toBe(405)
  })
})

test.describe('static SEO files', () => {
  test('robots.txt', async ({ request }) => {
    const response = await request.get('/robots.txt')
    expect(response.status()).toBe(200)
    const body = await response.text()
    expect(body).toContain('User-Agent: *')
    expect(body).toContain('Allow: /')
    expect(body).toContain('Sitemap: https://kilimanjjjaro.com/sitemap.xml')
  })

  test('sitemap.xml', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('xml')
    const body = await response.text()
    expect(body).toContain('<loc>https://kilimanjjjaro.com</loc>')
    for (const { slug } of FEATURED_PROJECTS.en) {
      expect(body).toContain(`<loc>https://kilimanjjjaro.com/es/project/${slug}</loc>`)
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
      expect(response.status()).toBe(200)
      expect(response.headers()['content-type']).toBe(type)
      expect((await response.body()).byteLength).toBeGreaterThan(100)
    })
  }

  test('rejects images from hosts that are not allowed', async ({ request }) => {
    const url = encodeURIComponent('https://example.com/image.png')
    const response = await request.get(`/_next/image?url=${url}&w=64&q=75`)
    expect(response.status()).toBe(400)
  })
})
