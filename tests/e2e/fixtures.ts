import { test as base, expect } from '@playwright/test'
import type { BrowserError } from '../types/browser'

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

export { expect }
