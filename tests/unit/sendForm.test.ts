import { beforeEach, describe, expect, it, vi } from 'vitest'
import sendForm from '@/lib/actions/sendForm'
import { BASE_URL } from '@/lib/constants/globals'
import { FORM_DEFAULT_STATE } from '@/lib/constants/form'
import { HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_OK } from '@/lib/constants/http'
import { emptyResponse, readJsonBody } from '../utils/http'
import { toFormData } from '../utils/forms'
import { SINGLE_CALL } from '../constants/unit'

const VALID = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'Hello there!'
}

describe('sendForm server action', () => {
  const fetchMock = vi.fn<typeof fetch>()

  beforeEach(() => {
    fetchMock.mockReset()
    vi.stubGlobal('fetch', fetchMock)
  })

  it('posts the validated payload to the send-mail API and reports success', async () => {
    fetchMock.mockResolvedValue(emptyResponse(HTTP_STATUS_OK))

    const result = await sendForm(FORM_DEFAULT_STATE, toFormData(VALID))

    expect(result).toEqual({ success: true, error: false })
    expect(fetchMock).toHaveBeenCalledTimes(SINGLE_CALL)

    const {
      mock: {
        calls: [[url, init]]
      }
    } = fetchMock
    expect(url).toBe(`${BASE_URL}/api/send-mail`)
    expect(init?.method).toBe('POST')
    expect(init?.cache).toBe('no-store')
    expect(init?.headers).toMatchObject({ 'Content-Type': 'application/json' })
    expect(readJsonBody(init)).toEqual(VALID)
  })

  it('strips unknown fields before sending', async () => {
    fetchMock.mockResolvedValue(emptyResponse(HTTP_STATUS_OK))

    await sendForm(FORM_DEFAULT_STATE, toFormData({ ...VALID, extra: 'nope' }))

    const {
      mock: {
        calls: [[, init]]
      }
    } = fetchMock
    expect(readJsonBody(init)).toEqual(VALID)
  })

  it.each([
    ['an invalid email', { ...VALID, email: 'not-an-email' }],
    ['an empty name', { ...VALID, name: '' }],
    ['an empty message', { ...VALID, message: '' }],
    ['a missing field', { name: VALID.name, email: VALID.email }]
  ])('rejects %s without calling the API', async (_, values) => {
    const result = await sendForm(FORM_DEFAULT_STATE, toFormData(values))

    expect(result).toEqual({ success: false, error: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('reports an error when the API responds with a non-200 status', async () => {
    fetchMock.mockResolvedValue(emptyResponse(HTTP_STATUS_BAD_REQUEST))

    const result = await sendForm(FORM_DEFAULT_STATE, toFormData(VALID))

    expect(result).toEqual({ success: false, error: true })
  })

  it('reports an error when the request fails', async () => {
    fetchMock.mockRejectedValue(new Error('network down'))

    const result = await sendForm(FORM_DEFAULT_STATE, toFormData(VALID))

    expect(result).toEqual({ success: false, error: true })
  })
})
