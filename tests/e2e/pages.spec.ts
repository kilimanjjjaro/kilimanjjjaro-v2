import { test, expect } from './fixtures'
import { waitForApp } from '../utils/browser'
import { unexpectedErrors } from '../utils/errors'
import { HYDRATION_WAIT_MS } from '../constants/e2e'
import { HTTP_STATUS_OK } from '@/lib/constants/http'
import en from '@/lib/locales/en'
import es from '@/lib/locales/es'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'

const LOCALES = { en, es }

const PAGES = [
  { path: '/', locale: 'en', title: en.metadata.defaultTitle },
  { path: '/es', locale: 'es', title: es.metadata.defaultTitle },
  ...FEATURED_PROJECTS.en.flatMap((project) => [
    {
      path: `/project/${project.slug}`,
      locale: 'en',
      title: `${project.name} — Kilimanjjjaro`
    },
    {
      path: `/es/project/${project.slug}`,
      locale: 'es',
      title: `${project.name} — Kilimanjjjaro`
    }
  ])
] as const

test.describe('every page renders without errors', () => {
  for (const { path, locale, title } of PAGES) {
    test(path, async ({ page, browserErrors }) => {
      const response = await page.goto(path)

      expect(response?.status()).toBe(HTTP_STATUS_OK)
      await waitForApp(page)
      await expect(page.locator('html')).toHaveAttribute('lang', locale)
      await expect(page).toHaveTitle(title)

      await page.waitForTimeout(HYDRATION_WAIT_MS)
      expect(unexpectedErrors(browserErrors)).toEqual([])
    })
  }
})

test.describe('project pages', () => {
  for (const locale of ['en', 'es'] as const) {
    const { [locale]: projects } = FEATURED_PROJECTS
    const [project] = projects
    const prefix = locale === 'en' ? '' : '/es'

    test(`show the project content (${locale})`, async ({ page }) => {
      await page.goto(`${prefix}/project/${project.slug}`)

      await expect(
        page.getByRole('heading', { name: project.name }).first()
      ).toBeVisible()
      await expect(page.getByText(project.headerDescription)).toBeVisible()
      await expect(
        page.locator(`a[href="${project.link}"]`).first()
      ).toBeAttached()
    })

    test(`show a not found message for unknown slugs (${locale})`, async ({
      page
    }) => {
      await page.goto(`${prefix}/project/this-project-does-not-exist`)

      await expect(
        page
          .getByRole('main')
          .getByText(LOCALES[locale].project.notFoundMessage)
      ).toBeVisible()
      await expect(page).toHaveTitle(
        `${LOCALES[locale].project.notFoundMessage} — Kilimanjjjaro`
      )
    })
  }
})

test.describe('metadata', () => {
  const HOME_METADATA = [
    {
      path: '/',
      locale: 'en',
      canonical: 'https://kilimanjjjaro.com',
      alternates: {
        en: 'https://kilimanjjjaro.com',
        es: 'https://kilimanjjjaro.com/es'
      }
    },
    {
      path: '/es',
      locale: 'es',
      canonical: 'https://kilimanjjjaro.com/es/',
      alternates: {
        en: 'https://kilimanjjjaro.com/es/',
        es: 'https://kilimanjjjaro.com/es/es'
      }
    }
  ] as const

  for (const { path, locale, canonical, alternates } of HOME_METADATA) {
    test(`home declares canonical, alternates and Open Graph data (${locale})`, async ({
      page
    }) => {
      await page.goto(path)

      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        'content',
        LOCALES[locale].metadata.description
      )
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        canonical
      )
      await Promise.all(
        Object.entries(alternates).map(async ([lang, href]) => {
          await expect(
            page.locator(`link[rel="alternate"][hreflang="${lang}"]`)
          ).toHaveAttribute('href', href)
        })
      )
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        'content',
        locale
      )
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        'https://kilimanjjjaro.com/images/og-image.jpg'
      )
    })
  }

  test('project pages declare their own Open Graph image', async ({ page }) => {
    const {
      en: [project]
    } = FEATURED_PROJECTS
    await page.goto(`/project/${project.slug}`)

    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      `https://kilimanjjjaro.com/images/projects/${project.slug}/og-image.jpg`
    )
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      project.headerDescription
    )
  })
})
