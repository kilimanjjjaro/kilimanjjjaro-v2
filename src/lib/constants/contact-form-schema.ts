import { z } from 'zod'

const MIN_FIELD_LENGTH = 1

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(MIN_FIELD_LENGTH),
  email: z.email(),
  message: z.string().min(MIN_FIELD_LENGTH)
})
