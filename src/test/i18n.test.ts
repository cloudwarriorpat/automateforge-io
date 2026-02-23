import { describe, it, expect } from 'vitest';
import { t, getLangFromPath, type Lang } from '@/i18n';

describe('i18n', () => {
  const langs: Lang[] = ['en', 'pl'];

  it('returns translations for both languages', () => {
    for (const lang of langs) {
      const tr = t(lang);
      expect(tr).toBeDefined();
    }
  });

  it('both languages have all nav keys', () => {
    const navKeys = ['home', 'products', 'ksef', 'agents', 'templates', 'about', 'contact', 'legal'] as const;
    for (const lang of langs) {
      const tr = t(lang);
      for (const key of navKeys) {
        expect(tr.nav[key], `${lang}.nav.${key}`).toBeTruthy();
      }
    }
  });

  it('both languages have all footer keys', () => {
    const footerKeys = ['tagline', 'copyright', 'privacy', 'terms'] as const;
    for (const lang of langs) {
      const tr = t(lang);
      for (const key of footerKeys) {
        expect(tr.footer[key], `${lang}.footer.${key}`).toBeTruthy();
      }
    }
  });

  it('both languages have all contact keys', () => {
    const contactKeys = ['title', 'subtitle', 'name', 'email', 'company', 'message', 'send', 'success'] as const;
    for (const lang of langs) {
      const tr = t(lang);
      for (const key of contactKeys) {
        expect(tr.contact[key], `${lang}.contact.${key}`).toBeTruthy();
      }
    }
  });

  it('both languages have all cta keys', () => {
    const ctaKeys = ['title', 'subtitle', 'button'] as const;
    for (const lang of langs) {
      const tr = t(lang);
      for (const key of ctaKeys) {
        expect(tr.cta[key], `${lang}.cta.${key}`).toBeTruthy();
      }
    }
  });

  describe('getLangFromPath', () => {
    it('returns pl for Polish paths', () => {
      expect(getLangFromPath('/pl')).toBe('pl');
      expect(getLangFromPath('/pl/uslugi')).toBe('pl');
      expect(getLangFromPath('/pl/kontakt')).toBe('pl');
    });

    it('returns en for English and unknown paths', () => {
      expect(getLangFromPath('/en')).toBe('en');
      expect(getLangFromPath('/en/products')).toBe('en');
      expect(getLangFromPath('/')).toBe('en');
      expect(getLangFromPath('/unknown')).toBe('en');
    });
  });
});
