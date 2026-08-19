import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Building2, 
  ChefHat, 
  Crown, 
  Wine, 
  Zap, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Phone,
  Search,
  Filter,
  DollarSign
} from 'lucide-react';

interface ServicesPageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenHireModal, onOpenScheduleModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const servicesList = [
    {
      id: 'restaurant-recruiting',
      category: 'restaurant',
      title: 'Restaurant Talent Acquisition',
      subtitle: 'Single-Unit, Multi-Unit & Group Dining Leadership',
      description: 'Comprehensive permanent placement for restaurant management. We headhunt top-performing General Managers, Assistant GMs, Kitchen Managers, and Floor Supervisors who drive revenue and lower employee turnover.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/restaurant-recruiting.jpg',
      sla: '10–14 Days',
      roles: ['General Manager', 'Assistant General Manager', 'Kitchen Manager', 'Service Manager', 'Bar Manager', 'Floor Supervisor'],
      benefits: ['Pre-screened P&L proficiency', 'Labor & food cost track record verified', '100-Day Replacement Guarantee'],
    },
    {
      id: 'hospitality-exec-search',
      category: 'executive',
      title: 'Hospitality Executive Search',
      subtitle: 'C-Suite, VP & Regional Directors',
      description: 'Retained executive search for growing hospitality groups, hotel management companies, and private equity-backed portfolio brands. We deliver transformational leaders with proven track records in scaling hospitality organizations.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/hospitality-executive-search-1-1024x683.webp',
      sla: '21–28 Days',
      roles: ['Chief Executive Officer (CEO)', 'VP of Operations', 'Chief Financial Officer (CFO)', 'VP of Food & Beverage', 'Regional Director of Operations', 'Director of Marketing'],
      benefits: ['Confidential executive headhunting', 'Rigorous board-level vetting', 'Tailored equity/comp packaging alignment'],
    },
    {
      id: 'chef-recruiting',
      category: 'culinary',
      title: 'Professional Chef Recruiting Services',
      subtitle: 'Michelin-Pedigree to High-Volume Culinary Masters',
      description: 'Find culinary visionaries who master menu development, kitchen culture, and cost efficiency. From luxury resort banquet chefs to acclaimed fine-dining Executive Chefs, our culinary scouts know talent inside and out.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/hire-a-chef.jpg-768x512.webp',
      sla: '14–18 Days',
      roles: ['Executive Chef', 'Head Chef', 'Chef de Cuisine', 'Executive Pastry Chef', 'Sous Chef', 'Corporate R&D Chef'],
      benefits: ['Practical tasting & portfolio assessment', 'Kitchen culture & staff retention track record', 'Food cost & vendor negotiation mastery'],
    },
    {
      id: 'hotel-recruiting',
      category: 'hotel',
      title: 'Hotel Staffing & Recruiting Services',
      subtitle: 'Boutique Hotels, Luxury Resorts & Lodging Groups',
      description: 'End-to-end recruitment for the hospitality and lodging industry. We place top-tier General Managers, Directors of Sales, Front Office Leaders, and Executive Housekeepers who elevate TripAdvisor and RevPAR metrics.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/hotel-recruiting.jpg',
      sla: '14–18 Days',
      roles: ['Hotel General Manager', 'Director of Sales & Marketing', 'Front Office Manager', 'Executive Housekeeper', 'Director of Engineering', 'Night Audit Lead'],
      benefits: ['Brand standards & PMS software mastery', 'RevPAR & guest satisfaction optimization', 'Immediate coverage capability'],
    },
    {
      id: 'fast-food-recruiting',
      category: 'restaurant',
      title: 'Quick Service Restaurant (QSR) Recruiting',
      subtitle: 'High-Volume Drive-Thru & Fast-Casual Staffing',
      description: 'Rapid, high-volume leadership recruitment for multi-unit franchisee operators and corporate QSR chains. We source resilient Store Managers and District Managers who excel in fast-paced operational environments.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/fast-foods-recruiting-1-300x200-1.webp',
      sla: '9–12 Days',
      roles: ['Store General Manager', 'Multi-Unit District Manager', 'Shift Supervisor', 'Area Operations Coach', 'Training General Manager'],
      benefits: ['High speed-to-hire turnaround', 'Franchise brand compliance assurance', 'Volume hiring discount structures'],
    },
    {
      id: 'fine-dining-recruiting',
      category: 'culinary',
      title: 'Fine Dining & Beverage Talent Recruiting',
      subtitle: 'Sommeliers, Maitre d\'s & Beverage Directors',
      description: 'Discreet, white-glove headhunting for elite dining rooms, wine-centric concepts, and luxury private clubs. We place certified sommeliers, mixologists, and hospitality veterans who deliver unforgettable service.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/fine-dining-hiring.jpg',
      sla: '14–20 Days',
      roles: ['Head Sommelier', 'Maitre d\' / Captain', 'Beverage Director', 'Lead Mixologist', 'Private Dining Director'],
      benefits: ['Court of Master Sommeliers certification verified', 'Michelin & Forbes 5-Star service standards', 'Discreet candidate approach'],
    },
    {
      id: 'franchise-recruiting',
      category: 'restaurant',
      title: 'Franchise Talent Acquisition',
      subtitle: 'Multi-Unit Scaling & Regional Leadership',
      description: 'Specialized recruiting for franchise owners expanding from 3 units to 50+ units. We deliver turnkey management teams that enable owners to step back from day-to-day operations and focus on strategic portfolio expansion.',
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/restaurantzone-hospitality-recruiting-3-1024x683.jpg',
      sla: '10–14 Days',
      roles: ['Multi-Unit Operator', 'District Manager', 'Franchise Director of Ops', 'New Unit Opening GM'],
      benefits: ['Franchise brand system experience', 'Multi-unit P&L mastery', 'Seamless onboarding support'],
    },
    {
      id: 'workforce-solutions',
      category: 'executive',
      title: 'Hospitality Workforce Solutions & RPO',
      subtitle: 'Custom Outsourced Talent Pipeline Programs',
      description: 'For rapid expansions, seasonal hotel peaks, or new market launches, our Recruitment Process Outsourcing (RPO) team acts as your dedicated in-house hospitality recruiting department at a fraction of the cost.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      sla: 'Continuous Pipeline',
      roles: ['Full Brand Staffing Pipeline', 'New Market Launch Teams', 'Seasonal Leadership Crews', 'Corporate Talent Teams'],
      benefits: ['Dedicated recruiter embedding', 'Proprietary ATS & candidate database access', 'Predictable monthly billing'],
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header Banner */}
      <section className="bg-[#132930] py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#10ACCF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Hospitality Staffing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6 font-sans">
              Our Hospitality <span className="font-serif italic font-normal text-white">Recruiting Services</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              From independent farm-to-table bistros to 500-room luxury resorts, RestaurantZone provides tailored talent acquisition solutions backed by 11+ years of hospitality recruiting mastery.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] cursor-pointer"
              >
                Request Candidates Now
              </button>
              <button
                onClick={onOpenScheduleModal}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors cursor-pointer"
              >
                Speak with a Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-3 py-1">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
            <Filter className="w-4 h-4 text-[#10ACCF]" />
            <span>Category:</span>
          </div>
          <div className="flex items-center space-x-2">
            {[
              { id: 'all', label: 'All Services (8)' },
              { id: 'restaurant', label: 'Restaurants & QSR' },
              { id: 'culinary', label: 'Chefs & Culinary' },
              { id: 'hotel', label: 'Hotels & Resorts' },
              { id: 'executive', label: 'Executive Search & RPO' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#132930] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-[28px] border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow ${
                  index % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'
                }`}
              >
                {/* Image Col */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] shadow-md group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#132930]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-[#10ACCF]" />
                      <span>Avg SLA: {service.sla}</span>
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold text-[#10ACCF] uppercase tracking-wider block mb-1">
                      {service.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#132930] font-sans">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Roles Placed */}
                  <div>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Key Positions Placed:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.roles.map((r, ri) => (
                        <span key={ri} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-lg font-medium border border-slate-200/80">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Value points */}
                  <div className="space-y-2 pt-1 border-t border-slate-200">
                    {service.benefits.map((b, bi) => (
                      <div key={bi} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="pt-2 flex items-center space-x-4">
                    <button
                      onClick={() => onOpenHireModal(service.title)}
                      className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-sm cursor-pointer"
                    >
                      <span>Hire for {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onOpenScheduleModal}
                      className="text-xs font-semibold text-slate-700 hover:text-[#10ACCF] transition-colors cursor-pointer"
                    >
                      Request Rate Sheet &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 100-Day Guarantee Callout */}
      <section className="py-16 bg-[#132930] text-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-[#10ACCF]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">
            Every Search Is Backed By Our <span className="font-serif italic font-normal text-white">100-Day Replacement Guarantee</span>
          </h2>
          <p className="text-[#DADADA] text-base max-w-2xl mb-8 leading-relaxed">
            If any candidate placed through RestaurantZone leaves or fails to meet expectations within 100 calendar days, we restart the search and provide an immediate qualified replacement at zero additional charge.
          </p>
          <button
            onClick={() => onOpenHireModal()}
            className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-md cursor-pointer"
          >
            Start Your Search Risk-Free
          </button>
        </div>
      </section>
    </div>
  );
};
