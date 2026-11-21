import { FEATURED_PROJECTS } from '@/lib/constants/projects'
import type { MetadataRoute } from 'next'
import {
  SITEMAP_HOME_PRIORITY,
  SITEMAP_PROJECT_PRIORITY
} from '@/lib/constants/seo'

const BASE_URL = 'https://kilimanjjjaro.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const home: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: SITEMAP_HOME_PRIORITY,
      alternates: {
        languages: {
          en: BASE_URL,
          es: `${BASE_URL}/es`
        }
      }
    },
    {
      url: `${BASE_URL}/es`,
      lastModified,
      changeFrequency: 'monthly',
      priority: SITEMAP_HOME_PRIORITY,
      alternates: {
        languages: {
          en: BASE_URL,
          es: `${BASE_URL}/es`
        }
      }
    }
  ]

  const projects: MetadataRoute.Sitemap = FEATURED_PROJECTS.en.flatMap(
    ({ slug }) => [
      {
        url: `${BASE_URL}/project/${slug}`,
        lastModified,
        changeFrequency: 'yearly',
        priority: SITEMAP_PROJECT_PRIORITY,
        alternates: {
          languages: {
            en: `${BASE_URL}/project/${slug}`,
            es: `${BASE_URL}/es/project/${slug}`
          }
        }
      },
      {
        url: `${BASE_URL}/es/project/${slug}`,
        lastModified,
        changeFrequency: 'yearly',
        priority: SITEMAP_PROJECT_PRIORITY,
        alternates: {
          languages: {
            en: `${BASE_URL}/project/${slug}`,
            es: `${BASE_URL}/es/project/${slug}`
          }
        }
      }
    ]
  )

  return [...home, ...projects]
}
