import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import en from '@/lib/locales/en'
import es from '@/lib/locales/es'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'

type Shape = string | Shape[] | { [key: string]: Shape }

function shape(value: unknown): Shape {
  if (Array.isArray(value)) return value.map(shape)
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, inner]) => [key, shape(inner)])
    )
  }
  return typeof value
}

function placeholders(value: unknown): string[] {
  const text = JSON.stringify(value)
  return Array.from(text.matchAll(/\{(\w+)\}/g), (match) => match[1]).sort(
    (a, b) => a.localeCompare(b)
  )
}

describe('locales', () => {
  it('es has exactly the same keys and array lengths as en', () => {
    expect(shape(es)).toEqual(shape(en))
  })

  it('es uses the same interpolation placeholders as en', () => {
    expect(placeholders(es)).toEqual(placeholders(en))
  })
})

describe('featured projects', () => {
  it('every project exists in both languages with the same slug', () => {
    const enSlugs = FEATURED_PROJECTS.en.map((project) => project.slug)
    const esSlugs = FEATURED_PROJECTS.es.map((project) => project.slug)
    expect(esSlugs).toEqual(enSlugs)
    expect(new Set(enSlugs).size).toBe(enSlugs.length)
  })

  it('every project has its Open Graph image', () => {
    for (const { slug } of FEATURED_PROJECTS.en) {
      const file = join(
        process.cwd(),
        'public/images/projects',
        slug,
        'og-image.jpg'
      )
      expect(existsSync(file), `missing ${file}`).toBe(true)
    }
  })
})
