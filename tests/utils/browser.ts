import { expect, type Page } from '@playwright/test'
import {
  APP_READY_TIMEOUT_MS,
  COMPACT_NAVBAR_MIN_SCROLL_Y,
  COMPACT_NAVBAR_SCROLL_Y,
  COMPARED_OTHER_PROJECTS,
  CURSOR_REST_COLOR,
  CURSOR_SELECTOR,
  DEGREES_IN_HALF_TURN,
  MAX_PARTIAL_ROTATION,
  MIN_INTRO_OFFSET_PX,
  MIN_PARTIAL_ROTATION,
  MISSING_ELEMENT_OPACITY,
  MISSING_ELEMENT_WIDTH,
  MISSING_SLIDE_INDEX,
  MOUSE_MOVE_STEPS,
  OTHER_PROJECTS_SETTLE_TIMEOUT_MS,
  SETTLED_TOLERANCE_PX,
  SINGLE_ELEMENT
} from '../constants/e2e'
import {
  isScrolledPast,
  readCarouselIndex,
  readElementWidth,
  readHeadlineSamples,
  readHeadlineWordMatrix,
  readScrollButtonState,
  readSettledOtherProjects,
  scrollWindowTo,
  trackSettledOtherProjects
} from './page-scripts'
import type {
  ElementVisibility,
  MatrixSample,
  WordTransform
} from '../types/browser'

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

export async function renderedWidth(page: Page, selector: string) {
  return (
    (await page.evaluate(readElementWidth, selector)) ?? MISSING_ELEMENT_WIDTH
  )
}

export async function carouselIndex(page: Page) {
  return (await page.evaluate(readCarouselIndex)) ?? MISSING_SLIDE_INDEX
}

export async function scrollButtonState(
  page: Page
): Promise<ElementVisibility> {
  return (
    (await page.evaluate(readScrollButtonState)) ?? {
      display: 'missing',
      opacity: MISSING_ELEMENT_OPACITY
    }
  )
}

export async function recordOtherProjectsSettleOrder(page: Page) {
  await page.waitForFunction(
    trackSettledOtherProjects,
    { count: COMPARED_OTHER_PROJECTS, tolerance: SETTLED_TOLERANCE_PX },
    { polling: 'raf', timeout: OTHER_PROJECTS_SETTLE_TIMEOUT_MS }
  )

  return await page.evaluate(readSettledOtherProjects)
}

export async function expectCursorAtRest(page: Page, x: number, y: number) {
  await page.mouse.move(x, y, { steps: MOUSE_MOVE_STEPS })
  await expect(page.locator(CURSOR_SELECTOR)).toHaveCSS(
    'border-top-color',
    CURSOR_REST_COLOR
  )
}
