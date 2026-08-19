import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Users, 
  Send, 
  FileSpreadsheet, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Building,
  BarChart3,
  Search
} from 'lucide-react';

interface ProductsPageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenHireModal, onOpenScheduleModal }) => {
  const [selectedRole, setSelectedRole] = useState('General Manager');
  const [selectedCity, setSelectedCity] = useState('National Average');
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const salaryData: Record<string, Record<string, { low: number; mid: number; high: number; bonus: string }>> = {
    'General Manager': {
      'National Average': { low: 72000, mid: 88000, high: 115000, bonus: '10-20% of Base' },
      'New York, NY': { low: 88000, mid: 110000, high: 145000, bonus: '15-25% of Base' },
      'Los Angeles, CA': { low: 85000, mid: 105000, high: 138000, bonus: '12-22% of Base' },
      'Chicago, IL': { low: 78000, mid: 95000, high: 125000, bonus: '10-20% of Base' },
      'Miami / South FL': { low: 80000, mid: 98000, high: 130000, bonus: '15-25% of Base' },
      'Austin, TX': { low: 75000, mid: 92000, high: 120000, bonus: '10-18% of Base' },
    },
    'Executive Chef': {
      'National Average': { low: 78000, mid: 95000, high: 130000, bonus: '10-15% of Base' },
      'New York, NY': { low: 95000, mid: 125000, high: 175000, bonus: '15-25% of Base' },
      'Los Angeles, CA': { low: 92000, mid: 118000, high: 160000, bonus: '15-20% of Base' },
      'Chicago, IL': { low: 82000, mid: 102000, high: 140000, bonus: '10-18% of Base' },
      'Miami / South FL': { low: 85000, mid: 110000, high: 155000, bonus: '12-22% of Base' },
      'Austin, TX': { low: 80000, mid: 98000, high: 135000, bonus: '10-18% of Base' },
    },
    'Director of Operations': {
      'National Average': { low: 110000, mid: 140000, high: 190000, bonus: '20-35% of Base' },
      'New York, NY': { low: 135000, mid: 175000, high: 240000, bonus: '25-40% of Base' },
      'Los Angeles, CA': { low: 130000, mid: 168000, high: 225000, bonus: '20-35% of Base' },
      'Chicago, IL': { low: 120000, mid: 150000, high: 205000, bonus: '20-30% of Base' },
      'Miami / South FL': { low: 125000, mid: 158000, high: 215000, bonus: '20-35% of Base' },
      'Austin, TX': { low: 118000, mid: 145000, high: 198000, bonus: '18-30% of Base' },
    },
    'Hotel General Manager': {
      'National Average': { low: 95000, mid: 125000, high: 175000, bonus: '15-30% of Base' },
      'New York, NY': { low: 125000, mid: 165000, high: 230000, bonus: '20-35% of Base' },
      'Los Angeles, CA': { low: 118000, mid: 155000, high: 215000, bonus: '18-30% of Base' },
      'Chicago, IL': { low: 105000, mid: 138000, high: 190000, bonus: '15-25% of Base' },
      'Miami / South FL': { low: 115000, mid: 150000, high: 210000, bonus: '20-35% of Base' },
      'Austin, TX': { low: 102000, mid: 132000, high: 180000, bonus: '15-25% of Base' },
    },
    'Food & Beverage Director': {
      'National Average': { low: 85000, mid: 108000, high: 145000, bonus: '12-25% of Base' },
      'New York, NY': { low: 105000, mid: 135000, high: 185000, bonus: '18-30% of Base' },
      'Los Angeles, CA': { low: 100000, mid: 130000, high: 175000, bonus: '15-28% of Base' },
      'Chicago, IL': { low: 90000, mid: 115000, high: 155000, bonus: '12-22% of Base' },
      'Miami / South FL': { low: 95000, mid: 125000, high: 170000, bonus: '15-28% of Base' },
      'Austin, TX': { low: 88000, mid: 112000, high: 150000, bonus: '12-22% of Base' },
    },
  };

  const currentWage = salaryData[selectedRole]?.[selectedCity] || { low: 75000, mid: 90000, high: 120000, bonus: '10-20%' };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Products Hero */}
      <section className="bg-[#132930] py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#10ACCF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hospitality Technology & Products</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6 font-sans">
              Proprietary Tools & <span className="font-serif italic font-normal text-white">Workforce Solutions</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              Empower your restaurant or hotel business with AI-assisted candidate matching, outsourced recruiting infrastructure (RPO), multi-channel job ad distribution, and real-time wage intelligence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg cursor-pointer"
              >
                Explore Enterprise Solutions
              </button>
              <a
                href="#salary-report"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
              >
                Access 2026 Salary Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Products */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product 1: SwiftMatch */}
            <div className="bg-[#132930] text-white rounded-[28px] p-8 sm:p-10 relative overflow-hidden shadow-lg border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#10ACCF] flex items-center justify-center mb-6 shadow-md">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-[#10ACCF] uppercase tracking-wider block mb-1">
                  Proprietary AI Matching
                </span>
                <h3 className="text-2xl font-bold mb-3 font-sans">SwiftMatch™ Talent Engine</h3>
                <p className="text-[#DADADA] text-sm leading-relaxed mb-6">
                  Our proprietary algorithm cross-references 120,000+ vetted hospitality resumes with 45+ operational parameters (concept volume, labor model, POS expertise, beverage sales ratio) to deliver instant top 1% candidate matches.
                </p>
                <div className="space-y-2 border-t border-white/10 pt-4 mb-8 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Instant matching against 120,000+ hospitality resumes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Calculates culture and P&L volume compatibility</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Integrates with our senior recruiter human review</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenHireModal('SwiftMatch AI Search')}
                className="w-full bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Deploy SwiftMatch Search
              </button>
            </div>

            {/* Product 2: RPO */}
            <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#132930] flex items-center justify-center mb-6 shadow-md text-white">
                  <Layers className="w-6 h-6 text-[#10ACCF]" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Turnkey Infrastructure
                </span>
                <h3 className="text-2xl font-bold text-[#132930] mb-3 font-sans">
                  Recruitment Process Outsourcing (RPO)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  For growing chains opening 5 to 50 locations per year. We embed dedicated senior hospitality recruiters directly into your brand, handling sourcing, phone screens, background checks, and offer negotiations at a flat predictable monthly rate.
                </p>
                <div className="space-y-2 border-t border-slate-200 pt-4 mb-8 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Saves 40–60% compared to per-placement headhunting fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Dedicated recruiters operating under your company brand</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Custom hiring portal & applicant pipeline dashboard</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenScheduleModal}
                className="w-full bg-[#132930] hover:bg-[#1C3842] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Inquire About Enterprise RPO
              </button>
            </div>

            {/* Product 3: Direct Hire */}
            <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#132930] flex items-center justify-center mb-6 shadow-md text-white">
                  <Users className="w-6 h-6 text-[#10ACCF]" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Contingent & Retained
                </span>
                <h3 className="text-2xl font-bold text-[#132930] mb-3 font-sans">
                  Direct Hire Recruiting Services
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our core service for restaurants, bars, resorts, and hotels needing single or multi-unit placements. You only pay for successful hires, fully backed by our 100-Day Free Replacement Guarantee.
                </p>
                <div className="space-y-2 border-t border-slate-200 pt-4 mb-8 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Pre-screened candidate dossiers delivered in 10-14 days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>100-Day Risk-Free Warranty protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>No upfront retainers required for standard manager searches</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenHireModal()}
                className="w-full bg-[#132930] hover:bg-[#1C3842] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Hire Direct Candidates
              </button>
            </div>

            {/* Product 4: Job Ad Syndication */}
            <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#132930] flex items-center justify-center mb-6 shadow-md text-white">
                  <Send className="w-6 h-6 text-[#10ACCF]" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Multi-Channel Distribution
                </span>
                <h3 className="text-2xl font-bold text-[#132930] mb-3 font-sans">
                  Job Ad Posting & Syndication
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Broadcast your open hospitality positions across 25+ premier job boards, niche culinary channels, local culinary school alumni networks, and the RestaurantZone private candidate newsletter with a single click.
                </p>
                <div className="space-y-2 border-t border-slate-200 pt-4 mb-8 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Syndication to 25+ hospitality & culinary portals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Title and SEO keyword optimization to boost qualified clicks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Direct application routing to your ATS or email inbox</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenScheduleModal}
                className="w-full bg-[#132930] hover:bg-[#1C3842] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Post Open Hospitality Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 2026 Hospitality Salary & Wage Benchmark Tool */}
      <section id="salary-report" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#10ACCF]/10 text-[#10ACCF] text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Real-Time Market Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] font-sans">
              2026 National Hospitality <span className="font-serif italic font-normal text-[#132930]">Salary & Compensation Guide</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Use our live benchmark calculator based on verified 2026 placements across 8,500+ restaurants and hotels nationwide.
            </p>
          </div>

          {/* Interactive Calculator Card */}
          <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Role / Position
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-[#132930] focus:outline-none focus:border-[#10ACCF] transition-colors"
                >
                  {Object.keys(salaryData).map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Metro / Region
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-[#132930] focus:outline-none focus:border-[#10ACCF] transition-colors"
                >
                  {['National Average', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Miami / South FL', 'Austin, TX'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-[#132930] text-white rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs text-[#10ACCF] font-bold uppercase tracking-wider">
                    2026 Base Compensation Benchmark
                  </span>
                  <h3 className="text-2xl font-bold">{selectedRole} in {selectedCity}</h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-slate-400 block">Median Annual Base</span>
                  <span className="text-3xl font-black text-[#10ACCF] font-sans">
                    ${currentWage.mid.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 text-center">
                <div className="bg-[#1A3842] p-3.5 rounded-xl border border-white/5">
                  <span className="text-[11px] text-slate-400 block">25th Percentile</span>
                  <span className="text-lg font-bold text-white">${currentWage.low.toLocaleString()}</span>
                </div>
                <div className="bg-[#1A3842] p-3.5 rounded-xl border border-[#10ACCF]/40">
                  <span className="text-[11px] text-[#10ACCF] font-bold block">50th (Median)</span>
                  <span className="text-lg font-bold text-white">${currentWage.mid.toLocaleString()}</span>
                </div>
                <div className="bg-[#1A3842] p-3.5 rounded-xl border border-white/5">
                  <span className="text-[11px] text-slate-400 block">75th Percentile</span>
                  <span className="text-lg font-bold text-white">${currentWage.high.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-300">
                <span>Typical Performance Bonus Incentive:</span>
                <span className="font-bold text-[#10ACCF]">{currentWage.bonus}</span>
              </div>
            </div>

            {/* Download Full PDF action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#10ACCF]/20 text-[#10ACCF] flex items-center justify-center flex-shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#132930]">Full 48-Page Hospitality Salary PDF</h4>
                  <p className="text-xs text-slate-500">Includes 65+ roles across 30 US metro markets.</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setReportDownloaded(true);
                  setTimeout(() => setReportDownloaded(false), 4000);
                }}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-6 py-2.5 rounded-full text-xs flex items-center space-x-2 transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>{reportDownloaded ? 'Downloaded Report!' : 'Download Full PDF Report'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
