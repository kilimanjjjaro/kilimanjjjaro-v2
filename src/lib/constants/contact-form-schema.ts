import { z } from 'zod'
import {
  EMAIL_MAX_LENGTH,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH
} from '@/lib/constants/form'

const MIN_FIELD_LENGTH = 1

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(MIN_FIELD_LENGTH).max(NAME_MAX_LENGTH),
  email: z.email().max(EMAIL_MAX_LENGTH),
  message: z.string().min(MIN_FIELD_LENGTH).max(MESSAGE_MAX_LENGTH)
})
