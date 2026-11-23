import type { ElementVisibility, MatrixSample } from '../types/browser'

export function readHeadlineWordMatrix(): MatrixSample {
  const word = document.querySelector('main header h2 > span')
  const layers = word === null ? [] : Array.from(word.querySelectorAll('span'))
  const matrix = layers.reduce((combined, layer) => {
    const { transform } = getComputedStyle(layer)
    return transform === 'none'
      ? combined
      : combined.multiply(new DOMMatrix(transform))
  }, new DOMMatrix())

  return { a: matrix.a, b: matrix.b, f: matrix.f }
}

export function recordHeadlineIntro(durationMs: number) {
  const samples: MatrixSample[] = []
  const start = performance.now()
  window.headlineSamples = samples

  const sample = () => {
    const headline = document.querySelector('main header h2')
    const word = document.querySelector('main header h2 > span')

    if (headline?.checkVisibility() === true && word !== null) {
      const matrix = Array.from(word.querySelectorAll('span')).reduce(
        (combined, layer) => {
          const { transform } = getComputedStyle(layer)
          return transform === 'none'
            ? combined
            : combined.multiply(new DOMMatrix(transform))
        },
        new DOMMatrix()
      )
      samples.push({ a: matrix.a, b: matrix.b, f: matrix.f })
    }

    if (performance.now() - start < durationMs) requestAnimationFrame(sample)
  }

  requestAnimationFrame(sample)
}

export function readHeadlineSamples(): MatrixSample[] {
  return window.headlineSamples ?? []
}

export function readElementWidth(selector: string): number | null {
  return document.querySelector(selector)?.getBoundingClientRect().width ?? null
}

export function readCarouselIndex(): number | null {
  const carousel = document.querySelector<
    HTMLElement & { swiper?: { activeIndex: number } }
  >('.skills-carousel')

  return carousel?.swiper?.activeIndex ?? null
}

export function readScrollButtonState(): ElementVisibility | null {
  const button = Array.from(
    document.querySelectorAll('main header button')
  ).find((element) => element.textContent.trim() === 'Scroll')

  if (button === undefined) return null

  const { display, opacity } = getComputedStyle(button)

  return { display, opacity: Number(opacity) }
}

export function trackSettledOtherProjects({
  count,
  tolerance
}: {
  count: number
  tolerance: number
}): boolean {
  const settled = window.settledOtherProjects ?? []
  window.settledOtherProjects = settled

  Array.from(
    document.querySelectorAll('a[target="_blank"] article section > div')
  )
    .filter((_, index) => index < count)
    .forEach((item, index) => {
      const { transform } = getComputedStyle(item)
      const { f: offset } =
        transform === 'none' ? new DOMMatrix() : new DOMMatrix(transform)

      if (Math.abs(offset) < tolerance && !settled.includes(index)) {
        settled.push(index)
      }
    })

  return settled.length >= count
}

export function readSettledOtherProjects(): number[] {
  return window.settledOtherProjects ?? []
}

export function scrollWindowTo(top: number) {
  window.scrollTo({ top })
}

export function isScrolledPast(minScrollY: number): boolean {
  return window.scrollY >= minScrollY
}

export function readCookieConsent(): string | null {
  return localStorage.getItem('__COOKIES_CONSENT__')
}

export function reportCspViolations() {
  document.addEventListener('securitypolicyviolation', (event) => {
    void window.reportCspViolation?.(
      `CSP violation: ${event.violatedDirective} ${event.blockedURI}`
    )
  })
}
