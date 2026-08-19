import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Calculator, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  Send,
  Building,
  DollarSign
} from 'lucide-react';

interface ContactPageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenHireModal, onOpenScheduleModal }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    serviceNeeded: 'Restaurant Talent Acquisition',
    message: '',
  });

  // Cost calculator state
  const [estSalary, setEstSalary] = useState(85000);
  const [estHires, setEstHires] = useState(1);
  const [estType, setEstType] = useState('Direct Hire Permanent');

  const faqs = [
    {
      q: 'How fast can I expect candidate presentations?',
      a: 'Our average time-to-first-candidate is under 10–14 calendar days. For urgent management replacements, we often present pre-screened finalists in as few as 3–7 business days.',
    },
    {
      q: 'What is included in the 100-Day Free Replacement Guarantee?',
      a: 'If any placed candidate leaves voluntarily or is discharged for performance reasons within the first 100 days of employment, RestaurantZone will restart the search immediately and provide a replacement finalist at $0 extra cost.',
    },
    {
      q: 'How does your 20-Point Vetting process work?',
      a: 'We evaluate candidates across operational proficiency, food/labor cost track records, P&L management, direct reference validation with past owners/supervisors, personality/culture fit, and background checks before they are submitted to you.',
    },
    {
      q: 'What are your recruitment fees and payment terms?',
      a: 'We offer flexible structures including Contingent Direct Hire, Retained Executive Search, and flat monthly RPO (Recruitment Process Outsourcing) models for growing chains. Contact our team or use our fee calculator for custom rate sheets.',
    },
    {
      q: 'Do you recruit in my city or state?',
      a: 'Yes, RestaurantZone operates across all 50 US states, with active talent networks spanning major metropolitan cities (NYC, LA, Chicago, Miami, Dallas) as well as regional destination resort markets.',
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
              <span>Nationwide Hospitality Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] mb-6 font-sans">
              Get in Touch with Our <span className="font-serif italic font-normal text-white">Recruiting Team</span>
            </h1>
            <p className="text-[#DADADA] text-lg sm:text-xl leading-relaxed mb-8">
              Speak directly with an executive recruiter today. Fill out the inquiry form, calculate estimated placement costs, or call our direct hiring hotline.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:18005135096"
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,172,207,0.4)] flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 1-800-513-5096</span>
              </a>
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

      {/* Contact Form & Contact Details Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#10ACCF] uppercase tracking-wider block mb-1">
                  Direct Communications
                </span>
                <h2 className="text-3xl font-bold text-[#132930] font-sans">
                  We're Ready to Help You Fill Critical Roles
                </h2>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Our recruiting directors are available Monday through Saturday to discuss your hiring timeline and deliver customized talent pipelines.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10ACCF]/15 text-[#10ACCF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Toll-Free Hotline</span>
                    <a href="tel:18005135096" className="text-base font-bold text-[#132930] hover:text-[#10ACCF] transition-colors">
                      1-800-513-5096
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Mon–Fri: 8am–8pm EST • Sat: 9am–5pm EST</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10ACCF]/15 text-[#10ACCF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                    <a href="mailto:info@therestaurantzone.com" className="text-base font-bold text-[#132930] hover:text-[#10ACCF] transition-colors">
                      info@therestaurantzone.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Responses guaranteed within 2 business hours</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10ACCF]/15 text-[#10ACCF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">National Headhunting Reach</span>
                    <span className="text-sm font-bold text-[#132930] block">All 50 US States & Canada</span>
                    <p className="text-xs text-slate-500 mt-0.5">Offices: New York, NY • Remote Recruiter Pods Nationwide</p>
                  </div>
                </div>
              </div>

              {/* 100-Day Badge */}
              <div className="bg-[#132930] text-white p-6 rounded-[22px] border border-white/10 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#10ACCF] flex items-center justify-center flex-shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">100-Day Replacement Guarantee</h4>
                  <p className="text-xs text-slate-300">Complete hiring peace of mind on all placements.</p>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[28px] border border-slate-200 shadow-xl p-8 sm:p-10">
                {!submitted ? (
                  <div>
                    <h3 className="text-2xl font-bold text-[#132930] mb-2 font-sans">
                      Request a Hospitality Talent Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Tell us about your open positions and an executive recruiter will contact you promptly.
                    </p>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@restaurant.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Restaurant / Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Harbor Bistro Group"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Role Category / Service
                          </label>
                          <select
                            value={formData.serviceNeeded}
                            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                          >
                            <option value="Restaurant Talent Acquisition">Restaurant Talent Acquisition (GM, AGM)</option>
                            <option value="Hospitality Executive Search">Hospitality Executive Search (C-Suite, VP)</option>
                            <option value="Professional Chef Recruiting">Professional Chef & Culinary Recruiting</option>
                            <option value="Hotel & Resort Staffing">Hotel & Resort Staffing</option>
                            <option value="QSR & Fast Casual Staffing">Quick Service / QSR Recruiting</option>
                            <option value="Fine Dining & Sommelier">Fine Dining & Sommelier Staffing</option>
                            <option value="Workforce Solutions / RPO">Workforce Solutions / RPO Program</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            City & State
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Chicago, IL"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Role Requirements & Opening Timeline
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Please share specific requirements, opening dates, volume expectations, or salary budget..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#10ACCF]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-3.5 rounded-full text-sm shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Talent Inquiry</span>
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#132930] font-sans">Inquiry Submitted!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your talent inquiry has been assigned to a Senior Hospitality Recruiter. We will reach out within 2 hours with candidate pipeline options.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-[#132930] text-white font-bold px-8 py-2.5 rounded-full text-xs cursor-pointer shadow-sm"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#132930] font-sans">
              Frequently Asked <span className="font-serif italic font-normal text-[#132930]">Questions</span>
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers to the most common questions about working with RestaurantZone.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-[#132930] text-sm cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180 text-[#10ACCF]' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
