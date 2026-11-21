import { expect, type Page } from '@playwright/test'
import {
  APP_READY_TIMEOUT_MS,
  COMPACT_NAVBAR_MIN_SCROLL_Y,
  COMPACT_NAVBAR_SCROLL_Y,
  MISSING_SLIDE_INDEX,
  SINGLE_ELEMENT
} from '../constants/e2e'
import {
  isScrolledPast,
  readCarouselIndex,
  scrollWindowTo
} from './page-scripts'

export async function waitForApp(page: Page) {
  await page.waitForLoadState('load')
  await expect(page.locator('body > header, header.fixed').first()).toBeVisible(
    {
      timeout: APP_READY_TIMEOUT_MS
    }
  )
}

export async function scrollTo(page: Page, top: number) {
  await page.evaluate(scrollWindowTo, top)
}

export async function showCompactNavbar(page: Page) {
  await scrollTo(page, COMPACT_NAVBAR_SCROLL_Y)
  await page.waitForFunction(isScrolledPast, COMPACT_NAVBAR_MIN_SCROLL_Y)
  await expect(
    page.getByRole('button', { name: 'Toggle navigation menu' })
  ).toHaveCount(SINGLE_ELEMENT)
}

export async function openContactForm(page: Page, buttonName: string) {
  const openButton = page
    .locator('#introducing-me')
    .getByRole('button', { name: buttonName })
  await openButton.scrollIntoViewIfNeeded()
  await openButton.click()

  return page.getByRole('form', { name: 'Contact form' })
}

export async function carouselIndex(page: Page) {
  return (await page.evaluate(readCarouselIndex)) ?? MISSING_SLIDE_INDEX
}
