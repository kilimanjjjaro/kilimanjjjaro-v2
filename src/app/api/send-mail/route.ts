import { Resend } from 'resend'
import EmailToAdmin from '@/components/email-templates/EmailToAdmin'
import { ADMIN_EMAIL } from '@/lib/constants/globals'

const resend = new Resend(process.env.RESEND_API_KEY)

interface BodyInterface {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  const body: BodyInterface = await request.json()

  try {
    const responseAdmin = await resend.emails.send({
      from: `Kilimanjjjaro <onboarding@resend.dev>`,
      to: ADMIN_EMAIL,
      subject: `New message from ${body.name}`,
      reply_to: body.email,
      react: EmailToAdmin(body)
    })

    if (responseAdmin.error === null) {
      return Response.json({ status: 200 }, { status: 200 })
    } else {
      throw new Error('Error sending email to admin')
    }
  } catch (error) {
    return Response.json({ status: 400 }, { status: 400 })
  }
}
