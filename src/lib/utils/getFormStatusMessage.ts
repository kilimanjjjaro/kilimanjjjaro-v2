import { FormStep } from '@/lib/constants/form'
import type { FormStatusMessage } from '@/lib/types/form'

interface Params {
  step: FormStep
  error: boolean
  success: boolean
}

export default function getFormStatusMessage({
  step,
  error,
  success
}: Params): FormStatusMessage | null {
  if (error && success) return null
  if (error) return 'errorMessage'
  if (success) return 'successMessage'
  if (step <= FormStep.Email) return 'welcomeMessage'
  return 'suggestionMessage'
}
