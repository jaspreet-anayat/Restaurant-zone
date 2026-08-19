import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Award, 
  Clock, 
  Zap, 
  ArrowRight, 
  Phone, 
  Star, 
  Target,
  Sparkles,
  TrendingUp,
  Building2,
  FileCheck,
  Search,
  BadgeCheck
} from 'lucide-react';

interface WhyRzPageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const WhyRzPage: React.FC<WhyRzPageProps> = ({ onOpenHireModal, onOpenScheduleModal }) => {
  const vettingSteps = [
    { num: '01', title: 'Passive Sourcing & Identification', desc: 'Direct outreach to employed top 5% performers who are not browsing public job boards.' },
    { num: '02', title: 'Culinary & Leadership Background Check', desc: 'Detailed validation of P&L management, food & labor cost management, and volume track record.' },
    { num: '03', title: '20-Point Behavioral Interview', desc: 'Rigorous competency and cultural fit assessment by seasoned hospitality executive recruiters.' },
    { num: '04', title: 'Verified Reference Audits', desc: 'Direct supervisor reference verification speaking with former owners, GMs, and regional directors.' },
    { num: '05', title: 'Compensation & Relocation Alignment', desc: 'Ensuring total salary, bonus expectation, and schedule feasibility before client introduction.' },
    { num: '06', title: 'Guaranteed Presentation within 14 Days', desc: 'Interview-ready dossier with audio notes, verified resume, and custom interview guide.' },
  ];

  const comparisonTable = [
    { feature: 'Average Time to First Finalist', rz: '10–14 Days', traditional: '45–90 Days', jobBoards: 'Endless unqualified resumes' },
    { feature: 'Candidate Quality Filter', rz: 'Top 3% Pre-Screened', traditional: 'Unvetted resume forwarding', jobBoards: '95% unqualified applicants' },
    { feature: 'Replacement Warranty', rz: '100-Day Free Replacement', traditional: '30–60 Days with caveats', jobBoards: 'No guarantee / No refunds' },
    { feature: 'Hospitality Specialization', rz: '100% Exclusively Hospitality', traditional: 'Generalist recruiters', jobBoards: 'Generic algorithms' },
    { feature: 'Passive Candidate Outreach', rz: 'Dedicated Headhunters', traditional: 'Limited database queries', jobBoards: 'Passive applicants only' },
    { feature: 'Pre-Interview Screening', rz: '20-Point Rigorous Assessment', traditional: 'Basic 10-min phone call', jobBoards: 'None' },
  ];

  const leadershipTeam = [
    {
      name: 'Nelson Sanchez',
      role: 'Senior Executive Recruiter & Partner',
      experience: '14+ Years in Hospitality Search',
      bio: 'Specializes in C-Suite, Vice President of Operations, and Multi-Unit Director placements across national restaurant groups.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Francisco Medina',
      role: 'Director of Culinary & Chef Placement',
      experience: '12+ Years Executive Search',
      bio: 'Former fine-dining general manager and culinary talent scout placing Michelin-caliber Executive Chefs and Beverage Directors.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Wendy Alvarez',
      role: 'Head of Hotel & Resort Talent Acquisition',
      experience: '10+ Years Luxury Lodging',
      bio: 'Expert in boutique hospitality, resort operations leaders, and high-volume fast-casual management nationwide.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Banner matching brand dark navy */}
      <section className="bg-[#132930] py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-radial from-[#10ACCF]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#10ACCF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why RestaurantZone</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6">
              Over 11 Years of Connecting Top Hospitality Brands with <span className="font-serif italic font-normal text-white">Superstars</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              Founded in 2014, RestaurantZone was built to solve the #1 bottleneck in the hospitality industry: finding high-retention, qualified managers and chefs without wasting months on generic job boards.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] cursor-pointer"
              >
                Hire Hospitality Talent
              </button>
              <button
                onClick={onOpenScheduleModal}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors cursor-pointer"
              >
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillar Stats Grid */}
      <section className="py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#132930] mb-2 font-sans">120K+</div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Vetted Hospitality Network</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#10ACCF] mb-2 font-sans">10-14</div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Avg Days to Finalists</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#132930] mb-2 font-sans">89%</div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">1-Year Retention Rate</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center">
              <div className="text-4xl lg:text-5xl font-black text-[#10ACCF] mb-2 font-sans">100 Days</div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Free Replacement Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Difference */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#10ACCF] bg-[#10ACCF]/10 px-3.5 py-1.5 rounded-full">
                The RestaurantZone Difference
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] leading-tight font-sans">
                We Don't Just Post Ads. We <span className="font-serif italic font-normal text-[#132930]">Headhunt</span> Elite Performers.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional staffing agencies post job ads and hope someone qualified applies. RestaurantZone operates as a specialized retained search firm—we proactively headhunt the top 5% of passive managers, chefs, and directors who are currently excelling at top venues and not actively looking on job boards.
              </p>
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    <strong>Direct Access to 120,000+ Pre-Vetted Profiles:</strong> Built and curated over a decade of nationwide hospitality recruiting.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    <strong>Dedicated Hospitality Recruiters:</strong> Every recruiter on our team has direct restaurant, hotel, or culinary management backgrounds.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    <strong>100-Day Ironclad Guarantee:</strong> If a hire leaves or isn't the right fit within 100 days, we replace them immediately at zero additional charge.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#132930] rounded-[28px] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#10ACCF] flex items-center justify-center shadow-lg">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">100-Day Risk-Free Guarantee</h3>
                      <p className="text-xs text-[#DADADA]">Our confidence in quality</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#DADADA] leading-relaxed">
                    Hiring hospitality leaders is one of the highest-leverage decisions you make. We absorb the risk so you can scale with complete peace of mind.
                  </p>
                  <div className="bg-[#1A3842] p-5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">Replacement Window:</span>
                      <span className="font-bold text-white">Full 100 Days</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">Replacement Cost:</span>
                      <span className="font-bold text-[#10ACCF]">$0 (100% Free)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">Candidate Screening:</span>
                      <span className="font-bold text-white">20-Point Protocol</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenHireModal()}
                    className="w-full bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-3.5 rounded-full text-sm transition-all shadow-md cursor-pointer"
                  >
                    Start Hiring With 100-Day Protection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Point Vetting Checklist Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] font-sans">
              Our 6-Stage, 20-Point <span className="font-serif italic font-normal text-[#132930]">Vetting Process</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Only the top 3% of evaluated hospitality applicants make it onto your finalist presentation shortlist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vettingSteps.map((step) => (
              <div key={step.num} className="bg-white p-7 rounded-[22px] border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-black text-[#10ACCF] mb-3 font-sans">{step.num}</div>
                <h3 className="text-lg font-bold text-[#132930] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] font-sans">
              How RestaurantZone <span className="font-serif italic font-normal text-[#132930]">Compares</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              See why hundreds of hospitality groups choose RestaurantZone over generalist staffing agencies.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#132930] text-white text-xs uppercase tracking-wider">
                  <th className="py-5 px-6 font-bold">Feature / Metric</th>
                  <th className="py-5 px-6 font-bold text-[#10ACCF] bg-[#1A3842]">RestaurantZone</th>
                  <th className="py-5 px-6 font-bold">Traditional Agencies</th>
                  <th className="py-5 px-6 font-bold">Job Boards (Indeed/LinkedIn)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-[#132930] bg-[#10ACCF]/10">
                      <span className="text-[#08839d] mr-1.5">✓</span> {row.rz}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.traditional}</td>
                    <td className="py-4 px-6 text-slate-500">{row.jobBoards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Leadership & Recruiters */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] font-sans">
              Meet Our Senior <span className="font-serif italic font-normal text-[#132930]">Executive Recruiters</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Seasoned industry veterans who have managed restaurants, kitchens, and luxury hotels firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, i) => (
              <div key={i} className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-center filter brightness-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132930] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-xs text-[#10ACCF] font-bold uppercase tracking-wider">{leader.experience}</span>
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{leader.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#132930] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">
            Ready to Experience the <span className="font-serif italic font-normal text-white">RestaurantZone</span> Advantage?
          </h2>
          <p className="text-[#DADADA] text-base mb-8">
            Speak with an executive recruiter today and receive pre-screened finalists within 10-14 days.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onOpenHireModal()}
              className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-md cursor-pointer"
            >
              Request Candidates
            </button>
            <a
              href="tel:18005135096"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#10ACCF]" />
              <span>1-800-513-5096</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
