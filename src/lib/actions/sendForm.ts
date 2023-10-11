'use server'

import { z } from 'zod'
import { BASE_URL } from '@/lib/constants/general'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
})

export default async function sendForm(prevState: any, payload: any) {
  try {
    const body = schema.parse({
      name: payload.get('name'),
      email: payload.get('email'),
      message: payload.get('message')
    })

    console.log(BASE_URL)

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      cache: 'no-store'
    })

    if (response.status === 200) {
      return { success: true, error: false }
    } else {
      throw new Error('Something went wrong')
    }
  } catch (err) {
    return { success: false, error: true }
  }
}
