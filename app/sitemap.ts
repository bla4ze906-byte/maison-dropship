import type { MetadataRoute } from 'next'

const SITE_URL = 'https://waron.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/#methode`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#formation`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
