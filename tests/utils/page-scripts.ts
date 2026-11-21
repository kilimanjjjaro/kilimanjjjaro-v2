export function readCarouselIndex(): number | null {
  const carousel = document.querySelector<
    HTMLElement & { swiper?: { activeIndex: number } }
  >('.skills-carousel')

  return carousel?.swiper?.activeIndex ?? null
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
