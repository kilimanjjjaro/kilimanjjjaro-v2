import { test as base, expect, type Page } from '@playwright/test'

interface BrowserError {
  text: string
  url: string
}

const IGNORED_ERRORS: Array<(error: BrowserError) => boolean> = [
  (error) => error.url.includes('/_vercel/insights/')
]

export const test = base.extend<{ browserErrors: BrowserError[] }>({
  browserErrors: [
    async ({ page }, use) => {
      const errors: BrowserError[] = []

      page.on('console', (message) => {
        if (message.type() !== 'error') return
        errors.push({ text: message.text(), url: message.location().url })
      })

      page.on('pageerror', (error) => {
        errors.push({ text: `Uncaught: ${error.message}`, url: '' })
      })

      await use(errors)
    },
    { auto: true }
  ]
})

export function unexpectedErrors(errors: BrowserError[]) {
  return errors
    .filter((error) => !IGNORED_ERRORS.some((ignore) => ignore(error)))
    .map((error) => `${error.text} ${error.url}`.trim())
}

export async function waitForApp(page: Page) {
  await page.waitForLoadState('load')
  await expect(page.locator('body > header, header.fixed').first()).toBeVisible({
    timeout: 20_000
  })
}

export async function showCompactNavbar(page: Page) {
  await page.evaluate(() => window.scrollTo(0, 400))
  await page.waitForFunction(() => window.scrollY >= 50)
  await expect(
    page.getByRole('button', { name: 'Toggle navigation menu' })
  ).toHaveCount(1)
}

export { expect }
