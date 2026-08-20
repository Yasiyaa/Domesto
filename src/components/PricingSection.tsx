import React from 'react';
import { Check, Sparkles, Trees, HeartHandshake, AlertCircle, Calendar } from 'lucide-react';
import { PRICING_CARDS, BUSINESS_INFO } from '../data/domestoData';

interface PricingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Sparkles': return Sparkles;
      case 'Trees': return Trees;
      case 'HeartHandshake': return HeartHandshake;
      default: return Sparkles;
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-emerald-50/80 via-slate-50 to-emerald-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Clear & Honest Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-domesto-navy tracking-tight">
            Simple & Transparent Pricing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Upfront hourly starting rates with zero hidden fees. Personalized quotes available for custom home requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PRICING_CARDS.map((card) => {
            const IconComponent = getIcon(card.icon);

            return (
              <div
                key={card.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  card.popular
                    ? 'bg-domesto-navy text-white shadow-2xl scale-[1.03] border-2 border-domesto-azure'
                    : 'bg-slate-50 text-slate-900 border border-slate-200/80 hover:shadow-xl'
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-domesto-azure to-domesto-green text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      card.popular ? 'bg-white/10 text-domesto-gold' : 'bg-sky-100 text-domesto-azure'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      card.popular ? 'bg-white/10 text-slate-300' : 'bg-slate-200 text-slate-700'
                    }`}>
                      Melbourne VIC
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-xs uppercase font-bold text-slate-400">From</span>
                    <span className="text-4xl font-black">{card.price}</span>
                    <span className={`text-xs font-semibold ${card.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                      / {card.unit}
                    </span>
                  </div>

                  <div className="space-y-3 my-6 pt-6 border-t border-slate-200/20">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      card.popular ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      Key Inclusions:
                    </p>
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm font-medium">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          card.popular ? 'text-domesto-gold' : 'text-domesto-green'
                        }`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(card.title)}
                  className={`w-full py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 ${
                    card.popular
                      ? 'bg-gradient-to-r from-domesto-azure to-sky-500 text-white hover:brightness-110'
                      : 'bg-domesto-navy text-white hover:bg-slate-800'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{card.buttonText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="max-w-4xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">Pricing Disclaimer</h4>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              {BUSINESS_INFO.pricingDisclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
