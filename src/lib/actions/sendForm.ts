'use server'

import { z } from 'zod'
import { BASE_URL } from '@/lib/constants/general'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
})

export default async function sendForm(prevState: any, payload: any) {
  console.log('server-action-payload', payload)

  try {
    const body = schema.parse({
      name: payload.get('name'),
      email: payload.get('email'),
      message: payload.get('message')
    })

    const response = await fetch(`${BASE_URL}/api/send-mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      cache: 'no-store'
    })

    console.log('server-action-response', response)

    if (response.status === 200) {
      return { success: true, error: false }
    } else {
      throw new Error('Something went wrong')
    }
  } catch (err) {
    return { success: false, error: true }
  }
}
