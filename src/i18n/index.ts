import { en } from './en';
import { pl } from './pl';

export type Lang = 'en' | 'pl';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, pl: pl as unknown as Translations };

export function t(lang: Lang): Translations {
  return translations[lang];
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/pl')) return 'pl';
  return 'en';
}
