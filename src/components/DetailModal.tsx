import React from 'react';
import { X, ArrowRight, CheckCircle2, Clock, Users } from 'lucide-react';
import { ExpertiseItem, SpecialtyItem } from '../types';

interface DetailModalProps {
  expertiseItem: ExpertiseItem | null;
  specialtyItem: SpecialtyItem | null;
  onClose: () => void;
  onHireForThis: (title: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  expertiseItem,
  specialtyItem,
  onClose,
  onHireForThis,
}) => {
  if (!expertiseItem && !specialtyItem) return null;

  const isExpertise = !!expertiseItem;
  const title = expertiseItem?.title || specialtyItem?.name || '';
  const description = expertiseItem?.description || specialtyItem?.description || '';
  const roles = expertiseItem?.roles || specialtyItem?.roles || [];
  const image = expertiseItem?.image || 'https://therestaurantzone.com/wp-content/uploads/2026/06/Executive-Search.webp';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132930]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-[28px] max-w-lg w-full overflow-hidden shadow-2xl relative border border-slate-100 my-8">
        {/* Header Image */}
        <div className="relative h-48 bg-[#132930]">
          <img src={image} alt={title} className="w-full h-full object-cover filter brightness-75" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132930] via-[#132930]/50 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold text-[#10ACCF] uppercase tracking-wider">
              {isExpertise ? 'Hospitality Recruiting Division' : 'RZ Specialty Sector'}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans drop-shadow">
              {title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

          {/* Roles We Place */}
          <div>
            <h4 className="text-xs font-bold text-[#132930] uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-[#10ACCF]" />
              <span>Roles Frequently Placed</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {roles.map((r, i) => (
                <span
                  key={i}
                  className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/60"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Key SLA Metric */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#10ACCF]" />
              <span className="text-slate-600 font-medium">Average Time-to-Candidate:</span>
            </div>
            <span className="font-bold text-[#132930]">
              {expertiseItem?.avgPlacementTime || 'Under 14 Days'}
            </span>
          </div>

          {/* Guarantee Note */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Includes 100-Day Free Replacement Guarantee & 20-Point Pre-Screening.</span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-4 py-2 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onHireForThis(title);
              }}
              className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold px-6 py-2.5 rounded-full text-xs flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
            >
              <span>Hire for {title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

