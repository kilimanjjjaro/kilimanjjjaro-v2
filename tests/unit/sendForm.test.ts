import { beforeEach, describe, expect, it, vi } from 'vitest'
import sendForm from '@/lib/actions/sendForm'
import { BASE_URL } from '@/lib/constants/globals'
import { FORM_DEFAULT_STATE } from '@/lib/constants/form'

const VALID = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'Hello there!'
}

function formData(values: Record<string, string>) {
  const data = new FormData()
  for (const [key, value] of Object.entries(values)) data.append(key, value)
  return data
}

describe('sendForm server action', () => {
  const fetchMock = vi.fn()

  beforeEach(() => {
    fetchMock.mockReset()
    vi.stubGlobal('fetch', fetchMock)
  })

  it('posts the validated payload to the send-mail API and reports success', async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 200 }))

    const result = await sendForm(FORM_DEFAULT_STATE, formData(VALID))

    expect(result).toEqual({ success: true, error: false })
    expect(fetchMock).toHaveBeenCalledTimes(1)

    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe(`${BASE_URL}/api/send-mail`)
    expect(init.method).toBe('POST')
    expect(init.cache).toBe('no-store')
    expect(init.headers).toMatchObject({ 'Content-Type': 'application/json' })
    expect(JSON.parse(init.body)).toEqual(VALID)
  })

  it('strips unknown fields before sending', async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 200 }))

    await sendForm(FORM_DEFAULT_STATE, formData({ ...VALID, extra: 'nope' }))

    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual(VALID)
  })

  it.each([
    ['an invalid email', { ...VALID, email: 'not-an-email' }],
    ['an empty name', { ...VALID, name: '' }],
    ['an empty message', { ...VALID, message: '' }],
    ['a missing field', { name: VALID.name, email: VALID.email }]
  ])('rejects %s without calling the API', async (_, values) => {
    const result = await sendForm(FORM_DEFAULT_STATE, formData(values))

    expect(result).toEqual({ success: false, error: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('reports an error when the API responds with a non-200 status', async () => {
    fetchMock.mockResolvedValue(new Response(null, { status: 400 }))

    const result = await sendForm(FORM_DEFAULT_STATE, formData(VALID))

    expect(result).toEqual({ success: false, error: true })
  })

  it('reports an error when the request fails', async () => {
    fetchMock.mockRejectedValue(new Error('network down'))

    const result = await sendForm(FORM_DEFAULT_STATE, formData(VALID))

    expect(result).toEqual({ success: false, error: true })
  })
})
