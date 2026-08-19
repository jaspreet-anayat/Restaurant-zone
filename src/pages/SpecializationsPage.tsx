import React from 'react';
import { 
  Building2, 
  UtensilsCrossed, 
  Wine, 
  Landmark, 
  Plane, 
  Ship, 
  Ticket, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Phone,
  Flame,
  Coffee,
  Store
} from 'lucide-react';

interface SpecializationsPageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const SpecializationsPage: React.FC<SpecializationsPageProps> = ({ onOpenHireModal, onOpenScheduleModal }) => {
  const specializations = [
    {
      id: 'restaurants-bars',
      title: 'Restaurants & Bars',
      icon: UtensilsCrossed,
      tagline: 'Single & Multi-Unit Concepts, Gastro Pubs & Taprooms',
      description: 'From bustling neighborhood brasseries to multi-concept dining corporations, we place high-energy General Managers, Assistant GMs, Beverage Directors, and Kitchen Managers.',
      roles: ['General Manager', 'Assistant GM', 'Floor Manager', 'Bar Manager', 'Kitchen Manager'],
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/restaurant-recruiting.jpg',
    },
    {
      id: 'hotels-resorts',
      title: 'Hotels & Resorts',
      icon: Building2,
      tagline: 'Luxury Lodging, Boutique Properties & Destination Resorts',
      description: 'Comprehensive leadership recruitment for 4-star and 5-star lodging properties. We place General Managers, Directors of Food & Beverage, and Executive Housekeepers.',
      roles: ['Hotel GM', 'Director of F&B', 'Executive Housekeeper', 'Director of Sales', 'Front Office Manager'],
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/hotel-recruiting.jpg',
    },
    {
      id: 'private-clubs',
      title: 'Country Clubs & Private Clubs',
      icon: Trophy,
      tagline: 'Golf, Yacht, Tennis & Member-Exclusive Associations',
      description: 'Discreet recruitment catering to demanding member boards, golf superintendents, master culinary teams, and luxury banquet directors.',
      roles: ['Club General Manager', 'Clubhouse Manager', 'Executive Chef', 'Banquet Director', 'Membership Director'],
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'fine-dining',
      title: 'Fine Dining & Michelin Concepts',
      icon: Wine,
      tagline: 'Tasting Menus, Haute Cuisine & Award-Winning Cellars',
      description: 'White-glove headhunting for acclaimed tasting menu establishments, certified Master Sommeliers, Maitre d\'s, and Michelin-pedigree chefs.',
      roles: ['Head Sommelier', 'Maitre d\'', 'Executive Chef', 'Pastry Chef', 'Service Director'],
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/fine-dining-hiring.jpg',
    },
    {
      id: 'franchises',
      title: 'Franchise Groups & QSR',
      icon: Flame,
      tagline: 'Multi-Unit Portfolios & High-Speed Drive-Thru Operations',
      description: 'Rapid, high-volume leadership staffing for multi-unit franchise operators. We place Store Managers, Area Coaches, and District Managers who boost speed and EBITDA.',
      roles: ['District Manager', 'Franchise GM', 'Area Coach', 'Multi-Unit VP', 'Director of Training'],
      image: 'https://therestaurantzone.com/wp-content/uploads/2024/07/fast-foods-recruiting-1-300x200-1.webp',
    },
    {
      id: 'casinos-gaming',
      title: 'Casinos & Gaming Resorts',
      icon: Landmark,
      tagline: 'Integrated Resorts, Tribal Gaming & Entertainment Complex',
      description: 'High-volume culinary and VIP hospitality staffing for tier-one casino floors, 24/7 dining operations, luxury buffets, and entertainment suites.',
      roles: ['Casino F&B VP', 'Executive Buffet Chef', 'VIP Lounge Manager', 'Nightlife Director'],
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'airlines-airports',
      title: 'Airlines & Airport Concessions',
      icon: Plane,
      tagline: 'Terminal Concessions, First-Class Lounges & Flight Catering',
      description: 'Sourcing badge-cleared leadership for high-volume airport terminal concessions, airline hospitality lounges, and in-flight catering commissaries.',
      roles: ['Airport Concessions GM', 'Lounge Operations Manager', 'Flight Commissary Director'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cruises-travel',
      title: 'Cruise Lines & Maritime Tourism',
      icon: Ship,
      tagline: 'Luxury Ocean Cruises, River Cruises & Tour Operators',
      description: 'Maritime and destination hospitality directors, fleet culinary superintendents, and guest experience managers worldwide.',
      roles: ['Hotel Director', 'Fleet Executive Chef', 'Beverage Manager', 'Guest Relations Lead'],
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'theme-parks',
      title: 'Theme Parks & Attractions',
      icon: Ticket,
      tagline: 'Amusement Parks, Aquariums & High-Capacity Venues',
      description: 'High-volume guest flow and dining management for major theme parks, entertainment complexes, and multi-attraction destinations.',
      roles: ['Park F&B Director', 'Operations Area Manager', 'Catering & Event Supervisor'],
      image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'corporate-dining',
      title: 'Corporate Dining & Higher Ed',
      icon: Coffee,
      tagline: 'Tech Campus Dining, University Dining Halls & B&I',
      description: 'Contract food service leaders managing enterprise client cafeterias, executive dining rooms, and high-volume university dining facilities.',
      roles: ['Resident Dining Director', 'Executive Chef B&I', 'Catering Manager', 'Dietary Director'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'retail-grocery',
      title: 'Retail & Specialty Grocery Dining',
      icon: Store,
      tagline: 'Prepared Foods, Food Halls & Gourmet Markets',
      description: 'Recruiting for upscale gourmet grocers, food hall management teams, and retail hybrid hospitality spaces.',
      roles: ['Prepared Foods Director', 'Food Hall General Manager', 'Bakery Operations Lead'],
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'spa-wellness',
      title: 'Spa & Wellness Resorts',
      icon: Sparkles,
      tagline: 'Destination Spas, Wellness Retreats & Health Clubs',
      description: 'Spa directors, wellness operations managers, and organic spa culinary directors focused on holistic guest journeys.',
      roles: ['Spa Director', 'Wellness Coordinator', 'Retreat General Manager'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-[#132930] py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#10ACCF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>14 Specialized Industry Sectors</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6 font-sans">
              Specialized Recruiting Across All <span className="font-serif italic font-normal text-white">Hospitality Sectors</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              We do not treat a luxury resort the same as a high-volume QSR drive-thru. Our specialized recruiting pods understand the unique operational metrics, compliance standards, and cultural requirements of each sector.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] cursor-pointer"
              >
                Hire in Your Sector
              </button>
              <button
                onClick={onOpenScheduleModal}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={spec.id}
                  className="bg-white rounded-[26px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={spec.image} 
                        alt={spec.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#132930] via-[#132930]/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-5 right-5 text-white flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#10ACCF] flex items-center justify-center flex-shrink-0 shadow-md">
                          <IconComp className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-bold font-sans">{spec.title}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] font-bold text-[#10ACCF] uppercase tracking-wider block mb-2">
                        {spec.tagline}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {spec.description}
                      </p>

                      <div className="border-t border-slate-100 pt-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          Common Placements:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {spec.roles.map((r, ri) => (
                            <span key={ri} className="bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 rounded-md font-medium">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onOpenHireModal(spec.title)}
                      className="w-full bg-[#132930] group-hover:bg-[#10ACCF] text-white font-bold py-2.5 rounded-full text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Request {spec.title} Candidates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100-Day Risk-Free Callout */}
      <section className="py-16 bg-[#132930] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-7 h-7 text-[#10ACCF]" />
          </div>
          <h2 className="text-3xl font-bold mb-3 font-sans">
            Guaranteed Placements in All 14 Sectors
          </h2>
          <p className="text-[#DADADA] text-sm max-w-xl mx-auto mb-8">
            Every candidate placed across any specialization is backed by our full 100-Day Free Replacement Guarantee and 20-Point Background Screening.
          </p>
          <button
            onClick={() => onOpenHireModal()}
            className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md cursor-pointer"
          >
            Start Your Search Today
          </button>
        </div>
      </section>
    </div>
  );
};
