import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WhyRzPage } from './pages/WhyRzPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { JobSeekersPage } from './pages/JobSeekersPage';
import { SpecializationsPage } from './pages/SpecializationsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { HireTalentModal } from './components/HireTalentModal';
import { ScheduleCallModal } from './components/ScheduleCallModal';
import { DetailModal } from './components/DetailModal';
import { ChatWidget } from './components/ChatWidget';
import { ExpertiseItem, SpecialtyItem, PageId } from './types';

export default function App() {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modal states
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Detail modal state for expertise & specialties
  const [activeExpertiseItem, setActiveExpertiseItem] = useState<ExpertiseItem | null>(null);
  const [activeSpecialtyItem, setActiveSpecialtyItem] = useState<SpecialtyItem | null>(null);

  // Listen for hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'why-rz', 'services', 'products', 'job-seekers', 'specializations', 'reviews', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenHireModal = (roleTitle?: string) => {
    setSelectedRole(roleTitle || '');
    setIsHireModalOpen(true);
  };

  const handleOpenScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const handleSelectExpertise = (item: ExpertiseItem) => {
    setActiveExpertiseItem(item);
    setActiveSpecialtyItem(null);
  };

  const handleSelectSpecialty = (item: SpecialtyItem) => {
    setActiveSpecialtyItem(item);
    setActiveExpertiseItem(null);
  };

  const handleCloseDetailModal = () => {
    setActiveExpertiseItem(null);
    setActiveSpecialtyItem(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#10ACCF]/20 selection:text-[#10ACCF]">
      {/* 1. Sticky Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenHireModal={handleOpenHireModal}
        onOpenScheduleModal={handleOpenScheduleModal}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
            onSelectExpertise={handleSelectExpertise}
            onSelectSpecialty={handleSelectSpecialty}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'why-rz' && (
          <WhyRzPage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        )}

        {currentPage === 'job-seekers' && (
          <JobSeekersPage />
        )}

        {currentPage === 'specializations' && (
          <SpecializationsPage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenHireModal={handleOpenHireModal}
            onOpenScheduleModal={handleOpenScheduleModal}
          />
        )}
      </main>

      {/* 11. Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenHireModal={handleOpenHireModal}
        onOpenScheduleModal={handleOpenScheduleModal}
      />

      {/* Interactive Modals */}
      <HireTalentModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        initialRole={selectedRole}
      />

      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />

      <DetailModal
        expertiseItem={activeExpertiseItem}
        specialtyItem={activeSpecialtyItem}
        onClose={handleCloseDetailModal}
        onHireForThis={(title) => handleOpenHireModal(title)}
      />

      {/* Floating Chat Support Widget */}
      <ChatWidget onOpenHireModal={() => handleOpenHireModal()} />
    </div>
  );
}
