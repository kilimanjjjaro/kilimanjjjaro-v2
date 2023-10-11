/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Resend } from 'resend'
import EmailToAdmin from '@/components/email-templates/EmailToAdmin'
import EmailToUser from '@/components/email-templates/EmailToUser'

const resend = new Resend(process.env.RESEND_API_KEY)

interface BodyInterface {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  const body: BodyInterface = await request.json()
  let statusCode = 200

  try {
    const responseAdmin = await resend.emails.send({
      from: 'Kilimanjjjaro <hola@kilimanjjjaro.com>',
      to: 'delivered@resend.dev',
      subject: `New message from ${body.name}}`,
      react: EmailToAdmin(body)
    })

    await resend.emails.send({
      from: 'Kilimanjjjaro <hola@kilimanjjjaro.com>',
      to: body.email,
      subject: 'Thanks for your message!',
      react: EmailToUser(body)
    })

    // @ts-expect-error
    if (responseAdmin.statusCode && responseAdmin.statusCode !== 200) {
      // @ts-expect-error
      statusCode = response.statusCode
      throw new Error('Error sending email to admin')
    }

    return Response.json({ status: statusCode }, { status: statusCode })
  } catch (error) {
    return Response.json({ status: statusCode }, { status: statusCode })
  }
}
