import React, { useState, useEffect, useCallback } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Star, 
  MapPin, 
  Award, 
  Phone, 
  Smartphone,
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Building2, 
  Trees, 
  HeartHandshake,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/domestoData';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const slides = [
    {
      id: 1,
      badge: 'CERTIFIED & INSURED SPECIALISTS',
      title: 'Transform Your Home with Professional Cleaning',
      subtitle: 'Spotless interiors, eco-friendly hygiene, and deep property care tailored for Melbourne residences.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85',
      category: 'Domestic & Deep Cleaning',
      startingPrice: 'From $38/hr',
      ctaText: 'Book Domestic Cleaning',
      icon: Sparkles,
      highlights: ['Eco-Friendly Products', '100% Satisfaction Guarantee', 'Police-Checked Staff']
    },
    {
      id: 2,
      badge: 'GARDENING & OUTDOOR EXPERTS',
      title: 'Pristine Lawn Care & Outdoor Maintenance',
      subtitle: 'Keep your garden, hedges, lawns, and outdoor entertaining areas immaculate with Melbourne grounds technicians.',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=2000&q=85',
      category: 'Ground Maintenance & Mowing',
      startingPrice: 'From $49/hr',
      ctaText: 'Book Lawn Mowing',
      icon: Trees,
      highlights: ['Commercial Machinery', 'Hedge & Edge Trimming', 'Green Waste Disposal']
    },
    {
      id: 3,
      badge: 'REGISTERED NDIS SUPPLIER',
      title: 'Tailored Caretaker & Independent Support Services',
      subtitle: 'Respectful household management, personal assistance, and property maintenance for NDIS participants.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=85',
      category: 'Caretaker & NDIS Support',
      startingPrice: 'From $42/hr',
      ctaText: 'Enquire Care Support',
      icon: HeartHandshake,
      highlights: ['Tailored Care Plans', 'Plan & Self-Managed', 'Compassionate Specialists']
    },
    {
      id: 4,
      badge: 'HIGH PRESSURE & EXTERIOR REFRESH',
      title: 'Commercial Office & High Pressure Washing',
      subtitle: 'Banish oil stains, algae, and grime from driveways, concrete paths, gutters, and commercial workplaces.',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=2000&q=85',
      category: 'Pressure Washing & Exterior Care',
      startingPrice: 'Custom Quotes',
      ctaText: 'Request Commercial Care',
      icon: Building2,
      highlights: ['Industrial Pressure Wash', 'Gutter Debris Clearing', 'Flexible After-Hours']
    },
    {
      id: 5,
      badge: 'CARPET & UPHOLSTERY HYGIENE',
      title: 'Deep Carpet & Steam Extraction Care',
      subtitle: 'Revitalise your carpets, rugs, and lounge furniture with non-toxic hot water extraction and allergen treatment.',
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=2000&q=85',
      category: 'Carpet & Upholstery Cleaning',
      startingPrice: 'From $99',
      ctaText: 'Book Carpet Cleaning',
      icon: Layers,
      highlights: ['Hot Water Steam Extraction', 'Stain & Pet Odour Removal', 'Fast 2-Hour Dry Time']
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedQuickService, setSelectedQuickService] = useState('Domestic Cleaning');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Continuous auto-play timer every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = slides[currentSlide];
  const ActiveIcon = activeSlide.icon;

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-36 sm:pt-40 lg:pt-48 pb-20 sm:pb-24 select-none"
    >
      {/* Background Banner Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out filter brightness-105 contrast-[1.02] ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          
          {/* Subtle gradient overlays for text readability */}
          <div className="absolute inset-0 bg-slate-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>
        </div>
      ))}

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-950/40 hover:bg-domesto-navy text-white/80 hover:text-white backdrop-blur-md border border-white/20 hover:border-domesto-lime shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-domesto-lime" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-950/40 hover:bg-domesto-navy text-white/80 hover:text-white backdrop-blur-md border border-white/20 hover:border-domesto-lime shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-domesto-lime" />
      </button>

      {/* Main Grid Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-domesto-lime text-xs sm:text-sm font-bold shadow-md">
                <Award className="w-4 h-4 text-domesto-lime" />
                <span>{activeSlide.badge}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-domesto-navy text-white text-xs font-extrabold uppercase tracking-wider shadow-md border border-white/10">
                <ActiveIcon className="w-3.5 h-3.5 text-domesto-lime" />
                <span>{activeSlide.category}</span>
                <span className="text-white/60">•</span>
                <span className="text-domesto-lime font-bold">{activeSlide.startingPrice}</span>
              </div>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg mb-4 min-h-[1.2em]">
              {activeSlide.title}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mb-6 drop-shadow">
              {activeSlide.subtitle}
            </p>

            {/* Feature Highlights Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {activeSlide.highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-slate-100 text-xs sm:text-sm font-medium shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-domesto-lime" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Interactive Action Buttons Area */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center pt-4 border-t border-white/15">
              
              {/* 1. Main Booking CTA Button with Shimmer & Micro-Interactions */}
              <button
                onClick={() => onOpenBooking(activeSlide.category)}
                className="relative group overflow-hidden px-7 py-4 rounded-2xl bg-gradient-lime text-slate-950 font-black text-base shadow-2xl shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-950/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Calendar className="w-4 h-4 text-slate-950" />
                </div>
                <span className="tracking-tight">{activeSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform duration-300" />
                
                {/* Subtle Glass Shimmer Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
              </button>

              {/* 2. Secondary Explore Services Glass Button */}
              <a
                href="#services"
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 hover:border-white/40 font-bold text-base shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-domesto-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* 3. Direct Contact Capsule Bar with Live Pulse Beacon */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/60 backdrop-blur-2xl border border-white/15 shadow-2xl">
                <div className="px-3 py-1 flex items-center gap-2 border-r border-white/10 hidden xl:flex">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Live</span>
                </div>

                {/* Office Landline Button */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-domesto-navy/90 hover:bg-domesto-navy text-white font-bold border border-white/10 hover:border-domesto-lime/50 hover:scale-105 active:scale-95 transition-all duration-200 group"
                  title={`Call Office: ${BUSINESS_INFO.phone}`}
                >
                  <div className="p-1.5 rounded-lg bg-domesto-azure/20 text-domesto-lime group-hover:bg-domesto-lime group-hover:text-slate-950 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-300 font-medium leading-none">Office</span>
                    <span className="text-xs font-extrabold text-white leading-tight">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>

                {/* Mobile Direct Button */}
                <a
                  href={`tel:${BUSINESS_INFO.mobileClean}`}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 text-white font-bold border border-emerald-400/20 hover:border-emerald-400/60 hover:scale-105 active:scale-95 transition-all duration-200 group"
                  title={`Call Mobile Direct: ${BUSINESS_INFO.mobile}`}
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-emerald-300/80 font-medium leading-none">Direct</span>
                    <span className="text-xs font-extrabold text-white leading-tight">{BUSINESS_INFO.mobile}</span>
                  </div>
                </a>
              </div>

            </div>

            {/* Trust Metrics Footer Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span className="text-slate-400 text-xs">(1,000+ Reviews)</span>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <MapPin className="w-4 h-4 text-domesto-lime" />
                <span>Serving Greater Melbourne & Suburbs</span>
              </div>

              <div className="flex items-center gap-2 font-medium text-domesto-lime bg-domesto-green/10 px-3 py-1 rounded-xl border border-domesto-green/30">
                <ShieldCheck className="w-4 h-4 text-domesto-lime" />
                <span>NDIS Registered Provider</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Booking Selector Widget */}
          <div className="hidden lg:col-span-4 lg:flex flex-col justify-between bg-slate-950/45 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl shadow-slate-950/60">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 text-domesto-lime font-bold text-xs uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-domesto-lime" />
                  <span>Instant Quick Booking</span>
                </div>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-domesto-lime" />
                  Fast Response
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Book Your Service in 60 Secs</h3>
              <p className="text-xs text-slate-300 mb-4">Select a category below to get guaranteed upfront pricing and transparent booking.</p>

              {/* Service Selection Buttons */}
              <div className="space-y-2 mb-4">
                {[
                  { name: 'Domestic Cleaning', tag: 'From $38/hr', icon: Sparkles },
                  { name: 'Ground Maintenance', tag: 'From $49/hr', icon: Trees },
                  { name: 'Caretaker & NDIS Care', tag: 'From $42/hr', icon: HeartHandshake },
                  { name: 'Commercial Cleaning', tag: 'Custom Quote', icon: Building2 },
                  { name: 'Carpet & Upholstery', tag: 'From $99', icon: Layers },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  const isSelected = selectedQuickService === item.name || currentSlide === idx;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setSelectedQuickService(item.name);
                        setCurrentSlide(idx);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'bg-domesto-navy text-white border-domesto-lime shadow-md ring-1 ring-domesto-lime' 
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-domesto-green text-slate-950' : 'bg-white/10 text-domesto-lime'}`}>
                          <ItemIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold">{item.name}</span>
                      </div>
                      <span className={`text-[11px] font-bold ${isSelected ? 'text-domesto-lime' : 'text-slate-400'}`}>
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Trigger */}
            <button
              onClick={() => onOpenBooking(selectedQuickService)}
              className="w-full py-3 rounded-xl bg-gradient-lime text-slate-950 font-black text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book {selectedQuickService.split(' ')[0]} Now</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide 
                ? 'w-8 bg-domesto-lime shadow-lg shadow-lime-500/50' 
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
          />
        ))}
      </div>
    </section>
  );
};
