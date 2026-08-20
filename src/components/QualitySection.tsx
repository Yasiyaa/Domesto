import React from 'react';
import { QUALITY_METRICS } from '../data/domestoData';
import { Award, ShieldCheck } from 'lucide-react';

export const QualitySection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-domesto-navy text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-domesto-gold text-xs font-bold uppercase tracking-wider border border-white/15">
              <Award className="w-4 h-4" />
              <span>Rigorous Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Our Commitment to Quality
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              At Domesto Home Services, every task is completed following structured checklists, safety protocols, and rigorous quality assurance reviews.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We regularly measure operational performance across key service vectors to ensure consistently superior results for Melbourne homes and commercial properties.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-domesto-green" />
              <span>Configurable internal benchmark targets</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-6">
            {QUALITY_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-200">{metric.label}</span>
                  <span className="text-domesto-gold text-base">{metric.percentage}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${metric.color}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
