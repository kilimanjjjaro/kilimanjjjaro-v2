import { z } from 'zod'
import { FULL_SCALE } from '@/lib/constants/animation'
import type { InitialStateFormInterface } from '@/lib/types/form'

export const FORM_DEFAULT_STATE: InitialStateFormInterface = {
  error: false,
  success: false
}

export const FORM_SUCCESS_STATE: InitialStateFormInterface = {
  error: false,
  success: true
}

export const FORM_ERROR_STATE: InitialStateFormInterface = {
  error: true,
  success: false
}

export enum FormStep {
  Name = 1,
  Email = 2,
  Message = 3,
  Submit = 4
}

export const MIN_FIELD_LENGTH = 1
export const HONEYPOT_FIELD = 'website'

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(MIN_FIELD_LENGTH),
  email: z.email(),
  message: z.string().min(MIN_FIELD_LENGTH)
})
export const FIELDS_RENDER_DELAY_MS = 6600
export const SUCCESS_MESSAGE_DURATION_MS = 5000
const CONTACT_FORM_HIDDEN_SCALE = 0.5

export const CONTACT_FORM_HIDDEN_STATE = {
  y: '90dvh',
  scale: CONTACT_FORM_HIDDEN_SCALE
}

export const CONTACT_FORM_VISIBLE_STATE = { y: '0dvh', scale: FULL_SCALE }

export const COMMAND_LINE_FIRST_COMMAND_MS = 1500
export const COMMAND_LINE_SECOND_COMMAND_MS = 2700
export const COMMAND_LINE_THIRD_COMMAND_MS = 4800
export const COMMAND_LINE_FOLDERS_DELAY = 2.1
export const COMMAND_LINE_FILES_DELAY = 4.1

export const COMMAND_LINE_FOLDERS = [
  'app',
  'components',
  'constants',
  'hooks',
  'interfaces',
  'store'
]

export const COMMAND_LINE_FILES = ['messages.json', 'issues.json']
