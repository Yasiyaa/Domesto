import React, { useState } from 'react';
import { 
  Sparkles, Building2, Layers, Grid, Trees, Zap, 
  ShieldAlert, Wrench, Armchair, HeartHandshake,
  ArrowRight, Eye
} from 'lucide-react';
import { SERVICES } from '../data/domestoData';
import type { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesGridProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Building2': return Building2;
      case 'Layers': return Layers;
      case 'Grid': return Grid;
      case 'Trees': return Trees;
      case 'Zap': return Zap;
      case 'ShieldAlert': return ShieldAlert;
      case 'Wrench': return Wrench;
      case 'Armchair': return Armchair;
      case 'HeartHandshake': return HeartHandshake;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D4679]/10 border border-[#1D4679]/20 text-[#1D4679] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8AC53E]" />
            <span>Complete Home Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-domesto-navy tracking-tight">
            Our Professional Services
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Everything your home needs, delivered by verified professionals across Greater Melbourne. Click any service to view full details.
          </p>
        </div>

        {/* Clean Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md text-domesto-navy flex items-center justify-center shadow-lg group-hover:bg-[#8AC53E] group-hover:text-slate-950 transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Price Tag */}
                  {service.startingPrice && (
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-domesto-lime text-xs font-black border border-white/20 shadow-md">
                      {service.startingPrice}
                    </div>
                  )}

                  {/* Category Badge & Title Overlay inside image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-extrabold text-domesto-lime uppercase tracking-widest block mb-1">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-domesto-lime transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Bottom Interactive Card Prompt Bar */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-sky-50/60 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 group-hover:text-domesto-navy">
                    <Eye className="w-4 h-4 text-domesto-navy" />
                    <span>View Service Details & Pricing</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-domesto-navy group-hover:bg-[#1D4679] group-hover:text-white group-hover:border-[#1D4679] transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(name) => onOpenBooking(name)}
      />
    </section>
  );
};

