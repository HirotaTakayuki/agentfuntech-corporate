import type { MetadataRoute } from 'next';
import { getNewsList } from '@/app/_libs/microcms';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/business`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/members`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/news`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const newsData = await getNewsList({ fields: ['id', 'publishedAt'] }).catch(() => null);
  const newsRoutes: MetadataRoute.Sitemap =
    newsData?.contents.map((article) => ({
      url: `${baseUrl}/news/${article.id}`,
      lastModified: article.publishedAt,
      changeFrequency: 'monthly',
      priority: 0.5,
    })) ?? [];

  return [...staticRoutes, ...newsRoutes];
}
