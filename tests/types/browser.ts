export interface BrowserError {
  text: string
  url: string
}

export interface MatrixSample {
  a: number
  b: number
  f: number
}

export interface WordTransform {
  y: number
  rotate: number
}

export interface ElementVisibility {
  display: string
  opacity: number
}

declare global {
  interface Window {
    headlineSamples?: MatrixSample[]
    settledOtherProjects?: number[]
    reportCspViolation?: (violation: string) => Promise<void>
  }
}
