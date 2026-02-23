import { useState, useEffect } from 'react';
import { getLangFromPath, type Lang } from '@/i18n';

const STORAGE_KEY = 'af-cookie-consent';
const GA_ID = 'G-VY53W8Y8ZG';

const copy: Record<Lang, { text: string; link: string; linkLabel: string; decline: string; accept: string }> = {
  en: {
    text: 'We use cookies for analytics (Google Analytics) to improve your experience. By continuing, you agree to our',
    link: '/en/legal',
    linkLabel: 'Privacy Policy',
    decline: 'Decline',
    accept: 'Accept',
  },
  pl: {
    text: 'Uzywamy plikow cookie do analityki (Google Analytics). Kontynuujac, zgadzasz sie z nasza',
    link: '/pl/regulamin',
    linkLabel: 'Polityka Prywatnosci',
    decline: 'Odrzuc',
    accept: 'Akceptuje',
  },
};

function loadGA() {
  // Only load GA script if not already loaded
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      // User previously accepted — load GA
      loadGA();
    }
    setLang(getLangFromPath(window.location.pathname));
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
    loadGA();
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  const c = copy[lang];

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-steel-900/95 backdrop-blur-lg p-6 shadow-2xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-steel-300">
            {c.text}{' '}
            <a href={c.link} className="text-brand-400 hover:text-brand-300 underline">
              {c.linkLabel}
            </a>.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm font-medium text-steel-400 hover:text-white border border-white/10 rounded-lg transition-colors"
            >
              {c.decline}
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors"
            >
              {c.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
