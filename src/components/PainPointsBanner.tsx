import React from 'react';
import { PhoneCall, Building2, Clock, SearchCheck, UserX, ArrowUpRight } from 'lucide-react';

interface PainPointsBannerProps {
  onOpenScheduleModal: () => void;
  onOpenHireModal: (topic?: string) => void;
}

export const PainPointsBanner: React.FC<PainPointsBannerProps> = ({
  onOpenScheduleModal,
  onOpenHireModal,
}) => {
  const cards = [
    {
      id: '1',
      icon: <Building2 className="w-5 h-5 text-[#10ACCF]" />,
      title: 'Are you struggling to fill roles?',
      hint: 'Tap our proprietary database of 120,000+ pre-vetted hospitality professionals.',
    },
    {
      id: '2',
      icon: <Clock className="w-5 h-5 text-[#10ACCF]" />,
      title: 'Tired of having to work in your business and not on it?',
      hint: 'Reclaim executive focus while our team delivers interview-ready finalists.',
    },
    {
      id: '3',
      icon: <SearchCheck className="w-5 h-5 text-[#10ACCF]" />,
      title: 'Does finding high-quality candidates feel impossible?',
      hint: 'Only the top 3% pass our rigorous 20-point behavioral & background screening.',
    },
    {
      id: '4',
      icon: <UserX className="w-5 h-5 text-[#10ACCF]" />,
      title: 'Frustrated with new hires leaving so soon?',
      hint: 'Our placements have an 89% 1-year retention rate with 100-day replacement.',
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Navy Rounded Container matching HTML #132930 */}
        <div className="bg-[#132930] rounded-[30px] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] font-sans">
                Our team would love to help you guys!
              </h2>

              <p className="text-[#DADADA] text-base sm:text-lg leading-relaxed">
                Connect directly with a dedicated hospitality recruiting specialist who understands the restaurant business inside and out.
              </p>

              <div>
                <button
                  id="schedule-call-banner-btn"
                  onClick={onOpenScheduleModal}
                  className="inline-flex items-center space-x-3 bg-[#10ACCF] hover:bg-[#0ea1c2] active:scale-95 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Schedule a Call</span>
                </button>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Question Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onOpenHireModal(card.title)}
                  className="group bg-[#1A3842] hover:bg-[#204552] border border-white/10 hover:border-[#10ACCF]/60 rounded-[20px] p-6 transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug tracking-tight group-hover:text-[#10ACCF] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="line-clamp-2">{card.hint}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#10ACCF] opacity-0 group-hover:opacity-100 transition-opacity ml-1 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

