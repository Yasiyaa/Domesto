import React from 'react';
import { Flame, ArrowRight, Star } from 'lucide-react';
import { SERVICES } from '../data/domestoData';

interface PopularServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PopularServices: React.FC<PopularServicesProps> = ({ onOpenBooking }) => {
  const popularList = SERVICES.filter((s) => s.popular);

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0F294A] via-[#1D4679] to-[#0B1E36] relative overflow-hidden text-white border-y border-white/10">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-domesto-lime/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#1D4679]/40 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-domesto-lime/20 border border-domesto-lime/35 text-domesto-lime text-xs font-black uppercase tracking-wider mb-3 shadow-md">
              <Flame className="w-4 h-4 text-domesto-lime" />
              <span>Customer Favorites</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Our Most Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-domesto-lime via-emerald-300 to-white">Services</span>
            </h2>
          </div>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
            Top-rated home & property solutions requested daily by homeowners and property managers across Greater Melbourne.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularList.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenBooking(service.name)}
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-5 border border-white/15 hover:border-domesto-lime/60 shadow-xl hover:shadow-domesto-lime/10 hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-5 group cursor-pointer"
            >
              {/* Service Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/15 relative flex-shrink-0 shadow-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-2 left-2 p-1.5 rounded-lg bg-slate-950/70 text-domesto-lime">
                  <Star className="w-3.5 h-3.5 fill-domesto-lime text-domesto-lime" />
                </div>
              </div>

              {/* Service Details */}
              <div className="flex-1 min-w-0 space-y-2">
                <span className="text-[10px] font-extrabold text-domesto-lime uppercase tracking-widest block">
                  {service.category}
                </span>

                <h3 className="font-extrabold text-white text-lg sm:text-xl truncate group-hover:text-domesto-lime transition-colors">
                  {service.name}
                </h3>

                {service.startingPrice && (
                  <p className="text-xs font-black text-slate-200">
                    {service.startingPrice}
                  </p>
                )}

                <div className="pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(service.name);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-xl bg-gradient-lime text-slate-950 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

