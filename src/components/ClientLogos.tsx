import React from 'react';

export const ClientLogos: React.FC = () => {
  // 100% self-contained vector logos so zero images fail or break due to external source URLs
  const verifiedLogos = [
    {
      id: 'dave-and-busters',
      name: "Dave & Buster's",
      svg: (
        <svg viewBox="0 0 170 110" className="h-12 sm:h-14 w-auto object-contain">
          {/* Orange tilted circle badge */}
          <g transform="translate(85, 55) rotate(-14) translate(-50, -50)">
            <circle cx="50" cy="50" r="46" fill="#FF5E00" />
            <text
              x="50"
              y="44"
              fill="#0B1A78"
              fontSize="19"
              fontWeight="900"
              fontFamily="Arial Black, Impact, sans-serif"
              textAnchor="middle"
              transform="rotate(10 50 44)"
            >
              DAVE &amp;
            </text>
            <text
              x="50"
              y="66"
              fill="#0B1A78"
              fontSize="17"
              fontWeight="900"
              fontFamily="Arial Black, Impact, sans-serif"
              textAnchor="middle"
              transform="rotate(10 50 66)"
            >
              BUSTER&apos;S
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'daves-hot-chicken',
      name: "Dave's Hot Chicken",
      svg: (
        <svg viewBox="0 0 140 140" className="h-14 sm:h-16 w-auto object-contain">
          <circle cx="70" cy="70" r="66" fill="#E8ECEF" stroke="#1F2428" strokeWidth="3.5" />
          <circle cx="70" cy="70" r="60" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="1" />
          
          <path id="dhcArc" d="M 20 70 A 50 50 0 0 1 120 70" fill="none" />
          <text fontSize="11.5" fontWeight="900" fontFamily="Arial Black, sans-serif" fill="#111111" letterSpacing="0.8">
            <textPath href="#dhcArc" startOffset="50%" textAnchor="middle">
              DAVE&apos;S HOT CHICKEN
            </textPath>
          </text>
          <text x="70" y="124" fontSize="6.5" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#333333" textAnchor="middle">
            EST. 2017 Hollywood Blvd.
          </text>

          <g transform="translate(70, 75) scale(0.55) translate(-40, -50)">
            <path d="M 32 10 C 32 -5, 48 -5, 48 10 Z" fill="#E51828" />
            <path d="M 25 15 C 25 5, 38 5, 38 18 Z" fill="#E51828" />
            <path d="M 20 20 C 15 50, 15 80, 25 105 C 35 110, 45 110, 55 105 C 65 80, 65 50, 60 20 C 50 15, 30 15, 20 20 Z" fill="#FFDC00" stroke="#111" strokeWidth="2.5" />
            <circle cx="32" cy="40" r="9" fill="#FFF" stroke="#111" strokeWidth="2" />
            <circle cx="48" cy="40" r="9" fill="#FFF" stroke="#111" strokeWidth="2" />
            <circle cx="33" cy="40" r="4.5" fill="#000" />
            <circle cx="47" cy="40" r="4.5" fill="#000" />
            <ellipse cx="40" cy="72" rx="14" ry="20" fill="#E51828" stroke="#111" strokeWidth="2.5" />
            <ellipse cx="40" cy="73" rx="9" ry="14" fill="#FFDC00" />
          </g>
        </svg>
      ),
    },
    {
      id: 'victron-energy',
      name: 'Victron Energy',
      svg: (
        <svg viewBox="0 0 230 65" className="h-10 sm:h-12 w-auto object-contain">
          <g transform="translate(5, 5)">
            <ellipse cx="18" cy="28" rx="13" ry="20" fill="none" stroke="#25A0F5" strokeWidth="4.5" strokeDasharray="50 18" />
            <ellipse cx="29" cy="28" rx="13" ry="20" fill="none" stroke="#25A0F5" strokeWidth="4.5" strokeDasharray="50 18" />
            <ellipse cx="40" cy="28" rx="13" ry="20" fill="none" stroke="#25A0F5" strokeWidth="4.5" strokeDasharray="50 18" />
            <ellipse cx="51" cy="28" rx="13" ry="20" fill="none" stroke="#25A0F5" strokeWidth="4.5" strokeDasharray="50 18" />
          </g>
          <text x="76" y="35" fill="#000000" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
            victron energy
          </text>
          <text x="78" y="50" fill="#25A0F5" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="4">
            BLUE POWER
          </text>
        </svg>
      ),
    },
    {
      id: 'secure-ssl',
      name: 'Secure SSL Encryption',
      svg: (
        <svg viewBox="0 0 240 75" className="h-10 sm:h-12 w-auto object-contain">
          <path d="M 46 10 L 228 10 L 240 37.5 L 228 65 L 46 65 Z" fill="#2D8525" />
          <path d="M 8 14 C 32 14, 42 5, 42 5 C 42 5, 52 14, 76 14 C 76 47, 42 70, 42 70 C 42 70, 8 47, 8 14 Z" fill="#206B19" stroke="#5DBA4C" strokeWidth="2.5" />
          <path d="M 15 19 C 32 19, 42 11, 42 11 C 42 11, 52 19, 69 19 C 69 42, 42 62, 42 62 C 42 62, 15 42, 15 19 Z" fill="#185213" />
          <path d="M 35 33 L 35 28 C 35 23, 49 23, 49 28 L 49 33" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="31" y="33" width="22" height="16" rx="2.5" fill="#FFFFFF" />
          <circle cx="42" cy="40" r="2.2" fill="#185213" />
          <text x="86" y="35" fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="0.8">
            SECURE
          </text>
          <text x="86" y="55" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="0.8">
            SSL ENCRYPTION
          </text>
        </svg>
      ),
    },
    {
      id: 'mcalisters-deli',
      name: "McAlister's Deli",
      svg: (
        <svg viewBox="0 0 250 70" className="h-10 sm:h-12 w-auto object-contain">
          <rect x="4" y="4" width="242" height="62" fill="#FFFFFF" stroke="#E25822" strokeWidth="2.5" rx="2" />
          <line x1="4" y1="10" x2="246" y2="10" stroke="#E25822" strokeWidth="1.2" />
          <line x1="4" y1="60" x2="246" y2="60" stroke="#E25822" strokeWidth="1.2" />
          <path d="M 4 22 L 22 4" stroke="#E25822" strokeWidth="2.5" />
          <path d="M 228 4 L 246 22" stroke="#E25822" strokeWidth="2.5" />
          <path d="M 4 48 L 22 66" stroke="#E25822" strokeWidth="2.5" />
          <path d="M 228 66 L 246 48" stroke="#E25822" strokeWidth="2.5" />

          <text x="125" y="39" fill="#3B6B57" fontSize="25" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle" letterSpacing="0.5">
            M<tspan fontSize="18">C</tspan>ALISTER&apos;S
          </text>
          <g transform="translate(125, 52)">
            <rect x="-38" y="-3.5" width="5.5" height="5.5" fill="#E25822" transform="rotate(45)" />
            <text x="0" y="0" fill="#E25822" fontSize="11.5" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle" letterSpacing="3.5">
              DELI
            </text>
            <rect x="38" y="-3.5" width="5.5" height="5.5" fill="#E25822" transform="rotate(45)" />
          </g>
        </svg>
      ),
    },
    {
      id: 'mcdonalds',
      name: "McDonald's",
      svg: (
        <svg viewBox="0 0 100 80" className="h-10 sm:h-12 w-auto object-contain">
          {/* Golden Arches */}
          <path
            d="M 15 70 C 15 25, 38 10, 50 42 C 62 10, 85 25, 85 70"
            fill="none"
            stroke="#FFC72C"
            strokeWidth="11"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'wendys',
      name: "Wendy's",
      svg: (
        <svg viewBox="0 0 160 60" className="h-9 sm:h-11 w-auto object-contain">
          {/* Wendy's cameo badge style */}
          <ellipse cx="30" cy="30" rx="24" ry="24" fill="#E2231A" />
          <ellipse cx="30" cy="30" rx="20" ry="20" fill="#FFF" />
          <path d="M 22 28 Q 30 18 38 28" fill="#4B9CD3" />
          <circle cx="26" cy="30" r="2.5" fill="#4B9CD3" />
          <circle cx="34" cy="30" r="2.5" fill="#4B9CD3" />
          <path d="M 26 36 Q 30 40 34 36" stroke="#E2231A" strokeWidth="2" fill="none" />
          {/* Text */}
          <text x="62" y="38" fill="#E2231A" fontSize="24" fontWeight="900" fontFamily="Brush Script MT, cursive, sans-serif">
            Wendy&apos;s
          </text>
        </svg>
      ),
    },
    {
      id: 'taco-bell',
      name: 'Taco Bell',
      svg: (
        <svg viewBox="0 0 160 60" className="h-9 sm:h-11 w-auto object-contain">
          {/* Bell Icon */}
          <path d="M 25 15 C 18 32, 12 36, 12 44 C 12 48, 18 50, 25 50 C 32 50, 38 48, 38 44 C 38 36, 32 32, 25 15 Z" fill="#702082" />
          <circle cx="25" cy="46" r="3.5" fill="#A77BCA" />
          {/* Text */}
          <text x="46" y="31" fill="#702082" fontSize="15" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="0.5">
            TACO
          </text>
          <text x="46" y="47" fill="#702082" fontSize="15" fontWeight="900" fontFamily="Arial Black, sans-serif" letterSpacing="0.5">
            BELL
          </text>
        </svg>
      ),
    },
    {
      id: 'five-guys',
      name: 'Five Guys',
      svg: (
        <svg viewBox="0 0 170 55" className="h-8 sm:h-10 w-auto object-contain">
          <rect x="2" y="2" width="166" height="51" fill="#D40000" rx="3" />
          <text x="85" y="25" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="Arial Black, sans-serif" textAnchor="middle" letterSpacing="1">
            FIVE GUYS
          </text>
          <text x="85" y="43" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif" textAnchor="middle" letterSpacing="1.5">
            BURGERS and FRIES
          </text>
        </svg>
      ),
    },
    {
      id: 'sonic',
      name: 'Sonic Drive-In',
      svg: (
        <svg viewBox="0 0 140 55" className="h-8 sm:h-10 w-auto object-contain">
          <polygon points="10,10 45,27.5 10,45" fill="#E31837" />
          <polygon points="45,10 10,27.5 45,45" fill="#FFC72C" />
          <text x="54" y="35" fill="#002D62" fontSize="20" fontWeight="900" fontFamily="Impact, Arial Black, sans-serif" letterSpacing="1">
            SONIC
          </text>
        </svg>
      ),
    },
  ];

  // Concatenate list to create infinite seamless scrolling loop
  const fullLogosList = [...verifiedLogos, ...verifiedLogos];

  return (
    <section 
      id="client-logos-section"
      className="bg-[#F8F8F8] py-12 sm:py-16 border-b border-slate-200/80 overflow-hidden relative"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
        {/* Section Heading */}
        <h2 className="text-base sm:text-xl md:text-[22px] text-[#132930] font-semibold tracking-tight leading-snug max-w-4xl mx-auto">
          Companies of all sizes small, mid &amp; large, trust &amp; use RestaurantZone daily for easier hiring
        </h2>
      </div>

      {/* Infinite Seamless Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Subtle gradient fades on left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 whitespace-nowrap">
          {fullLogosList.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-4 hover:scale-105 transition-transform duration-300 filter drop-shadow-sm opacity-90 hover:opacity-100"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
