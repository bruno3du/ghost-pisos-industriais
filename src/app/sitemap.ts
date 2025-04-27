import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ghostpisosindustriais.com';

  return [
    {
      url: baseUrl,
      lastModified: '2025-04-27',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-04-27',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: '2025-04-27',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2025-04-27',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
