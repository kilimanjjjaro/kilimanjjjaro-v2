import { HTTP_STATUS_OK } from '../constants/http'

export function jsonResponse(body: unknown, status = HTTP_STATUS_OK) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  })
}

export function readJsonBody(init?: RequestInit): unknown {
  if (typeof init?.body !== 'string') return null

  const parsed: unknown = JSON.parse(init.body)

  return parsed
}
