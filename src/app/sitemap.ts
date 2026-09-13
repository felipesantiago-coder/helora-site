import { MetadataRoute } from 'next';

/**
 * Sitemap with real lastModified dates (not new Date() on each request).
 * Update dates manually when content changes.
 */
const LAST_UPDATED_HOME = new Date('2025-09-11');
const LAST_UPDATED_CONVENIOS = new Date('2025-09-11');
const LAST_UPDATED_EMPRESAS = new Date('2025-09-11');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.clinicahelora.com',
      lastModified: LAST_UPDATED_HOME,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.clinicahelora.com/convenios',
      lastModified: LAST_UPDATED_CONVENIOS,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.clinicahelora.com/empresas',
      lastModified: LAST_UPDATED_EMPRESAS,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
