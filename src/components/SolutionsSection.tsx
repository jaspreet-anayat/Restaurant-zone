import React from 'react';
import { Clock, Sun, TrendingUp, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/mockData';

interface SolutionsSectionProps {
  onOpenHireModal: (solutionType?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenHireModal }) => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#F8F8F8] border-y border-slate-200/70 relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#10ACCF] font-bold text-sm sm:text-base tracking-wider uppercase inline-block font-sans">
            Staffing Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#132930] tracking-tight leading-[1.18] font-sans">
            Imagine Saying Goodbye to{' '}
            <span className="font-serif italic font-normal text-[#132930]">Staffing Headaches.</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            RestaurantZone's recruiting solutions make it easy for you to keep your business full of top-notch hospitality talent.
          </p>
        </div>

        {/* 3 Pillars / Feature Cards Grid matching Home 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mb-20">
          {/* Card 1: Hire Faster */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-[#10ACCF]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Icon Container with Navy/Cyan accent */}
              <div className="w-14 h-14 rounded-2xl bg-[#132930] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                <Clock className="w-7 h-7 text-[#10ACCF] stroke-[2.2]" />
              </div>

              <h3 className="text-2xl font-bold text-[#132930] tracking-tight mb-3 font-sans">
                Hire Faster
              </h3>

              <p className="text-[#64748B] text-base leading-relaxed mb-6">
                Find the right candidates within 14 days—up to 60 days faster than other recruiting agencies.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#10ACCF] bg-[#10ACCF]/10 px-3 py-1 rounded-full">
                15-Day Average Fill
              </span>
              <button
                onClick={() => onOpenHireModal('Hire Faster')}
                className="text-xs font-bold text-[#132930] hover:text-[#10ACCF] flex items-center space-x-1 cursor-pointer transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Hire Better */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-[#10ACCF]/50 transition-all duration-300 flex flex-col justify-between group relative">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#10ACCF] text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              20-Point Vetting
            </div>

            <div>
              {/* Icon Container with Cyan accent */}
              <div className="w-14 h-14 rounded-2xl bg-[#132930] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                <Sun className="w-7 h-7 text-[#10ACCF] stroke-[2.2]" />
              </div>

              <h3 className="text-2xl font-bold text-[#132930] tracking-tight mb-3 font-sans">
                Hire Better
              </h3>

              <p className="text-[#64748B] text-base leading-relaxed mb-6">
                Our 20-point screening process weeds out bad fits so you only interview the highest quality candidates.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#10ACCF] bg-[#10ACCF]/10 px-3 py-1 rounded-full">
                Top 3% Talent Only
              </span>
              <button
                onClick={() => onOpenHireModal('Hire Better')}
                className="text-xs font-bold text-[#132930] hover:text-[#10ACCF] flex items-center space-x-1 cursor-pointer transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Hire Smarter */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-[#10ACCF]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Icon Container with Navy/Cyan accent */}
              <div className="w-14 h-14 rounded-2xl bg-[#132930] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                <TrendingUp className="w-7 h-7 text-[#10ACCF] stroke-[2.2]" />
              </div>

              <h3 className="text-2xl font-bold text-[#132930] tracking-tight mb-3 font-sans">
                Hire Smarter
              </h3>

              <p className="text-[#64748B] text-base leading-relaxed mb-6">
                Eliminate risk with our 100-Day Guarantee—if our candidates don't work out, we'll replace them free.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#10ACCF] bg-[#10ACCF]/10 px-3 py-1 rounded-full">
                100-Day Free Replacement
              </span>
              <button
                onClick={() => onOpenHireModal('Hire Smarter')}
                className="text-xs font-bold text-[#132930] hover:text-[#10ACCF] flex items-center space-x-1 cursor-pointer transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tailored Product Solutions Section */}
        <div className="mt-16 bg-[#132930] rounded-[30px] p-8 sm:p-12 text-white shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#10ACCF] font-bold text-xs sm:text-sm uppercase tracking-wider">
              Tailored Models
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Discover Our Flexible Staffing & Recruiting Packages
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-[#1A3842] border border-white/10 rounded-[20px] p-5 flex flex-col justify-between hover:border-[#10ACCF]/70 transition-all group"
              >
                <div className="space-y-3">
                  {item.tag && (
                    <span className="inline-block text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#10ACCF]/20 text-[#10ACCF]">
                      {item.tag}
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-white group-hover:text-[#10ACCF] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenHireModal(item.title)}
                    className="w-full bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-2 rounded-full text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

