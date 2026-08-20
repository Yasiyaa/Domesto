import React, { useEffect, useState, useRef } from 'react';
import { STATISTICS } from '../data/domestoData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATISTICS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts(
        STATISTICS.map((stat) => Math.floor(stat.value * Math.min(progress, 1)))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-domesto-navy text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-domesto-gold">Proven Track Record</span>
          <h2 className="text-2xl sm:text-3xl font-black mt-2">Delivering Quality & Trust Across Melbourne</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATISTICS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-domesto-azure/50 transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-domesto-gold tracking-tight mb-2">
                {stat.prefix || ''}{counts[idx]}{stat.suffix}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-domesto-gold transition-colors">
                {stat.label}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
