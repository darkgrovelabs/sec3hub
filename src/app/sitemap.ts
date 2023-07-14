import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sec3hub.xyz',
      lastModified: new Date(),
    },
    {
      url: 'https://sec3hub.xyz/auditors',
      lastModified: new Date(),
    },
    {
      url: 'https://sec3hub.xyz/products',
      lastModified: new Date(),
    },
    {
      url: 'https://sec3hub.xyz/resources',
      lastModified: new Date(),
    },
    {
      url: 'https://sec3hub.xyz/indicents',
      lastModified: new Date(),
    },
  ]
}
