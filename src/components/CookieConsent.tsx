import { useState, useEffect } from 'react';

const STORAGE_KEY = 'af-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
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

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-steel-900/95 backdrop-blur-lg p-6 shadow-2xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-steel-300">
            We use cookies for analytics (Google Analytics) to improve your experience.
            By continuing, you agree to our{' '}
            <a href="/en/legal" className="text-brand-400 hover:text-brand-300 underline">
              Privacy Policy
            </a>.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm font-medium text-steel-400 hover:text-white border border-white/10 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
