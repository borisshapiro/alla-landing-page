import { MetadataRoute } from 'next';

const BASE = 'https://rndqueen.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE}/accessibility`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
