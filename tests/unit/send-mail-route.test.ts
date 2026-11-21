import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ADMIN_EMAIL } from '@/lib/constants/globals'

const BODY = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'I would like to work with you.'
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  })
}

function request(body: unknown) {
  return new Request('http://localhost/api/send-mail', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
}

async function loadRoute() {
  vi.resetModules()
  vi.stubEnv('RESEND_API_KEY', 're_test_key')
  return await import('@/app/api/send-mail/route')
}

describe('POST /api/send-mail', () => {
  const fetchMock = vi.fn()

  beforeEach(() => {
    fetchMock.mockReset()
    vi.stubGlobal('fetch', fetchMock)
  })

  it('sends the admin email through Resend and responds 200', async () => {
    fetchMock.mockResolvedValue(jsonResponse({ id: 'email_123' }))
    const { POST } = await loadRoute()

    const response = await POST(request(BODY))

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ status: 200 })
    expect(fetchMock).toHaveBeenCalledTimes(1)

    const [url, init] = fetchMock.mock.calls[0]
    expect(String(url)).toBe('https://api.resend.com/emails')
    expect(init.method).toBe('POST')

    const headers = new Headers(init.headers)
    expect(headers.get('authorization')).toBe('Bearer re_test_key')

    const payload = JSON.parse(init.body)
    expect(payload.from).toBe('Kilimanjjjaro <onboarding@resend.dev>')
    expect([payload.to].flat()).toEqual([ADMIN_EMAIL])
    expect(payload.subject).toBe(`New message from ${BODY.name}`)
    expect([payload.reply_to].flat()).toEqual([BODY.email])
    expect(payload.html).toContain(BODY.name)
    expect(payload.html).toContain(BODY.email)
    expect(payload.html).toContain(BODY.message)
  })

  it('responds 400 when Resend returns an error', async () => {
    fetchMock.mockResolvedValue(
      jsonResponse(
        { statusCode: 422, name: 'validation_error', message: 'Invalid `to` field' },
        422
      )
    )
    const { POST } = await loadRoute()

    const response = await POST(request(BODY))

    expect(response.status).toBe(400)
    expect(await response.json()).toEqual({ status: 400 })
  })

  it('responds 400 when the request to Resend fails', async () => {
    fetchMock.mockRejectedValue(new Error('network down'))
    const { POST } = await loadRoute()

    const response = await POST(request(BODY))

    expect(response.status).toBe(400)
  })
})
