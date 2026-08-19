import React, { useState } from 'react';
import { 
  Briefcase, 
  Upload, 
  Search, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock,
  Building,
  Award,
  Filter,
  X
} from 'lucide-react';

export const JobSeekersPage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedRoleType, setSelectedRoleType] = useState('All');
  const [appliedJob, setAppliedJob] = useState<string | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    currentTitle: '',
    desiredSalary: '',
    city: '',
    experienceYears: '5-10 Years',
  });

  const jobsList = [
    {
      id: 'job-1',
      title: 'General Manager - Upscale Steakhouse',
      company: 'Premier Dining Group',
      location: 'New York, NY',
      salary: '$110,000 - $135,000 + 25% Bonus',
      type: 'Full-Time / Salaried',
      roleType: 'Management',
      posted: '2 days ago',
      tags: ['Fine Dining', 'P&L Management', 'Wine Program'],
      description: 'High-volume $8M+ revenue flagship steakhouse seeking seasoned GM with strong hospitality background and private dining expertise.',
    },
    {
      id: 'job-2',
      title: 'Executive Chef - Luxury Boutique Resort',
      company: 'Coastal Hospitality Collection',
      location: 'Miami, FL',
      salary: '$120,000 - $145,000 + Relocation',
      type: 'Full-Time / Salaried',
      roleType: 'Culinary',
      posted: '1 day ago',
      tags: ['Resort Dining', 'Farm to Table', 'Banquet Ops'],
      description: 'Acclaimed oceanfront 140-key resort seeking visionary Executive Chef to oversee 3 dining outlets, pool deck, and weddings.',
    },
    {
      id: 'job-3',
      title: 'Director of Food & Beverage',
      company: 'Forbes 4-Star Hotel Property',
      location: 'Chicago, IL',
      salary: '$130,000 - $160,000 + Bonus',
      type: 'Full-Time / Salaried',
      roleType: 'Executive',
      posted: '3 days ago',
      tags: ['Hotel F&B', 'Multi-Outlet', 'Banquet Sales'],
      description: 'Directing all culinary, banquet, and beverage operations for prestigious downtown convention hotel with $14M F&B budget.',
    },
    {
      id: 'job-4',
      title: 'Multi-Unit District Manager (5 Units)',
      company: 'Fast-Casual Regional Franchisee',
      location: 'Austin, TX',
      salary: '$95,000 - $115,000 + Company Car',
      type: 'Full-Time / Salaried',
      roleType: 'Management',
      posted: 'Just now',
      tags: ['QSR / Fast Casual', 'Multi-Unit', 'People Leadership'],
      description: 'Expanding fast-casual franchise group seeking high-energy District Manager to lead 5 high-volume locations with new openings planned.',
    },
    {
      id: 'job-5',
      title: 'Head Sommelier & Wine Director',
      company: 'Michelin-Starred Fine Dining Room',
      location: 'Los Angeles, CA',
      salary: '$90,000 - $110,000 + Gratuity Pool',
      type: 'Full-Time / Salaried',
      roleType: 'Beverage',
      posted: '4 days ago',
      tags: ['CMS Advanced / Master', 'Cellar Management', 'VIP Service'],
      description: 'Curating 1,800-bin global cellar, guest pairings, staff educational wine seminars, and luxury private cellar events.',
    },
    {
      id: 'job-6',
      title: 'Executive Pastry Chef',
      company: 'Historic Country Club',
      location: 'Denver, CO',
      salary: '$85,000 - $105,000 + Full Benefits',
      type: 'Full-Time / Salaried',
      roleType: 'Culinary',
      posted: '5 days ago',
      tags: ['Private Club', 'Artisanal Breads', 'Wedding Cakes'],
      description: 'Exclusive private golf club seeking talented Executive Pastry Chef to craft daily restaurant desserts and large-scale member galas.',
    },
  ];

  const filteredJobs = jobsList.filter((job) => {
    const matchesKeyword = job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.tags.some(t => t.toLowerCase().includes(searchKeyword.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    const matchesRoleType = selectedRoleType === 'All' || job.roleType === selectedRoleType;

    return matchesKeyword && matchesLocation && matchesRoleType;
  });

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="bg-[#132930] py-20 lg:py-28 relative overflow-hidden text-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#10ACCF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>For Hospitality Leaders & Job Seekers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6 font-sans">
              Advance Your Career with <span className="font-serif italic font-normal text-white">Top Hospitality Brands</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              We connect high-performing Restaurant Managers, Executive Chefs, Beverage Directors, and Hotel Executives with confidential, unadvertised leadership opportunities nationwide. 100% free for candidates.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] cursor-pointer flex items-center space-x-2"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Confidential Resume</span>
              </button>
              <a
                href="#job-board"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
              >
                Browse Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Value Pillars */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#10ACCF]/15 text-[#10ACCF] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#132930] mb-2 font-sans">100% Confidential Representation</h3>
              <p className="text-sm text-slate-600">Your resume is never submitted to any employer without your explicit prior permission.</p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#10ACCF]/15 text-[#10ACCF] flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#132930] mb-2 font-sans">Always 100% Free For Candidates</h3>
              <p className="text-sm text-slate-600">Employers pay our recruiting fee. Candidates receive career matching, coaching, and negotiation guidance at zero cost.</p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#10ACCF]/15 text-[#10ACCF] flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#132930] mb-2 font-sans">Access to Hidden Job Market</h3>
              <p className="text-sm text-slate-600">Over 65% of our management searches are confidential replacements not listed on public job boards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Job Board */}
      <section id="job-board" className="py-20 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#10ACCF] uppercase tracking-wider block mb-1">
                Live Open Positions
              </span>
              <h2 className="text-3xl font-bold text-[#132930] font-sans">
                Featured Hospitality Openings
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Showing {filteredJobs.length} active positions across the US
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by role title, keyword, or concept..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#10ACCF]"
              />
            </div>
            <div className="sm:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#10ACCF]"
              >
                <option value="All">All Locations</option>
                <option value="New York">New York, NY</option>
                <option value="Miami">Miami, FL</option>
                <option value="Chicago">Chicago, IL</option>
                <option value="Los Angeles">Los Angeles, CA</option>
                <option value="Austin">Austin, TX</option>
                <option value="Denver">Denver, CO</option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <select
                value={selectedRoleType}
                onChange={(e) => setSelectedRoleType(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#10ACCF]"
              >
                <option value="All">All Categories</option>
                <option value="Management">Management / GM</option>
                <option value="Culinary">Executive Chef / Culinary</option>
                <option value="Executive">Executive / Director</option>
                <option value="Beverage">Beverage / Sommelier</option>
              </select>
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-[24px] border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="text-[11px] font-bold text-[#10ACCF] bg-[#10ACCF]/10 px-2.5 py-1 rounded-md">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{job.posted}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#132930] mb-1 font-sans">{job.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">{job.company}</p>

                  <div className="flex flex-wrap gap-3 text-xs text-slate-600 mb-4">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1 font-semibold text-[#132930]">
                      <DollarSign className="w-3.5 h-3.5 text-[#10ACCF]" />
                      <span>{job.salary}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.tags.map((t, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setAppliedJob(job.title);
                      setTimeout(() => setAppliedJob(null), 3500);
                    }}
                    className={`font-bold px-6 py-2 rounded-full text-xs transition-all cursor-pointer ${
                      appliedJob === job.title
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#10ACCF] hover:bg-[#0ea1c2] text-white shadow-sm'
                    }`}
                  >
                    {appliedJob === job.title ? '✓ Application Submitted!' : 'Quick Apply'}
                  </button>

                  <button
                    onClick={() => setResumeModalOpen(true)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#132930]"
                  >
                    Confidential Inquiry &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Services: Resume Review & Coaching */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132930] font-sans">
              Career Enhancement <span className="font-serif italic font-normal text-[#132930]">Services</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Elevate your interview performance and stand out to executive hiring committees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-[28px] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#132930] flex items-center justify-center text-white mb-6">
                  <FileText className="w-6 h-6 text-[#10ACCF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#132930] mb-3 font-sans">
                  Hospitality Resume Writing & Formatting
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Work directly with certified hospitality career coaches who tailor your resume for General Manager, Executive Chef, and C-Suite hospitality roles, highlighting P&L achievements, food/labor cost efficiencies, and leadership scale.
                </p>
                <div className="space-y-2 text-xs text-slate-700 mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Formatted to pass ATS candidate filters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Emphasis on measurable financial & guest satisfaction metrics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Includes customized executive cover letter template</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setResumeModalOpen(true)}
                className="w-full bg-[#132930] hover:bg-[#1C3842] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Request Resume Review
              </button>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-[28px] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#132930] flex items-center justify-center text-white mb-6">
                  <UserCheck className="w-6 h-6 text-[#10ACCF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#132930] mb-3 font-sans">
                  1-on-1 Interview & Negotiation Coaching
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  One-on-one preparation sessions with former restaurant and hotel executive operators. Master behavioral interviews, menu presentations, tasting auditions, and strategic salary/bonus package negotiations.
                </p>
                <div className="space-y-2 text-xs text-slate-700 mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Mock interview sessions tailored to specific hiring brands</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Guidance on equity, profit-sharing, and bonus structures</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACCF]" />
                    <span>Post-interview debrief and follow-up strategy</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setResumeModalOpen(true)}
                className="w-full bg-[#132930] hover:bg-[#1C3842] text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Schedule Candidate Coaching
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Resume Upload Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132930]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#132930] border border-white/10 text-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setResumeModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!resumeUploaded ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3 h-3" />
                    <span>100% Confidential Candidate Portal</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight font-sans">
                    Submit Your Resume
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect with dedicated hospitality recruiters who represent unlisted opportunities.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setResumeUploaded(true);
                  }}
                  className="space-y-3.5"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="First & Last Name"
                        value={resumeData.name}
                        onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={resumeData.email}
                        onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={resumeData.phone}
                        onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Current Role / Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. General Manager"
                        value={resumeData.currentTitle}
                        onChange={(e) => setResumeData({ ...resumeData, currentTitle: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">City / State *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. New York, NY"
                        value={resumeData.city}
                        onChange={(e) => setResumeData({ ...resumeData, city: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Desired Salary Range</label>
                      <input
                        type="text"
                        placeholder="e.g. $90k - $110k"
                        value={resumeData.desiredSalary}
                        onChange={(e) => setResumeData({ ...resumeData, desiredSalary: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>

                  {/* Upload Dropzone */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">Upload Resume (PDF, DOCX, TXT)</label>
                    <div className="border-2 border-dashed border-white/20 hover:border-[#10ACCF] rounded-2xl p-4 text-center cursor-pointer transition-colors bg-[#1A3842]/50">
                      <Upload className="w-6 h-6 text-[#10ACCF] mx-auto mb-1" />
                      <span className="text-xs text-slate-300 font-medium block">Drag & drop your resume or click to browse</span>
                      <span className="text-[10px] text-slate-400">Max file size 10MB</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-3 rounded-full text-sm shadow-md transition-all cursor-pointer"
                    >
                      Submit Confidential Profile
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[#10ACCF]/20 border border-[#10ACCF] rounded-full flex items-center justify-center mx-auto text-[#10ACCF]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">Resume Received!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{resumeData.name || 'Candidate'}</strong>. Your resume has been placed in our confidential executive database. A RestaurantZone recruiter specializing in your sector will contact you when matching leadership roles arise.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setResumeUploaded(false);
                      setResumeModalOpen(false);
                    }}
                    className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-2.5 rounded-full text-xs cursor-pointer shadow-md"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
