import { defineConfig, devices } from '@playwright/test'
import {
  CI_RETRIES,
  DESKTOP_VIEWPORT,
  E2E_BASE_URL,
  E2E_PORT,
  EXPECT_TIMEOUT_MS,
  LOCAL_RETRIES,
  TEST_TIMEOUT_MS,
  WEB_SERVER_TIMEOUT_MS
} from './tests/constants/e2e'

const isCI = process.env.CI !== undefined

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? CI_RETRIES : LOCAL_RETRIES,
  reporter: isCI ? [['github'], ['html', { open: 'never' }]] : 'list',
  timeout: TEST_TIMEOUT_MS,
  expect: { timeout: EXPECT_TIMEOUT_MS },
  use: {
    baseURL: E2E_BASE_URL,
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: DESKTOP_VIEWPORT }
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] }
    }
  ],
  webServer: {
    command: `pnpm start --port ${E2E_PORT}`,
    url: E2E_BASE_URL,
    reuseExistingServer: !isCI,
    timeout: WEB_SERVER_TIMEOUT_MS,
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY ?? 're_e2e_dummy_key'
    }
  }
})
