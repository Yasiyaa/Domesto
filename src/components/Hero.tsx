import React, { useState, useEffect } from 'react';
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
  ArrowUpRight
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
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85',
      category: 'Pressure Washing & Exterior Care',
      startingPrice: 'Custom Quotes',
      ctaText: 'Request Commercial Care',
      icon: Building2,
      highlights: ['Industrial Pressure Wash', 'Gutter Debris Clearing', 'Flexible After-Hours']
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedQuickService, setSelectedQuickService] = useState('Domestic Cleaning');

  // Auto-play timer (5.5 seconds per slide)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const activeSlide = slides[currentSlide];
  const ActiveIcon = activeSlide.icon;

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-36 sm:pt-40 lg:pt-48 pb-20 sm:pb-24"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Banner Slides with LOWER OPACITY OVERLAYS */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out filter brightness-105 contrast-[1.02] ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          
          {/* ULTRA-LIGHT LOW OPACITY OVERLAYS - Bright Hero photos with high clarity */}
          <div className="absolute inset-0 bg-slate-950/15"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-emerald-950/15 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/15"></div>
        </div>
      ))}

      {/* Main Grid Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content (Clean layout without background card view) */}
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-lg mb-4">
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2 border-t border-white/15">
              <button
                onClick={() => onOpenBooking(activeSlide.category)}
                className="px-8 py-4 rounded-xl bg-gradient-lime text-slate-950 font-black text-base shadow-2xl hover:shadow-lime-500/30 hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/25 font-bold text-base shadow-lg hover:bg-white/20 hover:border-white/40 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-5 py-4 rounded-xl bg-domesto-navy/80 backdrop-blur-md border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-domesto-navy transition-colors flex items-center justify-center gap-2 text-center"
                title="Call Office Landline"
              >
                <Phone className="w-4 h-4 text-domesto-lime" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.mobileClean}`}
                className="px-5 py-4 rounded-xl bg-emerald-950/70 backdrop-blur-md border border-emerald-400/30 text-white font-bold text-sm sm:text-base hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 text-center"
                title="Call Mobile Direct"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>{BUSINESS_INFO.mobile}</span>
              </a>
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

          {/* Right Column: Quick Booking Selector Widget (Desktop Glass Card) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col justify-between bg-slate-950/45 backdrop-blur-xl border border-white/20 p-7 rounded-3xl shadow-2xl shadow-slate-950/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-domesto-lime font-bold text-xs uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-domesto-lime" />
                  <span>Instant Quick Booking</span>
                </div>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-domesto-lime" />
                  Fast Response
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Book Your Service in 60 Secs</h3>
              <p className="text-xs text-slate-300 mb-6">Select a category below to get guaranteed upfront pricing and transparent booking.</p>

              {/* Service Selection Buttons */}
              <div className="space-y-2.5 mb-6">
                {[
                  { name: 'Domestic Cleaning', tag: 'From $38/hr', icon: Sparkles },
                  { name: 'Ground Maintenance', tag: 'From $49/hr', icon: Trees },
                  { name: 'Caretaker & NDIS Care', tag: 'From $42/hr', icon: HeartHandshake },
                  { name: 'Commercial Cleaning', tag: 'Custom Quote', icon: Building2 },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  const isSelected = selectedQuickService === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setSelectedQuickService(item.name);
                        // Also sync current slide if matches
                        const slideIdx = slides.findIndex(s => s.category.includes(item.name.split(' ')[0]));
                        if (slideIdx !== -1) setCurrentSlide(slideIdx);
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'bg-domesto-navy text-white border-domesto-lime shadow-md ring-1 ring-domesto-lime' 
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-domesto-green text-slate-950' : 'bg-white/10 text-domesto-lime'}`}>
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold">{item.name}</span>
                      </div>
                      <span className={`text-xs font-bold ${isSelected ? 'text-domesto-lime' : 'text-slate-400'}`}>
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
              className="w-full py-3.5 rounded-xl bg-gradient-lime text-slate-950 font-black text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book {selectedQuickService.split(' ')[0]} Now</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
