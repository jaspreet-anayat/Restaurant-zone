import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  Quote, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Award, 
  TrendingUp, 
  Clock,
  Phone,
  Search,
  Filter
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/mockData';

interface ReviewsPageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenHireModal, onOpenScheduleModal }) => {
  const [filterType, setFilterType] = useState('all');

  const caseStudies = [
    {
      title: 'Scaling 14 New Locations in Under 6 Months',
      client: 'Multi-Unit Fast Casual Franchisee',
      location: 'Dallas & Austin, TX',
      highlight: '14 General Managers Placed in 45 Days',
      challenge: 'Rapid growth trajectory required 14 high-volume General Managers and 3 District Managers without pulling existing leaders away from revenue-producing stores.',
      solution: 'Deployed SwiftMatch™ algorithm paired with a dedicated 3-recruiter pod executing targeted passive headhunting across competitors.',
      results: [
        '100% of 14 GM openings filled 2 weeks prior to store grand openings',
        'Average time-to-first-interview: 6.2 days',
        '93% 1-year retention rate across all placed managers',
      ],
    },
    {
      title: 'Discreet Executive Chef Placement for Michelin-Acclaimed Venue',
      client: 'Fine Dining Hospitality Group',
      location: 'New York, NY',
      highlight: 'Michelin-Pedigree Executive Chef in 11 Days',
      challenge: 'Sudden unexpected resignation of an Executive Chef threatened multi-course tasting menu reputation and upcoming holiday corporate buyout reservations.',
      solution: 'Confidential executive retained search targeting employed Chef de Cuisines from top New York 2-star & 3-star Michelin dining rooms.',
      results: [
        '4 highly vetted finalists presented within 8 calendar days',
        'Audition tasting completed and offer accepted on Day 11',
        'Zero public leak or negative press coverage regarding the transition',
      ],
    },
    {
      title: 'Luxury 320-Key Oceanfront Resort Leadership Overhaul',
      client: 'Boutique Hotel & Resort Management Co.',
      location: 'Miami Beach, FL',
      highlight: 'Full Executive Team Placed in 30 Days',
      challenge: 'Underperforming property needed new General Manager, Director of Food & Beverage, and Executive Housekeeper ahead of peak winter tourist season.',
      solution: 'Comprehensive hospitality recruitment pipeline engaging active leaders across Forbes 4-Star and 5-Star properties in the Southeast.',
      results: [
        'All 3 executive roles filled within 30 days of search initiation',
        'TripAdvisor guest rating increased from 3.8 to 4.6 within 6 months',
        'Annual labor turnover decreased by 34% under new leadership',
      ],
    },
  ];

  const filteredReviews = filterType === 'all'
    ? REVIEWS_DATA
    : filterType === 'clients'
    ? REVIEWS_DATA.filter(r => r.role.includes('Partner') || r.role.includes('Client') || r.role.includes('Manager'))
    : REVIEWS_DATA.filter(r => r.role.includes('Candidate') || r.role.includes('Chef') || r.role.includes('Placement'));

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-[#132930] py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#10ACCF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Client & Candidate Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6 font-sans">
              Trusted by 8,500+ Hospitality Brands with a <span className="font-serif italic font-normal text-white">4.9★ Rating</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              Read authentic reviews and in-depth case studies from restaurant owners, multi-unit franchise operators, hotel directors, and placed culinary executives nationwide.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] cursor-pointer"
              >
                Hire Top Talent Today
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

      {/* Ratings Bar Banner */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-8 text-center">
            {/* Google */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-xl shadow-sm text-[#132930]">
                G
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">4.9 / 5.0 on Google Reviews</span>
              </div>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                ★
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 text-emerald-600 font-black text-sm">
                  <span>Trustpilot</span>
                </div>
                <span className="text-xs font-bold text-slate-800">4.7 / 5.0 Excellent Rating</span>
              </div>
            </div>

            {/* Retention */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#132930] text-[#10ACCF] flex items-center justify-center font-bold text-lg shadow-sm">
                89%
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-800 block">1-Year Retention Rate</span>
                <span className="text-[11px] text-slate-500">Across 8,520+ placements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Case Studies */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#10ACCF] uppercase tracking-wider block mb-1">
              Measurable Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] font-sans">
              Featured Client <span className="font-serif italic font-normal text-[#132930]">Case Studies</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Explore how our specialized search methodology delivers fast, high-retention talent for demanding operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white rounded-[26px] border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#10ACCF] uppercase tracking-wider block mb-1">
                    {cs.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-[#132930] mb-2 font-sans">{cs.title}</h3>
                  <div className="text-xs text-slate-500 font-medium mb-5 pb-3 border-b border-slate-100">
                    {cs.client} • {cs.location}
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    <div>
                      <strong className="text-slate-800 block mb-0.5">The Challenge:</strong>
                      {cs.challenge}
                    </div>
                    <div>
                      <strong className="text-slate-800 block mb-0.5">The RestaurantZone Solution:</strong>
                      {cs.solution}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-[#132930] uppercase tracking-wider block mb-1">
                      Key Results Delivered:
                    </span>
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10ACCF] flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenHireModal()}
                  className="w-full bg-[#132930] hover:bg-[#10ACCF] text-white font-bold py-2.5 rounded-full text-xs transition-colors cursor-pointer text-center shadow-sm"
                >
                  Achieve Similar Results &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#132930] font-sans">
                Verified Client & Candidate Reviews
              </h2>
              <p className="text-xs text-slate-500 mt-1">Real unedited feedback from our hospitality partners</p>
            </div>

            <div className="flex items-center space-x-2 bg-white p-1 rounded-full border border-slate-200">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'clients', label: 'Employers' },
                { id: 'candidates', label: 'Placed Leaders' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterType(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    filterType === tab.id
                      ? 'bg-[#132930] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#132930]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-[24px] border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                        {review.avatarLetter}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">{review.name}</h4>
                        <span className="text-[11px] text-slate-400">{review.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                    "{review.fullText || review.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#10ACCF]">{review.role}</span>
                  <span className="text-slate-400 font-medium">{review.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#132930] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-sans">
            Join Thousands of Satisfied Hospitality Partners
          </h2>
          <p className="text-[#DADADA] text-base mb-8 max-w-xl mx-auto">
            Experience why leading restaurant groups and luxury hotels trust RestaurantZone for critical management searches.
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
