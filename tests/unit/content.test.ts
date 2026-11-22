import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import en from '@/lib/locales/en'
import es from '@/lib/locales/es'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import { findPlaceholders, toShape } from '../utils/locales'

describe('locales', () => {
  it('es has exactly the same keys and array lengths as en', () => {
    expect(toShape(es)).toEqual(toShape(en))
  })

  it('es uses the same interpolation placeholders as en', () => {
    expect(findPlaceholders(es)).toEqual(findPlaceholders(en))
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
