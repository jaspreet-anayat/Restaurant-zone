import React, { useState } from 'react';
import { X, Clock, CheckCircle2 } from 'lucide-react';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 10:00 AM');
  const [callTopic, setCallTopic] = useState('Finding High-Quality Managers');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
  });
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    'Today, 2:30 PM EST',
    'Tomorrow, 10:00 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 11:30 AM EST',
    'Friday, 1:00 PM EST',
  ];

  const topics = [
    'Urgent Role Coverage (<15 Days)',
    'Finding High-Quality Managers',
    'Executive Chef Headhunting',
    'Multi-Unit / Franchise Expansion',
    'Turnover Reduction Advisory',
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132930]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#132930] border border-white/10 text-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#10ACCF]/20 text-[#10ACCF] text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3 h-3" />
                <span>15-Minute Strategy Call</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight font-sans">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Speak directly with a Senior Hospitality Recruitment Director.
              </p>
            </div>

            <form onSubmit={handleBook} className="space-y-4">
              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select a Preferred Time
                </label>
                <div className="space-y-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`w-full text-left px-3.5 py-2 rounded-xl text-xs flex items-center justify-between border transition-all cursor-pointer ${
                        selectedDate === slot
                          ? 'bg-[#10ACCF]/25 border-[#10ACCF] text-white font-bold'
                          : 'bg-[#1A3842] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span>{slot}</span>
                      {selectedDate === slot && <span className="text-[#10ACCF]">✓ Selected</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Primary Goal */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Discussion Topic
                </label>
                <select
                  value={callTopic}
                  onChange={(e) => setCallTopic(e.target.value)}
                  className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                >
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Brand *</label>
                  <input
                    type="text"
                    required
                    placeholder="Restaurant Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1A3842] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#10ACCF]"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-3 rounded-full text-sm transition-all cursor-pointer shadow-md"
                >
                  Confirm Strategy Call
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#10ACCF]/20 border border-[#10ACCF] rounded-full flex items-center justify-center mx-auto text-[#10ACCF]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white font-sans">Call Scheduled!</h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              We have booked your appointment for <strong className="text-white">{selectedDate}</strong>. A calendar invite with Google Meet/Phone details has been sent to <span className="text-[#10ACCF]">{formData.email}</span>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-8 py-2.5 rounded-full text-xs cursor-pointer shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

