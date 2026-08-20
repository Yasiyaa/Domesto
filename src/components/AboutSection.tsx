import React from 'react';
import { Shield, Sparkles, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/domestoData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#8AC53E] relative overflow-hidden text-slate-950">
      
      {/* Subtle Ambient Decorative Highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#1D4679]/15 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Australian Clean Home by Domesto Home Services"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white p-4.5 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 text-[#8AC53E] font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-[#8AC53E]" />
                  <span>Melbourne Head Office & Service Network</span>
                </div>
                <p className="text-xs text-slate-200">{BUSINESS_INFO.address}</p>
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#1D4679] text-white p-5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-4 border border-white/20">
              <Shield className="w-8 h-8 text-[#8AC53E]" />
              <div>
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-300">NDIS Approved</p>
                <p className="text-base font-black text-white">Registered Care Supplier</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D4679] text-white text-xs font-black uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#8AC53E]" />
              <span>About Domesto</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D4679] tracking-tight leading-tight">
              The Domesto <span className="text-white drop-shadow-sm">Difference</span>
            </h2>

            <p className="text-[#1D4679] text-base sm:text-lg font-bold leading-relaxed">
              Welcome to <strong className="text-[#0F294A] font-black underline decoration-2 decoration-[#1D4679]">Domesto Home Services</strong>, your trusted partner in transforming your home into a haven of comfort and convenience.
            </p>

            <p className="text-slate-950 font-medium text-sm sm:text-base leading-relaxed">
              Based in Melbourne, Domesto provides comprehensive home solutions designed around the individual needs of customers. Our team is committed to delivering professional, reliable and personalised services across cleaning, gardening, maintenance, caretaker and property care requirements.
            </p>

            <p className="text-slate-950 font-medium text-sm sm:text-base leading-relaxed">
              Whether you need regular domestic cleaning, lawn maintenance, carpet cleaning, handyman assistance or ongoing property support, Domesto is here to help.
            </p>

            {/* Key highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Vetted & Police-Checked Staff',
                'Transparent Upfront Pricing',
                'Tailored NDIS Support Plans',
                'Eco-Friendly Cleaning Solutions',
                'Full Public Liability Insurance',
                '100% Satisfaction Guarantee'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-[#1D4679] bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/60 shadow-md">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#1D4679] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-xl bg-[#1D4679] hover:bg-[#15345C] text-white font-black text-sm shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer border border-[#1D4679]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#8AC53E]" />
              </button>
              
              <a
                href="#contact"
                className="px-6 py-4 rounded-xl border-2 border-[#1D4679] bg-white/80 hover:bg-white text-[#1D4679] font-bold text-sm transition-all text-center shadow-md"
              >
                Get in Touch
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

