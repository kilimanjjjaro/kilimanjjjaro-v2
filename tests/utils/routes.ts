import { vi } from 'vitest'
import { RESEND_TEST_KEY } from '../constants/unit'

export async function loadSendMailRoute() {
  vi.resetModules()
  vi.stubEnv('RESEND_API_KEY', RESEND_TEST_KEY)

  return await import('@/app/api/send-mail/route')
}
