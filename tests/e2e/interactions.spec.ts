import { test, expect } from './fixtures'
import en from '@/lib/locales/en'
import es from '@/lib/locales/es'
import updateStacks from '@/lib/utils/updateStacks'
import getCenter from '@/lib/utils/getCenter'
import {
  carouselIndex,
  openContactForm,
  showCompactNavbar,
  waitForApp
} from '../utils/browser'
import { unexpectedErrors } from '../utils/errors'
import { readCookieConsent } from '../utils/page-scripts'
import {
  BANNER_SETTLE_MS,
  CAROUSEL_RIGHT_SIDE_RATIO,
  FIRST_SLIDE_INDEX,
  NO_ELEMENTS,
  QUICK_TIMEOUT_MS,
  RETRY_TIMEOUT_MS,
  SECOND_SLIDE_INDEX
} from '../constants/e2e'

test.describe('navigation menu', () => {
  test('opens and closes with the menu button and Escape', async ({
    page,
    browserErrors
  }) => {
    await page.goto('/')
    await waitForApp(page)
    await showCompactNavbar(page)

    const toggle = page.getByRole('button', { name: 'Toggle navigation menu' })
    await expect(toggle).toBeEnabled()
    await toggle.click()

    const menu = page.locator('nav.fixed')
    await expect(menu).toBeVisible()
    await expect(menu.getByRole('link', { name: 'GitHub' })).toBeVisible()
    await expect(
      menu.getByRole('link', { name: 'Introducing Me' })
    ).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(menu).toBeHidden()

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })
})

test.describe('language selector', () => {
  test('switches from English to Spanish', async ({ page, browserErrors }) => {
    await page.goto('/')
    await waitForApp(page)
    await showCompactNavbar(page)

    const current = page.getByRole('button', { name: 'English', exact: true })
    const spanish = page.getByRole('button', { name: 'Spanish', exact: true })

    await expect(async () => {
      if (!(await spanish.isVisible())) await current.click()
      await expect(spanish).toBeVisible({ timeout: QUICK_TIMEOUT_MS })
    }).toPass({ timeout: RETRY_TIMEOUT_MS })
    await spanish.click()

    await expect(page).toHaveURL(/\/es$/v)
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
    await expect(page).toHaveTitle(es.metadata.defaultTitle)

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })
})

test.describe('skills carousel', () => {
  const [firstStack, secondStack] = updateStacks()

  test('moves to the selected stack', async ({ page, browserErrors }) => {
    await page.goto('/')
    await waitForApp(page)

    const selector = page.getByRole('button', {
      name: `${firstStack.name} Skills`
    })
    await selector.scrollIntoViewIfNeeded()
    expect(await carouselIndex(page)).toBe(FIRST_SLIDE_INDEX)

    await selector.click()
    await page
      .getByRole('button', { name: `${secondStack.name} Skills` })
      .click()

    await expect(
      page.getByRole('heading', { name: `${secondStack.name} Skills` })
    ).toBeVisible()
    await expect
      .poll(async () => await carouselIndex(page))
      .toBe(secondStack.startIndex)

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })

  test('advances when clicking on the right side', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const carousel = page.locator('.skills-carousel')
    await carousel.scrollIntoViewIfNeeded()
    expect(await carouselIndex(page)).toBe(FIRST_SLIDE_INDEX)

    const box = await carousel.boundingBox()
    if (box === null) throw new Error('carousel not visible')
    const width = page.viewportSize()?.width ?? box.width
    const x = width * CAROUSEL_RIGHT_SIDE_RATIO
    const y = box.y + getCenter(box.height)
    await page.mouse.move(x, y)
    await page.mouse.click(x, y)

    await expect
      .poll(async () => await carouselIndex(page))
      .toBe(SECOND_SLIDE_INDEX)
  })
})

test.describe('contact form', () => {
  const {
    contactForm: t,
    home: { introducing }
  } = en
  const {
    sendButton: [sendLabel]
  } = t

  test('opens, guides through the fields and closes with the warning', async ({
    page,
    browserErrors
  }) => {
    await page.goto('/')
    await waitForApp(page)

    const form = await openContactForm(page, introducing.letsTalkButton)
    await expect(form).toBeVisible()

    const name = form.getByRole('textbox', { name: t.fields.name })
    await expect(name).toBeVisible({ timeout: RETRY_TIMEOUT_MS })
    await expect(name).toBeFocused()
    await expect(form.getByText(t.welcomeMessage)).toBeVisible()

    await name.fill('Ada Lovelace')
    await name.press('Enter')
    const email = form.getByRole('textbox', { name: t.fields.email })
    await expect(email).toBeFocused()

    await email.fill('ada@example.com')
    await email.press('Enter')
    const message = form.getByRole('textbox', { name: t.fields.message })
    await expect(message).toBeFocused()

    await message.fill('Hello!')
    await expect(form.getByText(t.suggestionMessage)).toBeVisible()
    await expect(form.getByRole('button', { name: sendLabel })).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(form.getByText(t.warningModal.headline)).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(form).toBeHidden()

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })

  test('closes with the close button', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const form = await openContactForm(page, introducing.letsTalkButton)
    await expect(form).toBeVisible()
    await form.locator('header button').click()
    await expect(form).toBeHidden()
  })
})

test.describe('cookies consent', () => {
  const { cookiesConsent: t } = en

  test('is shown on the first visit and remembers acceptance', async ({
    page
  }) => {
    await page.goto('/')
    await waitForApp(page)

    const banner = page.getByRole('alert').filter({ hasText: t.headline })
    await expect(banner).toBeAttached()

    await banner
      .getByRole('button', { name: t.acceptButton })
      .dispatchEvent('click')
    await expect(banner).toHaveCount(NO_ELEMENTS)
    expect(await page.evaluate(readCookieConsent)).toBe('1')

    await page.reload()
    await waitForApp(page)
    await page.waitForTimeout(BANNER_SETTLE_MS)
    await expect(
      page.getByRole('alert').filter({ hasText: t.headline })
    ).toHaveCount(NO_ELEMENTS)
  })

  test('declining removes the locale cookie', async ({ page, context }) => {
    await page.goto('/es')
    await waitForApp(page)

    const locale = async () =>
      (await context.cookies()).find((cookie) => cookie.name === 'Next-Locale')
    expect(await locale()).toBeDefined()

    const banner = page
      .getByRole('alert')
      .filter({ hasText: es.cookiesConsent.headline })
    await expect(banner).toBeAttached()
    await banner
      .getByRole('button', { name: 'Close cookies consent' })
      .dispatchEvent('click')
    await expect(banner).toHaveCount(NO_ELEMENTS)

    expect(await page.evaluate(readCookieConsent)).toBe('0')
    expect(await locale()).toBeUndefined()
  })
})
