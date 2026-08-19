import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Building, Phone, Mail, User } from 'lucide-react';

interface HireTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const HireTalentModal: React.FC<HireTalentModalProps> = ({
  isOpen,
  onClose,
  initialRole = '',
}) => {
  const [step, setStep] = useState(1);
  const [roleType, setRoleType] = useState(initialRole || 'General Manager');
  const [businessType, setBusinessType] = useState('Independent Restaurant');
  const [urgency, setUrgency] = useState('Within 15 Days (Urgent)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cityState: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132930]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#132930] border border-white/10 text-white rounded-[28px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>RestaurantZone Talent Pipeline</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans">
                Request Top Candidates
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Step {step} of 2 — Get pre-screened finalists delivered in 10-14 days or less.
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-[#10ACCF] h-full transition-all duration-300"
                style={{ width: step === 1 ? '50%' : '100%' }}
              ></div>
            </div>

            {step === 1 ? (
              <div className="space-y-5">
                {/* Role Needed */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    What role are you looking to fill?
                  </label>
                  <select
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#10ACCF] transition-colors cursor-pointer"
                  >
                    <option value="General Manager">General Manager (GM)</option>
                    <option value="Executive Chef">Executive Chef / Head Chef</option>
                    <option value="Director of Operations">Director of Operations / VP</option>
                    <option value="Assistant General Manager">Assistant GM / AGM</option>
                    <option value="Kitchen Manager">Kitchen Manager / Sous Chef</option>
                    <option value="Food & Beverage Director">Food & Beverage (F&B) Director</option>
                    <option value="Multi-Unit / District Manager">Multi-Unit / District Manager</option>
                    <option value="Hotel / Resort Leadership">Hotel / Resort General Manager</option>
                    <option value="Private Club Manager">Private Club General Manager</option>
                    <option value="Other Specialized Role">Other Specialized Hospitality Role</option>
                  </select>
                </div>

                {/* Business Concept */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Hospitality / Restaurant Type
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      'Independent Restaurant',
                      'Multi-Unit / Franchise',
                      'Hotel / Resort',
                      'Private Club',
                      'Fine Dining',
                      'Fast Casual / QSR',
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setBusinessType(type)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          businessType === type
                            ? 'bg-[#10ACCF]/25 border-[#10ACCF] text-white font-bold'
                            : 'bg-[#1A3842] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Urgency */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Desired Placement Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      'Within 15 Days (Urgent)',
                      '15-30 Days',
                      'Planning Ahead',
                    ].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setUrgency(time)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          urgency === time
                            ? 'bg-[#10ACCF]/25 border-[#10ACCF] text-[#10ACCF] font-bold'
                            : 'bg-[#1A3842] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-7 py-3 rounded-full text-sm flex items-center space-x-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Company / Restaurant *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Bistro Group LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="john@bistrogroup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1A3842] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#10ACCF]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Job Location (City, State)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Austin, TX or Chicago, IL"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#10ACCF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Additional Notes / Target Salary
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific certifications, opening timeline, or compensation range..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                  />
                </div>

                {/* Guarantee Reminder */}
                <div className="flex items-center space-x-2 text-[11px] text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#10ACCF] flex-shrink-0" />
                  <span>Includes our 100-Day Free Replacement Guarantee & 20-Point Background Screening.</span>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-7 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer"
                  >
                    Submit Talent Request
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#10ACCF]/20 border border-[#10ACCF] rounded-full flex items-center justify-center mx-auto text-[#10ACCF]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white font-sans">
              Request Received!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name || 'Hiring Manager'}</strong>. A senior RestaurantZone Hospitality Recruiter has been assigned to your search for a <strong className="text-[#10ACCF]">{roleType}</strong>.
            </p>

            <div className="bg-[#1A3842] border border-white/10 rounded-2xl p-4 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between text-slate-300">
                <span>Placement Target:</span>
                <span className="text-white font-semibold">{urgency}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Direct Hotline:</span>
                <span className="text-[#10ACCF] font-bold">1-800-513-5096</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Initial Candidate Delivery:</span>
                <span className="text-[#10ACCF] font-semibold">Under 14 Days</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-2.5 rounded-full text-sm cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

