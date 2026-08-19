import React from 'react';
import { EXPERTISE_AREAS } from '../data/mockData';
import { ExpertiseItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ExpertiseGridProps {
  onSelectExpertise: (item: ExpertiseItem) => void;
  onOpenHireModal: (roleTitle?: string) => void;
}

export const ExpertiseGrid: React.FC<ExpertiseGridProps> = ({
  onSelectExpertise,
  onOpenHireModal,
}) => {
  // Top 4 Hero Expertise Categories matching HTML
  const primaryCards = EXPERTISE_AREAS.slice(0, 4);
  const secondaryCards = EXPERTISE_AREAS.slice(4);

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132930] tracking-tight leading-[1.18] font-sans">
            Our Areas of{' '}
            <span className="font-serif italic font-normal text-[#132930]">Expertise</span>
          </h2>
          <p className="mt-3 text-[#64748B] text-base sm:text-lg">
            Specialized recruitment divisions tailored to the nuances of every hospitality vertical.
          </p>
        </div>

        {/* Primary 4 Cards matching Home 2 Hero Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {primaryCards.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectExpertise(item)}
              className="group relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#132930] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Background Image with lazy load */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#132930] via-[#132930]/40 to-transparent group-hover:from-[#132930]/95 transition-all"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.roles.length} Specialties
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#10ACCF] transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#10ACCF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-[#10ACCF] font-semibold">
                    <span>Avg Fill: {item.avgPlacementTime}</span>
                    <span className="underline group-hover:no-underline">Explore &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Vertical Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {secondaryCards.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectExpertise(item)}
              className="group relative rounded-[18px] overflow-hidden aspect-[4/3] bg-[#132930] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-75"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132930]/90 via-[#132930]/50 to-transparent"></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-end text-center">
                <span className="text-xs font-bold text-white leading-tight group-hover:text-[#10ACCF] transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

