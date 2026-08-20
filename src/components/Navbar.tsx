import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, ShieldCheck, MapPin, Mail } from 'lucide-react';
import { DomestoLogo } from './DomestoLogo';
import { BUSINESS_INFO } from '../data/domestoData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Our Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 m-0 p-0">
      
      {/* Top Announcement Bar - Flush with very top of viewport */}
      <div className="hidden lg:block bg-slate-950 text-slate-200 border-b border-white/10 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Left Info Group */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NDIS Registered Supplier</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-domesto-azure" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
          </div>

          {/* Right Contact Group */}
          <div className="flex items-center gap-5 font-medium">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`} 
              className="flex items-center gap-1.5 text-white hover:text-domesto-gold transition-colors font-bold group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:text-domesto-gold transition-colors" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>

            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-domesto-azure group-hover:text-white transition-colors" />
              <span>{BUSINESS_INFO.email}</span>
            </a>

            <span className="text-slate-400 border-l border-white/15 pl-4 hidden xl:inline">
              Mon - Sat: 7:00 AM - 7:00 PM
            </span>
          </div>

        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/80' 
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a href="#hero" className="flex items-center group">
              <DomestoLogo size="md" />
            </a>

            {/* Streamlined Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-domesto-azure hover:bg-slate-100/80 text-sm font-semibold transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2 text-domesto-navy font-bold text-sm px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-domesto-navy hover:text-white border border-slate-200/80 hover:border-domesto-navy transition-all duration-200 group"
                title="Call Us 03 8824 0742"
              >
                <Phone className="w-4 h-4 text-domesto-azure group-hover:text-domesto-lime transition-colors" />
                <span>Call Us</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-brand rounded-xl shadow-md hover:shadow-sky-500/25 hover:scale-[1.03] active:scale-95 transition-all duration-200 group overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-domesto-gold" />
                  <span>Book Now</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-domesto-navy" /> : <Menu className="w-6 h-6 text-domesto-navy" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            
            {/* Quick NDIS Badge in Mobile */}
            <div className="flex items-center gap-2 px-3 py-2 mb-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>NDIS Registered Supplier Melbourne</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-domesto-azure py-2.5 px-3 rounded-xl hover:bg-sky-50/70 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-300 font-bold text-domesto-navy hover:bg-slate-50 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-domesto-azure" />
                <span>Call Us: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-slate-100 text-slate-700 font-medium text-xs text-center hover:bg-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-domesto-azure" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-brand text-white font-bold shadow-lg text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-domesto-gold" />
                <span>Book a Service Now</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};

