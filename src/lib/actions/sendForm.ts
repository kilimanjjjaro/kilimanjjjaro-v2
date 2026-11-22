'use server'

import { BASE_URL } from '@/lib/constants/globals'
import {
  CONTACT_FORM_SCHEMA,
  FORM_ERROR_STATE,
  FORM_SUCCESS_STATE
} from '@/lib/constants/form'
import { HTTP_STATUS_OK } from '@/lib/constants/http'
import type { InitialStateFormInterface } from '@/lib/types/form'

export default async function sendForm(
  _prevState: InitialStateFormInterface,
  payload: FormData
): Promise<InitialStateFormInterface> {
  try {
    const body = CONTACT_FORM_SCHEMA.parse({
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

    if (response.status === HTTP_STATUS_OK) {
      return { ...FORM_SUCCESS_STATE }
    }

    throw new Error('Something went wrong')
  } catch {
    return { ...FORM_ERROR_STATE }
  }
}
