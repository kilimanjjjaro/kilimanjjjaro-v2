export interface InitialStateFormInterface {
  error: boolean
  success: boolean
}

export interface FormDataInterface {
  name: string
  email: string
  message: string
}

export type FormStatusMessage =
  'welcomeMessage' | 'suggestionMessage' | 'successMessage' | 'errorMessage'

export type SubmitButtonLabel =
  'sendButton.0' | 'sendButton.1' | 'sendButton.2' | 'sendButton.3'

export interface SubmitButtonContent {
  label: SubmitButtonLabel
  showArrow: boolean
}
