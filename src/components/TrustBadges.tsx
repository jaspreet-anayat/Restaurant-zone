import React from 'react';
import {
  WSJLogo,
  BusinessInsiderLogo,
  MarketplaceLogo,
  TotalFoodserviceLogo,
  TrustpilotBadge,
  BBBAplusBadge,
  SecureSSLBadge,
  PlantWithPurposeBadge,
  ElevenYearsBadge,
} from './BrandLogos';

export const TrustBadges: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3x3 Balanced Logo Grid matching Image 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-x-16 items-center justify-items-center">
          {/* Row 1: WSJ, Business Insider, Marketplace */}
          <div className="flex items-center justify-center w-full h-14">
            <WSJLogo className="h-10" />
          </div>
          <div className="flex items-center justify-center w-full h-14">
            <BusinessInsiderLogo className="h-10" />
          </div>
          <div className="flex items-center justify-center w-full h-14">
            <MarketplaceLogo className="h-8" />
          </div>

          {/* Row 2: Total Foodservice, Trustpilot, Secure SSL */}
          <div className="flex items-center justify-center w-full h-14">
            <TotalFoodserviceLogo className="h-11" />
          </div>
          <div className="flex items-center justify-center w-full h-14">
            <TrustpilotBadge className="h-11" />
          </div>
          <div className="flex items-center justify-center w-full h-14">
            <SecureSSLBadge className="h-11" />
          </div>

          {/* Row 3: BBB, Plant with Purpose, 11 Years */}
          <div className="flex items-center justify-center w-full h-14">
            <BBBAplusBadge className="h-11" />
          </div>
          <div className="flex items-center justify-center w-full h-14">
            <PlantWithPurposeBadge className="h-11" />
          </div>
          <div className="flex items-center justify-center w-full h-14">
            <ElevenYearsBadge className="h-11" />
          </div>
        </div>

        {/* Bottom Horizontal Divider Line matching Image 3 */}
        <div className="w-full h-px bg-slate-200 mt-16"></div>
      </div>
    </section>
  );
};
