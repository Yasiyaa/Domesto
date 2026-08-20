import React from 'react';
import { Clock, CalendarCheck, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface TrustFeaturesProps {
  onOpenBooking: () => void;
}

export const TrustFeatures: React.FC<TrustFeaturesProps> = ({ onOpenBooking }) => {
  const cards = [
    {
      title: 'Save Time & Money',
      description: 'Our professional domestic and property services handle every task efficiently, giving you valuable time back while keeping your home looking pristine.',
      icon: Clock,
      badge: 'Efficient Care',
      gradient: 'from-[#1D4679]/20 to-[#8AC53E]/10',
      iconBg: 'bg-[#1D4679]/90 text-[#8AC53E]',
      perk: 'Up to 30% time saved weekly'
    },
    {
      title: 'Easy 60-Sec Online Booking',
      description: 'Request your preferred cleaning, gardening, or maintenance service in under 60 seconds with transparent pricing and instant confirmation.',
      icon: CalendarCheck,
      badge: '60 Seconds',
      gradient: 'from-[#8AC53E]/20 to-[#1D4679]/10',
      iconBg: 'bg-[#8AC53E] text-slate-950',
      perk: 'Instant schedule confirmation'
    },
    {
      title: '100% Satisfaction Focused',
      description: 'We prioritize exceptional workmanship, vetted certified professionals, and complete peace of mind on every single visit across Melbourne.',
      icon: ShieldCheck,
      badge: 'Guaranteed',
      gradient: 'from-[#1D4679]/20 to-emerald-500/10',
      iconBg: 'bg-[#1D4679]/90 text-[#8AC53E]',
      perk: '100% money-back guarantee'
    }
  ];

  return (
    <section className="relative z-20 py-20 lg:py-24 overflow-hidden">
      
      {/* Background Banner Image with VERY LOW OPACITY OVERLAY FOR MAXIMUM IMAGE VISIBILITY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Clean Home Background Banner"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-100 contrast-[1.05]"
        />
        {/* Very light translucent scrim overlay - background image is fully visible */}
        <div className="absolute inset-0 bg-[#0F294A]/15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-emerald-950/15 to-slate-950/45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/15 via-transparent to-emerald-900/15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-domesto-lime text-xs sm:text-sm font-bold shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-domesto-lime" />
            <span>Why Choose Domesto</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md mb-4">
            Built for Convenience, <span className="text-transparent bg-clip-text bg-gradient-to-r from-domesto-lime via-emerald-300 to-white">Quality & Peace of Mind</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Experience Melbourne’s premier home service standard with upfront pricing, certified caretakers, and guaranteed customer satisfaction.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="relative group rounded-3xl p-8 bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-domesto-lime/60 shadow-2xl hover:shadow-domesto-lime/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Card Ambient Glow */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-br ${card.gradient} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                <div>
                  {/* Top Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${card.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-domesto-lime group-hover:bg-domesto-lime group-hover:text-slate-950 transition-all duration-300">
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-domesto-lime transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div>
                  {/* Key Perk Pill */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-domesto-lime flex-shrink-0" />
                    <span>{card.perk}</span>
                  </div>

                  {/* Action CTA */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-gradient-lime text-white hover:text-slate-950 border border-white/20 hover:border-transparent font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Book Service Now</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

