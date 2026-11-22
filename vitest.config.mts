import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const COMPONENT_TESTS = 'tests/unit/components/**/*.test.tsx'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    projects: [
      {
        extends: true,
        test: {
          name: 'node',
          environment: 'node',
          include: ['tests/unit/**/*.test.{ts,tsx}'],
          exclude: [COMPONENT_TESTS]
        }
      },
      {
        extends: true,
        test: {
          name: 'components',
          environment: 'jsdom',
          include: [COMPONENT_TESTS]
        }
      }
    ]
  }
})
