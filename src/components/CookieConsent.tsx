import { useState, useEffect } from 'react';
import { getLangFromPath, type Lang } from '@/i18n';

const STORAGE_KEY = 'af-cookie-consent';

const copy: Record<Lang, { text: string; link: string; linkLabel: string; decline: string; accept: string }> = {
  en: {
    text: 'We use cookies for analytics (Google Analytics) to improve your experience. By continuing, you agree to our',
    link: '/en/legal',
    linkLabel: 'Privacy Policy',
    decline: 'Decline',
    accept: 'Accept',
  },
  pl: {
    text: 'Używamy plików cookie do analityki (Google Analytics). Kontynuując, zgadzasz się z naszą',
    link: '/pl/regulamin',
    linkLabel: 'Polityką Prywatności',
    decline: 'Odrzuć',
    accept: 'Akceptuję',
  },
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
    setLang(getLangFromPath(window.location.pathname));
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
    // Disable GA4 if user declines
    window[`ga-disable-G-VY53W8Y8ZG` as keyof Window] = true as never;
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
