import { en } from './en';
import { pl } from './pl';

export type Lang = 'en' | 'pl';

export interface Translations {
  nav: {
    home: string;
    products: string;
    ksef: string;
    agents: string;
    templates: string;
    about: string;
    contact: string;
    legal: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    company: string;
    message: string;
    send: string;
    success: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

const translations: Record<Lang, Translations> = { en, pl };

export function t(lang: Lang): Translations {
  return translations[lang];
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/pl')) return 'pl';
  return 'en';
}
