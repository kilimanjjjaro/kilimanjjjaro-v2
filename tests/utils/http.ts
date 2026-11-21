import { HTTP_STATUS_OK } from '@/lib/constants/http'

export function jsonResponse(body: unknown, status = HTTP_STATUS_OK) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  })
}

export function emptyResponse(status: number) {
  return new Response(null, { status })
}

export function jsonRequest(url: string, body: unknown) {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
}

export function readJsonBody(init?: RequestInit): unknown {
  if (typeof init?.body !== 'string') return null

  const parsed: unknown = JSON.parse(init.body)

  return parsed
}
