import { describe, expect, it } from 'vitest'
import { render } from 'react-email'
import EmailToAdmin from '@/components/email-templates/EmailToAdmin'
import EmailToUser from '@/components/email-templates/EmailToUser'
import { BASE_URL } from '@/lib/constants/globals'

const PROPS = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'I would like to work with you.'
}

const KILI_WHITE = /color:\s*(#f8f8f8|rgb\(\s*248[\s,]+248[\s,]+248)/i

describe.each([
  ['EmailToAdmin', EmailToAdmin, 'Hi Gonzalo!', `${PROPS.name} sent you a message`],
  ['EmailToUser', EmailToUser, `Hi ${PROPS.name}!`, 'I will answer you as soon as possible.']
])('%s', (_, Template, greeting, preview) => {
  it('renders a complete HTML document with the form data', async () => {
    const html = await render(<Template {...PROPS} />)

    expect(html).toMatch(/^<!DOCTYPE html/i)
    expect(html).toContain(greeting)
    expect(html).toContain(preview)
    expect(html).toContain(PROPS.name)
    expect(html).toContain(PROPS.email)
    expect(html).toContain(PROPS.message)
    expect(html).toContain(`${BASE_URL}/images/email/hand.png`)
    expect(html).toContain(`${BASE_URL}/images/email/kilimanjjjaro-logo.png`)
    expect(html).toContain('href="https://kilimanjjjaro.com"')
  })

  it('inlines the Tailwind theme colors', async () => {
    const html = await render(<Template {...PROPS} />)

    expect(html).toMatch(KILI_WHITE)
    expect(html).not.toMatch(/class="[^"]*text-kili-white/)
  })

  it('escapes user provided content', async () => {
    const html = await render(
      <Template {...PROPS} message='<script>alert(1)</script>' />
    )

    expect(html).not.toContain('<script>alert(1)</script>')
    expect(html).toContain('&lt;script&gt;')
  })

  it('renders a plain text version', async () => {
    const text = await render(<Template {...PROPS} />, { plainText: true })

    expect(text).toContain(PROPS.message)
    expect(text).not.toContain('<')
  })
})
