import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ADMIN_EMAIL } from '@/lib/constants/globals'
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_OK,
  HTTP_STATUS_UNPROCESSABLE_ENTITY
} from '@/lib/constants/http'
import { jsonRequest, jsonResponse, readJsonBody } from '../utils/http'
import { loadSendMailRoute } from '../utils/routes'
import {
  CONTACT_FORM_VALUES,
  RESEND_EMAILS_ENDPOINT,
  RESEND_PAYLOAD_SCHEMA,
  RESEND_TEST_KEY,
  SINGLE_CALL
} from '../constants/unit'

const SEND_MAIL_URL = 'http://localhost/api/send-mail'

describe('POST /api/send-mail', () => {
  const fetchMock = vi.fn<typeof fetch>()

  beforeEach(() => {
    fetchMock.mockReset()
    vi.stubGlobal('fetch', fetchMock)
  })

  it('sends the admin email through Resend and responds 200', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ id: 'email_123' }))
    const { POST } = await loadSendMailRoute()

    const response = await POST(jsonRequest(SEND_MAIL_URL, CONTACT_FORM_VALUES))

    expect(response.status).toBe(HTTP_STATUS_OK)
    expect(await response.json()).toEqual({ status: HTTP_STATUS_OK })
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

  it('responds 400 when Resend returns an error', async () => {
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
    const { POST } = await loadSendMailRoute()

    const response = await POST(jsonRequest(SEND_MAIL_URL, CONTACT_FORM_VALUES))

    expect(response.status).toBe(HTTP_STATUS_BAD_REQUEST)
    expect(await response.json()).toEqual({ status: HTTP_STATUS_BAD_REQUEST })
  })

  it('responds 400 when the request to Resend fails', async () => {
    fetchMock.mockRejectedValue(new Error('network down'))
    const { POST } = await loadSendMailRoute()

    const response = await POST(jsonRequest(SEND_MAIL_URL, CONTACT_FORM_VALUES))

    expect(response.status).toBe(HTTP_STATUS_BAD_REQUEST)
  })

  it('responds 400 without calling Resend when the body is invalid', async () => {
    const { POST } = await loadSendMailRoute()

    const response = await POST(
      jsonRequest(SEND_MAIL_URL, { ...CONTACT_FORM_VALUES, email: 'nope' })
    )

    expect(response.status).toBe(HTTP_STATUS_BAD_REQUEST)
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
