import type { APIRoute } from 'astro';
import { copy, homePath, projectPath } from '../lib/content';
import type { Locale } from '../content/types';

export const GET: APIRoute = ({ site }) => {
  const paths = (['fr', 'en'] as const).flatMap((locale: Locale) => [
    homePath(locale),
    ...copy[locale].projects.items.map((project) =>
      projectPath(locale, project.slug),
    ),
  ]);
  const urls = paths
    .map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
