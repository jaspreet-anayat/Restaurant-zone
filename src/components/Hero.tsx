import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from './Link';

interface HeroProps {
  onOpenHireModal: () => void;
  onOpenScheduleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[660px] sm:min-h-[720px] lg:min-h-[780px] flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 overflow-hidden bg-[#132930]"
      style={{
        backgroundImage: `url('/images/hospitality-recruiting-solutions.png')`,
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        {/* Main Headline (One line on desktop) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 lg:whitespace-nowrap">
          Hire Top Talent — Fast and Easy
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-[17px] text-slate-200 font-normal leading-relaxed max-w-[680px] mb-7 sm:mb-8 tracking-normal px-2">
          Get pre-screened, qualified, and reliable candidates delivered to your inbox in 10 days or less — specializing in restaurants &amp; bars, hotels &amp; resorts, casinos, franchises, retail &amp; grocery and more.
        </p>

        {/* Call to Action Link */}
        <div className="flex flex-col items-center space-y-3">
          <Link
            href="#hire-talent"
            id="hero-hire-now-btn"
            onClick={(e) => {
              e.preventDefault();
              onOpenHireModal();
            }}
            className="group inline-flex items-center space-x-3.5 bg-[#10ACCF] hover:bg-[#0ea1c2] active:scale-95 text-white font-bold pl-7 pr-2 py-2 rounded-full text-base sm:text-lg shadow-[0_4px_20px_rgba(16,172,207,0.35)] hover:shadow-[0_4px_25px_rgba(16,172,207,0.55)] transition-all duration-200 cursor-pointer"
          >
            <span className="font-semibold text-[17px] pr-1">Hire Now</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-sm">
              <ArrowRight className="w-4 h-4 text-[#132930] stroke-[2.5]" />
            </div>
          </Link>

          {/* Slogan underneath */}
          <span className="text-xs sm:text-[14px] text-slate-300 font-normal tracking-wide pt-1">
            Top Talent. Fast Results. Zero Hassle.
          </span>
        </div>
      </div>

      {/* 5-Metric Floating Glassmorphic Stats Container Card */}
      <div id="stats" className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14">
        <div 
          className="backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl"
          style={{ backgroundColor: 'rgb(255 255 255 / 0.07)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {/* Stat 1 */}
            <div className="text-center px-3 py-2 flex flex-col justify-center items-center">
              <div className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-none mb-2">
                91%
              </div>
              <div className="text-xs sm:text-[13px] text-slate-200 font-normal leading-snug">
                Hired were presented within 14<br className="hidden sm:inline" /> days
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center px-3 py-2 flex flex-col justify-center items-center">
              <div className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-none mb-2">
                8,520
              </div>
              <div className="text-xs sm:text-[13px] text-slate-200 font-normal leading-snug">
                Hired and counting<br className="hidden sm:inline" /> (Since 2014)
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center px-3 py-2 flex flex-col justify-center items-center">
              <div className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-none mb-2">
                15
              </div>
              <div className="text-xs sm:text-[13px] text-slate-200 font-normal leading-snug">
                Time-to-Fill Average<br className="hidden sm:inline" /> Days
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center px-3 py-2 flex flex-col justify-center items-center">
              <div className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-none mb-2">
                4.9
              </div>
              <div className="text-xs sm:text-[13px] text-slate-200 font-normal leading-snug">
                Out of 5-stars on Google<br className="hidden sm:inline" /> reviews!
              </div>
            </div>

            {/* Stat 5 */}
            <div className="col-span-2 md:col-span-1 text-center px-3 py-2 flex flex-col justify-center items-center pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-none mb-2">
                67%
              </div>
              <div className="text-xs sm:text-[13px] text-slate-200 font-normal leading-snug">
                Searches from repeat<br className="hidden sm:inline" /> clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

