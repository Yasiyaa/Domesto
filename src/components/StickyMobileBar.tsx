import React from 'react';
import { Phone, Smartphone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/domestoData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-3 gap-1.5">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex items-center justify-center gap-1 py-2.5 rounded-xl border border-slate-300 text-domesto-navy font-extrabold text-[11px] bg-slate-50 hover:bg-slate-100 transition-colors"
          title="Call Office"
        >
          <Phone className="w-3.5 h-3.5 text-domesto-azure flex-shrink-0" />
          <span>{BUSINESS_INFO.phone}</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.mobileClean}`}
          className="flex items-center justify-center gap-1 py-2.5 rounded-xl border border-emerald-300 text-domesto-navy font-extrabold text-[11px] bg-emerald-50/60 hover:bg-emerald-100/60 transition-colors"
          title="Call Mobile"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
          <span>{BUSINESS_INFO.mobile}</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1 py-2.5 rounded-xl bg-gradient-brand text-white font-black text-[11px] shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-domesto-gold flex-shrink-0" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
