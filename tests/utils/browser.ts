import { expect, type Page } from '@playwright/test'
import {
  APP_READY_TIMEOUT_MS,
  COMPACT_NAVBAR_MIN_SCROLL_Y,
  COMPACT_NAVBAR_SCROLL_Y,
  DEGREES_IN_HALF_TURN,
  MAX_PARTIAL_ROTATION,
  MIN_INTRO_OFFSET_PX,
  MIN_PARTIAL_ROTATION,
  MISSING_SLIDE_INDEX,
  SINGLE_ELEMENT
} from '../constants/e2e'
import {
  isScrolledPast,
  readCarouselIndex,
  readHeadlineSamples,
  readHeadlineWordMatrix,
  scrollWindowTo
} from './page-scripts'
import type { MatrixSample, WordTransform } from '../types/browser'

export function toWordTransform({ a, b, f }: MatrixSample): WordTransform {
  return {
    y: f,
    rotate: (Math.atan2(b, a) * DEGREES_IN_HALF_TURN) / Math.PI
  }
}

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

export async function readFirstHeadlineWord(page: Page) {
  return toWordTransform(await page.evaluate(readHeadlineWordMatrix))
}

export async function countPartialIntroFrames(page: Page) {
  const samples = await page.evaluate(readHeadlineSamples)

  return samples
    .map(toWordTransform)
    .filter(
      ({ y, rotate }) =>
        y > MIN_INTRO_OFFSET_PX &&
        rotate > MIN_PARTIAL_ROTATION &&
        rotate < MAX_PARTIAL_ROTATION
    ).length
}

export async function carouselIndex(page: Page) {
  return (await page.evaluate(readCarouselIndex)) ?? MISSING_SLIDE_INDEX
}
