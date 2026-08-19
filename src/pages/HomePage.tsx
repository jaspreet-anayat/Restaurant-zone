import React from 'react';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { SpecialtiesSection } from '../components/SpecialtiesSection';
import { PainPointsBanner } from '../components/PainPointsBanner';
import { SolutionsSection } from '../components/SolutionsSection';
import { ExpertiseGrid } from '../components/ExpertiseGrid';
import { ReviewsSection } from '../components/ReviewsSection';
import { BottomCTA } from '../components/BottomCTA';
import { TrustBadges } from '../components/TrustBadges';
import { ExpertiseItem, SpecialtyItem, PageId } from '../types';

interface HomePageProps {
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
  onSelectExpertise: (item: ExpertiseItem) => void;
  onSelectSpecialty: (item: SpecialtyItem) => void;
  onNavigate?: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenHireModal,
  onOpenScheduleModal,
  onSelectExpertise,
  onSelectSpecialty,
}) => {
  return (
    <>
      {/* 1. Hero Section with 5-metric Stats Bar */}
      <Hero
        onOpenHireModal={() => onOpenHireModal()}
        onOpenScheduleModal={onOpenScheduleModal}
      />

      {/* 2. Client Logos / Social Proof Bar */}
      <ClientLogos />

      {/* 3. Specialties Section ("Finding Great Hospitality Talent is Tough") */}
      <SpecialtiesSection
        onSelectSpecialty={onSelectSpecialty}
        onOpenHireModal={onOpenHireModal}
      />

      {/* 4. Dark Slate/Teal Banner ("Our team would love to help you guys!") */}
      <PainPointsBanner
        onOpenScheduleModal={onOpenScheduleModal}
        onOpenHireModal={onOpenHireModal}
      />

      {/* 5. Staffing Solutions Section ("Imagine Saying Goodbye to Staffing Headaches") */}
      <SolutionsSection onOpenHireModal={onOpenHireModal} />

      {/* 6. Our Areas of Expertise 10-Item Visual Grid */}
      <ExpertiseGrid
        onSelectExpertise={onSelectExpertise}
        onOpenHireModal={onOpenHireModal}
      />

      {/* 7. Google Reviews & Testimonials Section */}
      <ReviewsSection />

      {/* 8. Bottom CTA Banner ("Ready to find your next Superstar?") */}
      <BottomCTA
        onOpenHireModal={() => onOpenHireModal()}
        onOpenScheduleModal={onOpenScheduleModal}
      />

      {/* 9. Press, Media & Trust Badges */}
      <TrustBadges />
    </>
  );
};
