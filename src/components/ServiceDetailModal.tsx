import React from 'react';
import { X, CheckCircle, Calendar, Phone } from 'lucide-react';
import type { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/domestoData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-4 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/50 text-white hover:bg-slate-900/80 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-44 sm:h-48 w-full flex-shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-domesto-navy text-domesto-lime border border-domesto-lime/30 text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
              {service.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">{service.name}</h2>
            {service.startingPrice && (
              <p className="text-domesto-lime font-bold text-xs mt-0.5">{service.startingPrice}</p>
            )}
          </div>
        </div>

        {/* Modal Body - Scrollable content if needed */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
          <div>
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">Service Overview</h3>
            <p className="text-slate-700 text-sm leading-relaxed">{service.fullDesc}</p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">What's Included in This Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.includes.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <CheckCircle className="w-3.5 h-3.5 text-[#8AC53E] flex-shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-1 text-domesto-navy font-bold text-xs hover:text-[#8AC53E] transition-colors"
                title="Call Office Landline"
              >
                <Phone className="w-3.5 h-3.5 text-domesto-navy" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <span className="text-slate-300">•</span>

              <a
                href={`tel:${BUSINESS_INFO.mobileClean}`}
                className="flex items-center gap-1 text-emerald-600 font-bold text-xs hover:text-emerald-700 transition-colors"
                title="Call Mobile Direct"
              >
                <span>{BUSINESS_INFO.mobile}</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookService(service.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-lime text-slate-950 font-black text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Service Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

