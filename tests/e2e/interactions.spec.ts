import type { Page } from '@playwright/test'
import {
  test,
  expect,
  showCompactNavbar,
  unexpectedErrors,
  waitForApp
} from './fixtures'
import en from '@/lib/locales/en'
import es from '@/lib/locales/es'
import updateStacks from '@/lib/utils/updateStacks'

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
    await expect(menu.getByRole('link', { name: 'Introducing Me' })).toBeVisible()

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
      await expect(spanish).toBeVisible({ timeout: 2_000 })
    }).toPass({ timeout: 15_000 })
    await spanish.click()

    await expect(page).toHaveURL(/\/es$/)
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
    await expect(page).toHaveTitle(es.metadata.defaultTitle)

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })
})

test.describe('skills carousel', () => {
  const stacks = updateStacks()

  async function carouselIndex(page: Page): Promise<number> {
    return await page.evaluate(() => {
      const el = document.querySelector('.skills-carousel')
      return (el as (Element & { swiper?: { activeIndex: number } }) | null)
        ?.swiper?.activeIndex ?? -1
    })
  }

  test('moves to the selected stack', async ({ page, browserErrors }) => {
    await page.goto('/')
    await waitForApp(page)

    const selector = page.getByRole('button', {
      name: `${stacks[0].name} Skills`
    })
    await selector.scrollIntoViewIfNeeded()
    expect(await carouselIndex(page)).toBe(0)

    await selector.click()
    await page.getByRole('button', { name: `${stacks[1].name} Skills` }).click()

    await expect(
      page.getByRole('heading', { name: `${stacks[1].name} Skills` })
    ).toBeVisible()
    await expect
      .poll(async () => await carouselIndex(page))
      .toBe(stacks[1].startIndex)

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })

  test('advances when clicking on the right side', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const carousel = page.locator('.skills-carousel')
    await carousel.scrollIntoViewIfNeeded()
    expect(await carouselIndex(page)).toBe(0)

    const box = await carousel.boundingBox()
    if (box === null) throw new Error('carousel not visible')
    const width = page.viewportSize()?.width ?? box.width
    await page.mouse.move(width * 0.8, box.y + box.height / 2)
    await page.mouse.click(width * 0.8, box.y + box.height / 2)

    await expect.poll(async () => await carouselIndex(page)).toBe(1)
  })
})

test.describe('contact form', () => {
  const t = en.contactForm

  test('opens, guides through the fields and closes with the warning', async ({
    page,
    browserErrors
  }) => {
    await page.goto('/')
    await waitForApp(page)

    const openButton = page
      .locator('#introducing-me')
      .getByRole('button', { name: en.home.introducing.letsTalkButton })
    await openButton.scrollIntoViewIfNeeded()
    await openButton.click()

    const form = page.getByRole('form', { name: 'Contact form' })
    await expect(form).toBeVisible()

    const name = form.getByRole('textbox', { name: t.fields.name })
    await expect(name).toBeVisible({ timeout: 15_000 })
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
    await expect(form.getByRole('button', { name: t.sendButton[0] })).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(form.getByText(t.warningModal.headline)).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(form).toBeHidden()

    expect(unexpectedErrors(browserErrors)).toEqual([])
  })

  test('closes with the close button', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const openButton = page
      .locator('#introducing-me')
      .getByRole('button', { name: en.home.introducing.letsTalkButton })
    await openButton.scrollIntoViewIfNeeded()
    await openButton.click()

    const form = page.getByRole('form', { name: 'Contact form' })
    await expect(form).toBeVisible()
    await form.locator('header button').click()
    await expect(form).toBeHidden()
  })
})

test.describe('cookies consent', () => {
  const t = en.cookiesConsent

  test('is shown on the first visit and remembers acceptance', async ({
    page
  }) => {
    await page.goto('/')
    await waitForApp(page)

    const banner = page.getByRole('alert').filter({ hasText: t.headline })
    await expect(banner).toBeAttached()

    await banner.getByRole('button', { name: t.acceptButton }).dispatchEvent('click')
    await expect(banner).toHaveCount(0)
    expect(
      await page.evaluate(() => localStorage.getItem('__COOKIES_CONSENT__'))
    ).toBe('1')

    await page.reload()
    await waitForApp(page)
    await page.waitForTimeout(1_000)
    await expect(page.getByRole('alert').filter({ hasText: t.headline })).toHaveCount(0)
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
    await expect(banner).toHaveCount(0)

    expect(
      await page.evaluate(() => localStorage.getItem('__COOKIES_CONSENT__'))
    ).toBe('0')
    expect(await locale()).toBeUndefined()
  })
})
