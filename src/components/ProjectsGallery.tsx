import React, { useState } from 'react';
import { PROJECTS } from '../data/domestoData';
import { Eye, MapPin } from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Home Cleaning',
    'Carpet Cleaning',
    'Garden Maintenance',
    'Commercial Cleaning',
    'Property Maintenance',
    'Pressure Cleaning'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-domesto-azure">Portfolio Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-domesto-navy tracking-tight">
            Our Recent Work
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore recent home, outdoor, and commercial property care results across Melbourne.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-domesto-navy text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-domesto-navy text-xs font-bold">
                  {project.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-xs text-domesto-gold mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.suburb}</span>
                  </div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 text-xs leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-sky-50 text-sky-800 text-[11px] font-medium border border-sky-100">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(project.category)}
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-domesto-navy font-bold text-xs hover:bg-gradient-brand hover:text-white hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Book Similar Work</span>
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
