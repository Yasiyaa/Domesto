import React from 'react';
import { PROCESS_STEPS } from '../data/domestoData';
import { CalendarCheck, ClipboardList, Sparkles, Smile } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return ClipboardList;
      case 1: return CalendarCheck;
      case 2: return Sparkles;
      case 3: return Smile;
      default: return Sparkles;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-domesto-azure">Simple 4-Step Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-domesto-navy tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Getting your home professionally cared for with Domesto is quick, effortless, and seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = getStepIcon(idx);

            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Connector Line for large screens */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-slate-200 z-10"></div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-300 group-hover:text-domesto-azure transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-domesto-navy shadow-md flex items-center justify-center group-hover:bg-domesto-azure group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-domesto-navy mb-3 group-hover:text-domesto-azure transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
