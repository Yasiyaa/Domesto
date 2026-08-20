import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/domestoData';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-domesto-azure">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-domesto-navy tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real experiences from Melbourne homeowners, landlords, and NDIS participants.
          </p>
        </div>

        {/* Testimonials Showcase Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl relative">
          <Quote className="w-16 h-16 text-sky-200/80 absolute top-6 right-6 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            {/* Customer Photo */}
            <img
              src={current.image}
              alt={current.name}
              className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-md flex-shrink-0"
            />

            <div className="flex-1 text-center sm:text-left space-y-4">
              {/* Rating */}
              <div className="flex justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Review Quote */}
              <blockquote className="text-slate-800 text-lg sm:text-xl font-medium italic leading-relaxed">
                "{current.comment}"
              </blockquote>

              {/* Customer Meta */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-domesto-navy text-base">{current.name}</h3>
                  <p className="text-xs text-slate-500">{current.role} • <span className="font-semibold text-domesto-azure">{current.suburb}</span></p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Service: {current.serviceUsed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? 'w-8 bg-domesto-azure' : 'w-2.5 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
