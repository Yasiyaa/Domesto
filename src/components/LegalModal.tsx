import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  title: string | null;
  content: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, content, onClose }) => {
  if (!title || !content) return null;

  return (
    <div data-lenis-prevent className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-domesto-azure flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-domesto-navy">{title}</h3>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed pt-2 border-t border-slate-100">
          {content}
        </p>

        <div className="pt-4 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-domesto-navy text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
