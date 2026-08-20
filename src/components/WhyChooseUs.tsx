import React from 'react';
import { Sliders, UserCheck, CalendarCheck, Headphones, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/domestoData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Sliders': return Sliders;
      case 'UserCheck': return UserCheck;
      case 'CalendarCheck': return CalendarCheck;
      case 'Headphones': return Headphones;
      default: return CheckCircle;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-domesto-azure">The Domesto Standard</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-domesto-navy tracking-tight">
            Why Choose Domesto?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We bring unmatched quality, reliability, and peace of mind to home services across Melbourne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:bg-domesto-navy group-hover:border-domesto-navy transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-domesto-azure group-hover:text-domesto-lime transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-domesto-navy mb-3 group-hover:text-domesto-azure transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-domesto-green">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
