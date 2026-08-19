import React from 'react';

export function TacoBellLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center font-bold tracking-tighter ${className}`}>
      <div className="flex items-center space-x-1.5">
        <svg viewBox="0 0 100 100" className="h-9 w-9" fill="none">
          <circle cx="50" cy="50" r="45" fill="#702082" />
          <path d="M50 20C40 20 32 28 32 38C32 50 24 58 24 64C24 67 27 70 30 70H70C73 70 76 67 76 64C76 58 68 50 68 38C68 28 60 20 50 20Z" fill="#A020F0" />
          <path d="M43 70C43 74 46 77 50 77C54 77 57 74 57 70H43Z" fill="#E81B84" />
          <circle cx="50" cy="46" r="16" fill="#FDB813" />
        </svg>
        <div className="text-left leading-none">
          <span className="block text-sm font-black tracking-wider text-slate-900 uppercase">TACO</span>
          <span className="block text-sm font-black tracking-wider text-slate-900 uppercase">BELL</span>
        </div>
      </div>
    </div>
  );
}

export function SteakNShakeLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="border-2 border-slate-900 rounded-full px-3 py-1 text-center font-serif leading-tight">
        <div className="text-[9px] uppercase tracking-widest text-slate-700 font-sans">FAMOUS FOR</div>
        <div className="text-xs font-black tracking-tight text-slate-950">Steak</div>
        <div className="text-[10px] italic font-serif text-slate-800">'n</div>
        <div className="text-xs font-black tracking-tight text-slate-950">Shake</div>
      </div>
    </div>
  );
}

export function VictronEnergyLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex space-x-0.5">
        <div className="w-1.5 h-6 bg-blue-600 rounded-sm transform -skew-x-12"></div>
        <div className="w-1.5 h-6 bg-blue-500 rounded-sm transform -skew-x-12"></div>
        <div className="w-1.5 h-6 bg-cyan-400 rounded-sm transform -skew-x-12"></div>
      </div>
      <div className="text-left font-sans">
        <span className="block text-xs font-black tracking-tight text-slate-800 lowercase">victron energy</span>
        <span className="block text-[8px] uppercase tracking-widest text-slate-500">BLUE POWER</span>
      </div>
    </div>
  );
}

export function DaveAndBustersLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="bg-[#e11d48] text-white font-black px-2.5 py-1.5 rounded-lg transform -rotate-3 shadow-sm border border-rose-700 text-center leading-none">
        <div className="text-[10px] tracking-wider uppercase">DAVE &</div>
        <div className="text-xs tracking-tight uppercase">BUSTER'S</div>
      </div>
    </div>
  );
}

export function DavesHotChickenLogo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative w-10 h-10 rounded-full bg-[#fcd34d] border-2 border-slate-900 flex items-center justify-center font-black text-rose-600 text-sm overflow-hidden">
        <div className="absolute -top-1 font-bold text-[8px] text-slate-800 tracking-tighter">DAVE'S</div>
        <span className="text-lg">🔥</span>
      </div>
      <div className="text-left leading-none">
        <span className="block text-xs font-black text-slate-900 tracking-tight uppercase">DAVE'S HOT</span>
        <span className="block text-xs font-black text-red-600 tracking-tight uppercase">CHICKEN</span>
      </div>
    </div>
  );
}

export function WSJLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <span className="text-[9px] uppercase tracking-[0.18em] text-black font-serif font-semibold">
        THE WALL STREET JOURNAL.
      </span>
      <span className="text-3xl font-serif font-black tracking-tight text-black leading-none mt-0.5">
        WSJ
      </span>
    </div>
  );
}

export function BusinessInsiderLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="bg-[#0038ff] text-white px-5 py-2.5 font-sans font-black tracking-wider text-center leading-[1.05] shadow-sm">
        <span className="block text-[13px] tracking-[0.05em]">BUSINESS</span>
        <span className="block text-[13px] tracking-[0.05em]">INSIDER</span>
      </div>
    </div>
  );
}

export function MarketplaceLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
        {/* Yellow-green top triangle */}
        <polygon points="10,4 26,4 18,18" fill="#84cc16" />
        {/* Cyan bottom polygon */}
        <polygon points="10,32 18,18 26,32 18,27" fill="#06b6d4" />
      </svg>
      <span className="font-sans font-bold text-[#475569] text-lg tracking-wider uppercase">
        MARKETPLACE<sup className="text-[10px] font-normal">®</sup>
      </span>
    </div>
  );
}

export function TotalFoodserviceLogo({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Outer curved grey orbit */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <ellipse cx="50" cy="50" rx="44" ry="24" fill="none" stroke="#94a3b8" strokeWidth="6" transform="rotate(-30 50 50)" />
          <circle cx="20" cy="28" r="4" fill="#e11d48" />
        </svg>
        {/* Big Navy T */}
        <div className="w-9 h-9 rounded-full bg-[#0f172a] flex items-center justify-center text-white font-serif font-black text-xl z-10 shadow-sm">
          T
        </div>
      </div>
      <div className="text-left leading-tight">
        <span className="block text-2xl font-black text-[#0f172a] tracking-tight -mb-1 font-sans">
          total
        </span>
        <span className="block text-base italic font-serif text-[#dc2626] font-medium tracking-normal">
          foodservice
        </span>
      </div>
    </div>
  );
}

export function TrustpilotBadge({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center space-x-1.5 mb-1">
        {/* Trustpilot Green 5-point star */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00b67a] fill-current">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
        <span className="text-lg font-bold text-black tracking-tight font-sans">
          Trustpilot
        </span>
      </div>
      {/* 5 star rating blocks */}
      <div className="flex space-x-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          </div>
        ))}
        {/* 5th half/split box */}
        <div className="w-5 h-5 bg-[#00b67a] relative flex items-center justify-center overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#d1d5db]"></div>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current relative z-10">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SecureSSLBadge({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center bg-[#15803d] border-2 border-[#166534] rounded-lg shadow-sm pl-2 pr-4 py-1.5 text-white">
        {/* Shield with Padlock */}
        <div className="w-8 h-8 rounded-md bg-[#166534] border border-[#22c55e] flex items-center justify-center mr-2.5">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        </div>
        <div className="text-left leading-none">
          <span className="block font-black text-white text-sm tracking-wider uppercase font-sans">
            SECURE
          </span>
          <span className="block text-[9.5px] font-bold text-white/90 tracking-widest uppercase font-sans mt-0.5">
            SSL ENCRYPTION
          </span>
        </div>
      </div>
    </div>
  );
}

export function BBBAplusBadge({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center bg-[#002f6c] rounded-md p-1 pr-3.5 shadow-sm ${className}`}>
      <div className="bg-white rounded px-2 py-1 flex flex-col items-center mr-2.5">
        {/* Torch / Flame SVG */}
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#002f6c] fill-current">
          <path d="M12 2C11 4 9 6 9 8C9 10 11 11 11 13C11 14 10 15 9 15C10 17 12 17 12 17C12 17 14 17 15 15C14 15 13 14 13 13C13 11 15 10 15 8C15 6 13 4 12 2Z" />
          <rect x="7" y="18" width="10" height="2" rx="1" fill="#002f6c" />
        </svg>
        <span className="text-[10px] font-black text-[#002f6c] tracking-tighter leading-none mt-0.5">
          BBB
        </span>
      </div>
      <div className="text-white font-bold text-base tracking-tight font-sans">
        A+ Rating
      </div>
    </div>
  );
}

export function PlantWithPurposeBadge({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`flex items-center bg-emerald-50/40 border border-emerald-200/60 rounded-lg px-3.5 py-1.5 shadow-xs ${className}`}>
      <div className="mr-2.5 text-[#16a34a]">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M12,2C11.5,4 10,6.5 8,7C6,7.5 4,6.5 3,5C3,9 6,11 8,11.5C9,11.75 10,12 11,13V22H13V15C14,14 16,13 18,11C20,9 21,6 21,3C19,4 17,4.5 15,4C13,3.5 12.5,2.5 12,2Z" />
        </svg>
      </div>
      <div className="text-left leading-none">
        <div className="flex items-center space-x-1">
          <span className="text-[11px] font-bold text-slate-800 tracking-wider">PLANT</span>
          <span className="text-[8px] font-normal text-slate-500">WITH</span>
        </div>
        <span className="block text-sm font-black text-[#15803d] tracking-wide mt-0.5">
          PURPOSE
        </span>
        <span className="block text-[7px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
          FOR PEOPLE & PLANET
        </span>
      </div>
    </div>
  );
}

export function ElevenYearsBadge({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <div className="w-full flex items-center justify-center space-x-1 mb-0.5">
        <div className="w-6 h-[1.5px] bg-[#10ACCF]"></div>
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-700">
          CELEBRATING
        </span>
        <div className="w-6 h-[1.5px] bg-[#10ACCF]"></div>
      </div>
      <div className="flex items-baseline space-x-1 leading-none">
        <span className="text-2xl font-black text-[#10ACCF] tracking-tighter font-sans">
          11
        </span>
        <span className="text-xl font-serif italic text-[#10ACCF] font-normal">
          years
        </span>
      </div>
      <div className="w-full flex items-center justify-center space-x-1 mt-0.5">
        <div className="w-4 h-[1.5px] bg-[#10ACCF]"></div>
        <span className="text-[7.5px] font-semibold uppercase tracking-widest text-slate-700">
          FOUNDED IN 2014
        </span>
        <div className="w-4 h-[1.5px] bg-[#10ACCF]"></div>
      </div>
    </div>
  );
}
