import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from './Link';

interface BottomCTAProps {
  onOpenHireModal: () => void;
  onOpenScheduleModal: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenHireModal }) => {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded CTA Card matching Image 1 */}
        <div
          className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden py-16 sm:py-24 px-6 sm:px-12 lg:px-16 text-center shadow-2xl bg-[#0D1F24]"
          style={{
            backgroundImage: `url('/images/ready-to-find-1.webp')`,
            backgroundPosition: 'center 28%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          {/* Dark Vignette Tint Overlay matching screenshot */}
          <div className="absolute inset-0 bg-[#0c1f26]/75 backdrop-blur-[0.5px] z-0 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Cyan "Get in Touch" label */}
            <span className="text-[#10ACCF] font-medium text-[15px] sm:text-[16px] mb-4 block tracking-normal">
              Get in Touch
            </span>

            {/* Headline with serif italic emphasis */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.16] mb-6 font-sans">
              Ready to find your next{' '}
              <span className="font-serif italic font-normal text-white">Superstar?</span>
            </h2>

            {/* Body copy matching Image 1 */}
            <p className="text-[#e2e8f0] text-sm sm:text-[16px] leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
              Speak with a Recruiter to help you find the right solution today. Every client has a customized
              cost structure based on their business size, market, location, and unique hiring needs. Please call{' '}
              <a href="tel:18005135096" className="text-white hover:underline">
                1-800-513-5096
              </a>{' '}
              or email us to request a detailed quote & contract.
            </p>

            {/* Cyan Pill Button: "Hire today" + circle arrow matching Image 1 */}
            <Link
              href="#hire-talent"
              id="bottom-hire-today-btn"
              onClick={(e) => {
                e.preventDefault();
                onOpenHireModal();
              }}
              className="group inline-flex items-center space-x-3.5 bg-[#10ACCF] hover:bg-[#0dbadb] active:scale-95 text-white font-medium pl-7 pr-2.5 py-2.5 rounded-full text-[16px] shadow-[0_0_25px_rgba(16,172,207,0.35)] transition-all duration-200 cursor-pointer"
            >
              <span className="leading-none">Hire today</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-xs">
                <ArrowRight className="w-4 h-4 text-[#132930]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


