import { z } from 'zod'

export const SINGLE_CALL = 1
export const RESEND_TEST_KEY = 're_test_key'
export const RESEND_EMAILS_ENDPOINT = 'https://api.resend.com/emails'

const ONE_OR_MORE_ADDRESSES = z.union([z.string(), z.array(z.string())])

export const RESEND_PAYLOAD_SCHEMA = z.object({
  from: z.string(),
  to: ONE_OR_MORE_ADDRESSES,
  subject: z.string(),
  reply_to: ONE_OR_MORE_ADDRESSES.optional(),
  html: z.string()
})

export const CONTACT_FORM_VALUES = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'I would like to work with you.'
}

export const HOME_SITEMAP_ENTRIES = 2
export const SITEMAP_ENTRIES_PER_PROJECT = 2
export const NEXT_INDEX_OFFSET = 1
export const BOT_WEBSITE = 'https://spam.example.com'
export const SPANISH_HOME_URL = 'http://localhost/es'
