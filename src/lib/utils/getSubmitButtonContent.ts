import type { SubmitButtonContent } from '@/lib/types/form'

interface Params {
  error: boolean
  success: boolean
  pending: boolean
}

export default function getSubmitButtonContent({
  error,
  success,
  pending
}: Params): SubmitButtonContent | null {
  if (pending) return { label: 'sendButton.1', showArrow: false }
  if (error && success) return null
  if (error) return { label: 'sendButton.2', showArrow: true }
  if (success) return { label: 'sendButton.3', showArrow: false }
  return { label: 'sendButton.0', showArrow: true }
}
