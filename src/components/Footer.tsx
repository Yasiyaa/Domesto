import React from 'react';
import { Phone, Smartphone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { DomestoLogo } from './DomestoLogo';
import { BUSINESS_INFO } from '../data/domestoData';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLegalModal }) => {
  return (
    <footer className="bg-domesto-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <DomestoLogo variant="light" size="md" />
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Domesto Home Services is Melbourne's trusted provider of professional cleaning, gardening, handyman maintenance, carpet extraction, and caretaker services.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NDIS Registered Provider</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((network, idx) => (
                <a
                  key={idx}
                  href="#hero"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-domesto-azure text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition-all"
                  aria-label={`Follow on ${network}`}
                >
                  {network[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              {['Home', 'About Us', 'Services', 'Pricing', 'Our Team', 'Projects', 'Testimonials', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-domesto-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Our Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                'Domestic Cleaning',
                'Ground Maintenance & Lawn Mowing',
                'Carpet Cleaning',
                'Home Maintenance & Handyman',
                'Caretaker & NDIS Services',
                'Furniture & Upholstery Cleaning',
                'Commercial Office Cleaning',
                'High Pressure Cleaning',
                'Gutter Clearing'
              ].map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onOpenBooking(svc)}
                    className="hover:text-domesto-gold transition-colors text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact Details</h4>
            
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2.5 hover:text-domesto-gold transition-colors"
                title="Office Phone"
              >
                <Phone className="w-4 h-4 text-domesto-azure flex-shrink-0" />
                <span className="font-bold text-white text-sm">{BUSINESS_INFO.phone}</span>
                <span className="text-[10px] text-slate-400">(Landline)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.mobileClean}`}
                className="flex items-center gap-2.5 hover:text-domesto-gold transition-colors"
                title="Mobile Phone"
              >
                <Smartphone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-bold text-white text-sm">{BUSINESS_INFO.mobile}</span>
                <span className="text-[10px] text-emerald-400">(Mobile)</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-domesto-azure flex-shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-domesto-azure flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 rounded-xl bg-gradient-brand text-white font-bold text-xs shadow-md hover:brightness-110 transition-all text-center mt-2"
            >
              Book Service Online
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Domesto Home Services. All rights reserved. Melbourne, Victoria, Australia.</p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegalModal('Privacy Policy', 'Domesto Home Services respects your privacy. All personal data collected via booking forms or contact requests is securely handled in compliance with Australian Privacy Principles.')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('Terms & Conditions', 'Service bookings are subject to availability and scope confirmation. Standard hourly rates apply unless custom quotes are agreed upon.')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('Cookie Policy', 'This website uses standard functional cookies to optimize user navigation and store booking session state.')}
              className="hover:text-slate-200 transition-colors"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('Accessibility Statement', 'Domesto is committed to accessible design for all clients, including NDIS participants and screen-reader users.')}
              className="hover:text-slate-200 transition-colors"
            >
              Accessibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
