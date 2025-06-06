import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL || 'http://localhost:3000';

  return [
    {
      url: baseUrl,
      lastModified: '2025-04-27',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: '2025-04-27',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos`,
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
