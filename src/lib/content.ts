import { en } from '../content/en';
import { fr } from '../content/fr';
import type { Copy, Locale } from '../content/types';

export const copy: Record<Locale, Copy> = { fr, en };

export function assetPath(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function homePath(locale: Locale): string {
  return assetPath(locale === 'fr' ? '' : 'en/');
}

export function projectPath(locale: Locale, slug: string): string {
  return assetPath(`${locale === 'fr' ? 'projets' : 'en/projects'}/${slug}/`);
}
