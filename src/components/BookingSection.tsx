import React from 'react';
import { Calendar, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { BUSINESS_INFO } from '../data/domestoData';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  return (
    <section id="booking" className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Banner Image with Dark Translucent Gradient Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Immaculate Home Interior Background Banner"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-[1.02] transform scale-105"
        />
        {/* Light Translucent Overlays for High Image Visibility */}
        <div className="absolute inset-0 bg-slate-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/30 to-slate-950/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-domesto-lime text-xs font-bold uppercase tracking-wider shadow-lg">
              <Calendar className="w-4 h-4 text-domesto-lime" />
              <span>Easy Online Reservation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Schedule Your Service Today
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed drop-shadow">
              Tell us what you need and our Melbourne team will immediately arrange the right domestic or commercial service for your property.
            </p>

            {/* Quick Benefits List */}
            <div className="space-y-4 pt-4 border-t border-white/15">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Vetted & Insured Staff</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Every technician undergoes police background checks and expert training.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Transparent Hourly Pricing</h3>
                  <p className="text-xs text-slate-300 mt-0.5">No surprise fees. Honest upfront quotes confirmed before work begins.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 rounded-2xl bg-domesto-navy/90 backdrop-blur-md border border-white/20 text-white space-y-2 shadow-xl">
              <p className="text-xs font-extrabold uppercase text-slate-300 tracking-wider">Prefer to speak over the phone?</p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="text-xl sm:text-2xl font-black text-domesto-lime hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-6 h-6 text-domesto-lime" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <p className="text-xs text-slate-400">Operating Mon - Sat: 7:00 AM - 7:00 PM</p>
            </div>

          </div>

          {/* Right Column: Interactive Form Box */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/40 text-slate-900">
            <h3 className="text-2xl font-black text-domesto-navy mb-6 pb-3 border-b border-slate-200">
              Request Your Booking
            </h3>

            <BookingForm initialService={initialService} />
          </div>

        </div>
      </div>
    </section>
  );
};
