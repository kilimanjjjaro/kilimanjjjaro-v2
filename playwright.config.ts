import { defineConfig, devices } from '@playwright/test'

const PORT = 3100
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: process.env.CI !== undefined,
  retries: process.env.CI !== undefined ? 1 : 0,
  reporter: process.env.CI !== undefined ? [['github'], ['html', { open: 'never' }]] : 'list',
  timeout: 60_000,
  expect: { timeout: 15_000 },
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } }
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] }
    }
  ],
  webServer: {
    command: `pnpm start --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: process.env.CI === undefined,
    timeout: 120_000,
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY ?? 're_e2e_dummy_key'
    }
  }
})
