import { test, expect } from './fixtures'
import en from '@/lib/locales/en'
import es from '@/lib/locales/es'
import updateStacks from '@/lib/utils/updateStacks'
import getCenter from '@/lib/utils/getCenter'
import { HONEYPOT_FIELD } from '@/lib/constants/form'
import {
  carouselIndex,
  countPartialIntroFrames,
  openContactForm,
  readFirstHeadlineWord,
  recordOtherProjectsSettleOrder,
  renderedWidth,
  scrollButtonState,
  scrollTo,
  showCompactNavbar,
  waitForApp
} from '../utils/browser'
import { unexpectedErrors } from '../utils/errors'
import { readCookieConsent, recordHeadlineIntro } from '../utils/page-scripts'
import {
  BANNER_SETTLE_MS,
  CAROUSEL_HOVER_RATIO,
  CAROUSEL_RIGHT_SIDE_RATIO,
  COMPACT_NAVBAR_SCROLL_Y,
  CURSOR_START_X,
  CURSOR_START_Y,
  FIRST_OTHER_PROJECT,
  FIRST_SLIDE_INDEX,
  HEADLINE_SAMPLING_MS,
  MIN_CAROUSEL_ARROW_WIDTH_PX,
  MIN_CURSOR_WIDTH_PX,
  MIN_INTRO_FRAMES,
  MIN_SCROLLED_OFFSET_PX,
  MIN_SCROLLED_ROTATION,
  MOUSE_MOVE_STEPS,
  NO_ELEMENTS,
  POLL_TIMEOUT_MS,
  QUICK_TIMEOUT_MS,
  RETRY_TIMEOUT_MS,
  SCROLL_BUTTON_SCROLL_Y,
  SECOND_OTHER_PROJECT,
  SECOND_SLIDE_INDEX,
  SETTLED_OFFSET_PX,
  VISIBLE_ELEMENT_OPACITY
} from '../constants/e2e'

test.describe('header headline', () => {
  test('words rise into place on load and move down on scroll', async ({
    page
  }) => {
    await page.addInitScript(recordHeadlineIntro, HEADLINE_SAMPLING_MS)

    await page.goto('/')
    await waitForApp(page)

    await expect
      .poll(async () => await countPartialIntroFrames(page))
      .toBeGreaterThan(MIN_INTRO_FRAMES)

    await expect
      .poll(async () => Math.round((await readFirstHeadlineWord(page)).y), {
        timeout: POLL_TIMEOUT_MS
      })
      .toBe(SETTLED_OFFSET_PX)

    await scrollTo(page, COMPACT_NAVBAR_SCROLL_Y)
    await expect
      .poll(async () => (await readFirstHeadlineWord(page)).y)
      .toBeGreaterThan(MIN_SCROLLED_OFFSET_PX)
    expect((await readFirstHeadlineWord(page)).rotate).toBeGreaterThan(
      MIN_SCROLLED_ROTATION
    )
  })
})

test.describe('custom cursor', () => {
  test.skip(({ isMobile }) => isMobile, 'The custom cursor is desktop only')

  test('follows the mouse and turns into an arrow over the carousel', async ({
    page
  }) => {
    await page.goto('/')
    await waitForApp(page)

    await page.mouse.move(CURSOR_START_X, CURSOR_START_Y)
    await expect
      .poll(async () => await renderedWidth(page, 'body > div.w-14.h-14'))
      .toBeGreaterThan(MIN_CURSOR_WIDTH_PX)

    const carousel = page.locator('.skills-carousel')
    await carousel.scrollIntoViewIfNeeded()
    const box = await carousel.boundingBox()
    if (box === null) throw new Error('carousel not visible')
    await page.mouse.move(
      box.x + box.width * CAROUSEL_HOVER_RATIO,
      box.y + getCenter(box.height),
      { steps: MOUSE_MOVE_STEPS }
    )
    await expect
      .poll(async () => await renderedWidth(page, '.skills-carousel + div svg'))
      .toBeGreaterThan(MIN_CAROUSEL_ARROW_WIDTH_PX)
  })
})

test.describe('other projects', () => {
  test.skip(({ isMobile }) => isMobile, 'Items are staggered on desktop only')

  test('items rise into place in list order', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const firstItem = page.locator('a[target="_blank"] article h4').first()
    await firstItem.scrollIntoViewIfNeeded()

    expect(await recordOtherProjectsSettleOrder(page)).toEqual([
      FIRST_OTHER_PROJECT,
      SECOND_OTHER_PROJECT
    ])
  })
})

test.describe('header scroll button', () => {
  test('fades in after the intro and hides once the user scrolls', async ({
    page
  }) => {
    await page.goto('/')
    await waitForApp(page)

    await expect
      .poll(async () => await scrollButtonState(page), {
        timeout: RETRY_TIMEOUT_MS
      })
      .toEqual({ display: 'block', opacity: VISIBLE_ELEMENT_OPACITY })

    await scrollTo(page, SCROLL_BUTTON_SCROLL_Y)
    await expect
      .poll(async () => (await scrollButtonState(page)).display, {
        timeout: POLL_TIMEOUT_MS
      })
      .toBe('none')
  })
})

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

    const honeypot = form.locator(`input[name="${HONEYPOT_FIELD}"]`)
    await expect(honeypot).toBeHidden()
    await expect(honeypot).toHaveAttribute('tabindex', '-1')

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
    await expect(form.getByText('components', { exact: true })).toBeVisible()
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
    await page.waitForLoadState('networkidle')

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
