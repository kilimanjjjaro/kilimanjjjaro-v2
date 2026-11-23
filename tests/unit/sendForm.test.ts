import { beforeEach, describe, expect, it, vi } from 'vitest'
import sendForm from '@/lib/actions/sendForm'
import { ADMIN_EMAIL } from '@/lib/constants/globals'
import { FORM_DEFAULT_STATE } from '@/lib/constants/form'
import { HTTP_STATUS_UNPROCESSABLE_ENTITY } from '../constants/http'
import { jsonResponse, readJsonBody } from '../utils/http'
import { toFormData } from '../utils/forms'
import {
  CONTACT_FORM_VALUES,
  RESEND_EMAILS_ENDPOINT,
  RESEND_PAYLOAD_SCHEMA,
  RESEND_TEST_KEY,
  SINGLE_CALL
} from '../constants/unit'

describe('sendForm server action', () => {
  const fetchMock = vi.fn<typeof fetch>()

  beforeEach(() => {
    fetchMock.mockReset()
    vi.stubGlobal('fetch', fetchMock)
    vi.stubEnv('RESEND_API_KEY', RESEND_TEST_KEY)
  })

  it('sends the admin email through Resend and reports success', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ id: 'email_123' }))

    const result = await sendForm(
      FORM_DEFAULT_STATE,
      toFormData(CONTACT_FORM_VALUES)
    )

    expect(result).toEqual({ success: true, error: false })
    expect(fetchMock).toHaveBeenCalledTimes(SINGLE_CALL)

    const {
      mock: {
        calls: [[url, init]]
      }
    } = fetchMock
    expect(url).toBe(RESEND_EMAILS_ENDPOINT)
    expect(init?.method).toBe('POST')

    const headers = new Headers(init?.headers)
    expect(headers.get('authorization')).toBe(`Bearer ${RESEND_TEST_KEY}`)

    const payload = RESEND_PAYLOAD_SCHEMA.parse(readJsonBody(init))
    expect(payload.from).toBe('Kilimanjjjaro <onboarding@resend.dev>')
    expect([payload.to].flat()).toEqual([ADMIN_EMAIL])
    expect(payload.subject).toBe(`New message from ${CONTACT_FORM_VALUES.name}`)
    expect([payload.reply_to].flat()).toEqual([CONTACT_FORM_VALUES.email])
    expect(payload.html).toContain(CONTACT_FORM_VALUES.name)
    expect(payload.html).toContain(CONTACT_FORM_VALUES.email)
    expect(payload.html).toContain(CONTACT_FORM_VALUES.message)
  })

  it('leaves unknown fields out of the email', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ id: 'email_123' }))

    await sendForm(
      FORM_DEFAULT_STATE,
      toFormData({ ...CONTACT_FORM_VALUES, extra: 'unexpected field' })
    )

    const {
      mock: {
        calls: [[, init]]
      }
    } = fetchMock
    const payload = RESEND_PAYLOAD_SCHEMA.parse(readJsonBody(init))
    expect(payload.html).not.toContain('unexpected field')
  })

  it.each([
    ['an invalid email', { ...CONTACT_FORM_VALUES, email: 'not-an-email' }],
    ['an empty name', { ...CONTACT_FORM_VALUES, name: '' }],
    ['an empty message', { ...CONTACT_FORM_VALUES, message: '' }],
    [
      'a missing field',
      { name: CONTACT_FORM_VALUES.name, email: CONTACT_FORM_VALUES.email }
    ]
  ])('rejects %s without calling Resend', async (_, values) => {
    const result = await sendForm(FORM_DEFAULT_STATE, toFormData(values))

    expect(result).toEqual({ success: false, error: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('reports an error when Resend returns an error', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse(
        {
          statusCode: HTTP_STATUS_UNPROCESSABLE_ENTITY,
          name: 'validation_error',
          message: 'Invalid `to` field'
        },
        HTTP_STATUS_UNPROCESSABLE_ENTITY
      )
    )

    const result = await sendForm(
      FORM_DEFAULT_STATE,
      toFormData(CONTACT_FORM_VALUES)
    )

    expect(result).toEqual({ success: false, error: true })
  })

  it('reports an error when the request to Resend fails', async () => {
    fetchMock.mockRejectedValue(new Error('network down'))

    const result = await sendForm(
      FORM_DEFAULT_STATE,
      toFormData(CONTACT_FORM_VALUES)
    )

    expect(result).toEqual({ success: false, error: true })
  })

  it('reports an error without calling Resend when the API key is missing', async () => {
    vi.stubEnv('RESEND_API_KEY', '')

    const result = await sendForm(
      FORM_DEFAULT_STATE,
      toFormData(CONTACT_FORM_VALUES)
    )

    expect(result).toEqual({ success: false, error: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
