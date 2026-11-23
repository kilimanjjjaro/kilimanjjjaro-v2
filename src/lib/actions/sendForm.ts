'use server'

import { Resend } from 'resend'
import EmailToAdmin from '@/components/email-templates/EmailToAdmin'
import { ADMIN_EMAIL } from '@/lib/constants/globals'
import { CONTACT_FORM_SCHEMA } from '@/lib/constants/contact-form-schema'
import {
  FORM_ERROR_STATE,
  FORM_SUCCESS_STATE,
  HONEYPOT_FIELD
} from '@/lib/constants/form'
import type { InitialStateFormInterface } from '@/lib/types/form'

export default async function sendForm(
  _prevState: InitialStateFormInterface,
  payload: FormData
): Promise<InitialStateFormInterface> {
  try {
    const honeypot = payload.get(HONEYPOT_FIELD)

    if (honeypot !== null && honeypot !== '') {
      return { ...FORM_SUCCESS_STATE }
    }

    const body = CONTACT_FORM_SCHEMA.parse({
      name: payload.get('name'),
      email: payload.get('email'),
      message: payload.get('message')
    })

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Kilimanjjjaro <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject: `New message from ${body.name}`,
      replyTo: body.email,
      react: EmailToAdmin(body)
    })

    if (error === null) {
      return { ...FORM_SUCCESS_STATE }
    }

    throw new Error('Error sending email to admin')
  } catch {
    return { ...FORM_ERROR_STATE }
  }
}
