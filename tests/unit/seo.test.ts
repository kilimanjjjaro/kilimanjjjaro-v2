import { describe, expect, it } from 'vitest'
import sitemap from '@/app/sitemap'
import robots from '@/app/robots'
import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import {
  HOME_SITEMAP_ENTRIES,
  SITEMAP_ENTRIES_PER_PROJECT
} from '../constants/unit'

const BASE = 'https://kilimanjjjaro.com'

describe('sitemap', () => {
  const entries = sitemap()
  const urls = entries.map((entry) => entry.url)

  it('lists the home page in both languages', () => {
    expect(urls).toContain(BASE)
    expect(urls).toContain(`${BASE}/es`)
  })

  it('lists every featured project in both languages', () => {
    for (const { slug } of FEATURED_PROJECTS.en) {
      expect(urls).toContain(`${BASE}/project/${slug}`)
      expect(urls).toContain(`${BASE}/es/project/${slug}`)
    }
    expect(entries).toHaveLength(
      HOME_SITEMAP_ENTRIES +
        FEATURED_PROJECTS.en.length * SITEMAP_ENTRIES_PER_PROJECT
    )
  })

  it('declares language alternates for every entry', () => {
    for (const entry of entries) {
      const languages = entry.alternates?.languages ?? {}
      expect(Object.keys(languages).sort()).toEqual(['en', 'es'])
      expect(Object.values(languages)).toContain(entry.url)
    }
  })

  it('has no duplicated URLs', () => {
    expect(new Set(urls).size).toBe(urls.length)
  })
})

describe('robots', () => {
  it('allows everything and points to the sitemap', () => {
    expect(robots()).toEqual({
      rules: { userAgent: '*', allow: '/' },
      host: BASE,
      sitemap: `${BASE}/sitemap.xml`
    })
  })
})
