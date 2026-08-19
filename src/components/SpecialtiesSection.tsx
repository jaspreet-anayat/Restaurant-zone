import React, { useState } from 'react';
import { Wine, Utensils, BedDouble, Building2, Users } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/mockData';
import ourSpecialitiesImage from '../assets/images/our-specialities.webp';
import { SpecialtyItem } from '../types';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  onOpenHireModal: (role?: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
}) => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>('restaurants');

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case 'private-clubs':
        return <Wine className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />;
      case 'restaurants':
        return <Utensils className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />;
      case 'hotels-resorts':
        return <BedDouble className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />;
      case 'senior-living':
        return <Building2 className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />;
      case 'other-hospitality':
      default:
        return <Users className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />;
    }
  };

  return (
    <section id="specialties" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Descriptive Copy matching Image 4 */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#132930] tracking-tight leading-[1.18]">
              Make our Specialties – finding <br className="hidden sm:block" />
              great hospitality talent is{' '}
              <span className="font-serif italic font-normal text-[#132930]">tough.</span>
            </h2>

            <div className="space-y-5 text-[#212529] text-base sm:text-[17px] leading-relaxed">
              <p>
                Post-COVID, the hospitality recruiting market is 75% more{' '}
                <strong className="font-bold text-black">competitive</strong> than it’s been in the last decade, while turnover rates have soared to 65%. Restaurant Recruiters and Restaurant Headhunter teams are working harder than ever to meet the demand.
              </p>

              <p>
                Who can afford the time and money it takes to find the right candidates, conduct interviews, and hope it won’t have to be done all over again next week? That’s where a Restaurant Staffing Agency comes in.Hiring for Restaurants has never been more challenging, but with the right support, it doesn’t have to be overwhelming.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Image with Overlaid Floating Specialties Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Hospitality Image: Waiter Serving Burger Platters */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={ourSpecialitiesImage}
                  alt="Hospitality Waiter Serving Customers"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating "Our Specialities" Card matching exact Image 4 */}
              <div className="sm:absolute sm:-bottom-6 sm:-left-8 sm:max-w-[290px] w-full mt-6 sm:mt-0 bg-white rounded-[24px] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.12)] z-20 border border-slate-100">
                <h3 className="font-bold text-[#132930] text-[20px] tracking-tight mb-4 font-sans">
                  Our Specialities
                </h3>

                <ul className="space-y-2.5">
                  {SPECIALTIES_DATA.map((spec) => (
                    <li key={spec.id}>
                      <button
                        onClick={() => {
                          setActiveSpecialtyId(spec.id);
                          onSelectSpecialty(spec);
                        }}
                        className={`w-full text-left flex items-center space-x-3 text-[14.5px] py-1 px-1.5 rounded-lg transition-all cursor-pointer ${
                          activeSpecialtyId === spec.id
                            ? 'text-[#132930] font-semibold'
                            : 'text-[#132930] hover:text-[#10ACCF] font-normal'
                        }`}
                      >
                        <div className="flex-shrink-0 text-[#10ACCF]">
                          {getSpecialtyIcon(spec.id)}
                        </div>
                        <span className="leading-tight">{spec.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

