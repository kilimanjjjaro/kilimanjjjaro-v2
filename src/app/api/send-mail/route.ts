import { Resend } from 'resend'
import EmailToAdmin from '@/components/email-templates/EmailToAdmin'
import { ADMIN_EMAIL } from '@/lib/constants/globals'
import { CONTACT_FORM_SCHEMA } from '@/lib/constants/form'
import { HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_OK } from '@/lib/constants/http'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const json: unknown = await request.json()

  try {
    const body = CONTACT_FORM_SCHEMA.parse(json)

    const responseAdmin = await resend.emails.send({
      from: `Kilimanjjjaro <onboarding@resend.dev>`,
      to: ADMIN_EMAIL,
      subject: `New message from ${body.name}`,
      replyTo: body.email,
      react: EmailToAdmin(body)
    })

    if (responseAdmin.error === null) {
      return Response.json(
        { status: HTTP_STATUS_OK },
        { status: HTTP_STATUS_OK }
      )
    }

    throw new Error('Error sending email to admin')
  } catch {
    return Response.json(
      { status: HTTP_STATUS_BAD_REQUEST },
      { status: HTTP_STATUS_BAD_REQUEST }
    )
  }
}
