import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('domesto_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('domesto_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-slate-950/95 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 backdrop-blur-md animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <Cookie className="w-6 h-6 text-domesto-gold flex-shrink-0 mt-0.5" />
        
        <div className="flex-1 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Cookie Preferences</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            We use functional cookies to enhance your navigation experience and ensure secure online booking.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-domesto-azure text-white text-xs font-bold hover:bg-sky-500 transition-colors"
            >
              Accept Cookies
            </button>
            <button
              onClick={() => setVisible(false)}
              className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-400 text-xs font-bold hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
