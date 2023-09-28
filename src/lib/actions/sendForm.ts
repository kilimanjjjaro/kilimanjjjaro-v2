'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty()
})

export default async function sendForm(prevState: any, payload: any) {
  async function delay(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  await delay()

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = schema.parse({
      name: payload.get('name'),
      email: payload.get('email'),
      message: payload.get('message')
    })

    const status: number = 200

    if (status === 200) {
      return { success: true, error: false }
    } else {
      throw new Error('Something went wrong')
    }
  } catch (err) {
    return { success: false, error: true }
  }
}
