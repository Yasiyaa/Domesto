import React from 'react';
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/domestoData';

interface NDISSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const NDISSection: React.FC<NDISSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-emerald-900 via-domesto-navy to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blur Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NDIS Registered Supplier</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Supporting Independent Living
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl">
              Domesto Home Services supports customers who require additional assistance with maintaining their homes and everyday environments.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              As an NDIS registered supplier, Domesto can provide tailored support services depending on individual requirements and eligibility. We work closely with self-managed, plan-managed, and NDIA-managed participants across Melbourne.
            </p>

            {/* Quick Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Tailored Care Plans</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Vetted & Insured Staff</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct Plan Invoicing</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('NDIS Support Services')}
                className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
              >
                <HeartHandshake className="w-5 h-5 text-slate-950" />
                <span>Enquire About NDIS Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 mx-auto flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white">Need Personalised Care?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our Melbourne support coordinator to discuss participant goals and home care assistance.
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="inline-block w-full py-2.5 px-4 rounded-xl bg-white text-domesto-navy font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  Call Office: {BUSINESS_INFO.phone}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.mobileClean}`}
                  className="inline-block w-full py-2.5 px-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                >
                  Call Mobile: {BUSINESS_INFO.mobile}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
