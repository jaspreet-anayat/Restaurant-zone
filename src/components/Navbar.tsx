import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import Link from './Link';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenHireModal: (initialRole?: string) => void;
  onOpenScheduleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenHireModal, 
  onOpenScheduleModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navLinks: {
    name: string;
    pageId: PageId;
    dropdown?: { label: string; desc?: string; pageId: PageId }[];
    isMega?: boolean;
    columns?: { heading?: string; items: { label: string; pageId: PageId }[] }[];
  }[] = [
    {
      name: 'Home',
      pageId: 'home',
    },
    {
      name: 'Why RZ',
      pageId: 'why-rz',
      dropdown: [
        { label: 'Why RestaurantZone?', pageId: 'why-rz' },
        { label: 'Our Hiring Process', pageId: 'why-rz' },
        { label: 'Our Story & Mission', pageId: 'why-rz' },
        { label: 'Client Benefits & Guarantees', pageId: 'why-rz' },
        { label: 'Customer Success Stories', pageId: 'reviews' },
        { label: 'Client Reviews & Ratings', pageId: 'reviews' },
        { label: 'Contact & Hiring Hotline', pageId: 'contact' },
      ],
    },
    {
      name: 'Recruiting Services',
      pageId: 'services',
      dropdown: [
        { label: 'Restaurant Talent Acquisition', pageId: 'services' },
        { label: 'Hospitality Executive Search', pageId: 'services' },
        { label: 'Hotel Staffing & Recruiting Services', pageId: 'services' },
        { label: 'Professional Chef Recruiting Services', pageId: 'services' },
        { label: 'Fine Dining & Sommelier Recruiting', pageId: 'services' },
        { label: 'Quick Service Restaurant (QSR) Recruiting', pageId: 'services' },
        { label: 'Franchise Talent Acquisition', pageId: 'services' },
        { label: 'Hospitality Workforce Solutions & RPO', pageId: 'services' },
      ],
    },
    {
      name: 'Products',
      pageId: 'products',
      dropdown: [
        { label: 'Recruitment Process Outsource', pageId: 'products' },
        { label: 'SwiftMatch – AI Talent Matching', pageId: 'products' },
        { label: 'Direct Hire Recruiting Services', pageId: 'products' },
        { label: 'Restaurant Recruiting Tool', pageId: 'products' },
        { label: 'Job Ad Posting Services', pageId: 'products' },
        { label: 'RZ Restaurant & Hospitality Salary Report', pageId: 'products' },
      ],
    },
    {
      name: 'Job Seekers',
      pageId: 'job-seekers',
      dropdown: [
        { label: 'Confidential Resume Upload', pageId: 'job-seekers' },
        { label: 'Live Hospitality Job Board', pageId: 'job-seekers' },
        { label: 'Hospitality Resume Writing & Editing', pageId: 'job-seekers' },
        { label: '1-on-1 Interview & Negotiation Coaching', pageId: 'job-seekers' },
      ],
    },
    {
      name: 'Specializations',
      pageId: 'specializations',
      isMega: true,
      columns: [
        {
          items: [
            { label: 'Industries We Serve', pageId: 'specializations' },
            { label: 'Corporate Hospitality Staffing', pageId: 'specializations' },
            { label: 'Hotels and Resorts', pageId: 'specializations' },
            { label: 'Casinos and Gaming', pageId: 'specializations' },
            { label: 'Travel and Tourism', pageId: 'specializations' },
            { label: 'Spa & Wellness Talent Recruiting', pageId: 'specializations' },
            { label: 'Sports and Recreation Facilities', pageId: 'specializations' },
            { label: 'Franchise Talent Acquisition', pageId: 'specializations' },
            { label: 'Food & Beverage Talent Recruiting', pageId: 'specializations' },
          ],
        },
        {
          items: [
            { label: 'Restaurants and Bars', pageId: 'specializations' },
            { label: 'Country Clubs & Private Clubs', pageId: 'specializations' },
            { label: 'Airline & Airport Staffing Services', pageId: 'specializations' },
            { label: 'Retail Talent Staffing Services', pageId: 'specializations' },
            { label: 'Cruise Lines', pageId: 'specializations' },
            { label: 'Theme Parks and Amusement Parks', pageId: 'specializations' },
            { label: 'Cultural and Heritage Sites', pageId: 'specializations' },
            { label: 'Military Food Service Recruiting', pageId: 'specializations' },
          ],
        },
      ],
    },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      ref={navRef}
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#132930]/98 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
          : 'bg-[#132930] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Diamond Icon with Plate & Cutlery matching screenshot */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center group focus:outline-none cursor-pointer py-1"
            aria-label="RestaurantZone Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
              {/* Rotated Cyan Diamond with rounded corners matching screenshot */}
              <div className="absolute inset-1 bg-[#10ACCF] rounded-[11px] rotate-45 shadow-[0_4px_14px_rgba(16,172,207,0.4)] group-hover:scale-105 transition-transform duration-200"></div>

              {/* Centered White Circular Plate with Fork & Spoon / Knife icon */}
              <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                <svg
                  className="w-4 h-4 text-[#10ACCF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Fork on the left */}
                  <path d="M7 4v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V4" />
                  <path d="M9 4v4" />
                  <path d="M9 12v8" />
                  {/* Spoon/Knife on the right */}
                  <path d="M15 4a2.5 2.5 0 0 1 2.5 2.5v3.5a2 2 0 0 1-2 2h-.5V20" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.pageId;
              const hasDropdown = Boolean(link.dropdown || link.isMega);
              const isOpen = activeDropdown === link.name;

              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={`#${link.pageId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.pageId);
                    }}
                    className={`inline-flex items-center space-x-1.5 text-[15.5px] font-medium transition-all duration-150 py-1 cursor-pointer border-b-2 ${
                      isActive || isOpen
                        ? 'text-white border-white font-semibold'
                        : 'text-white/90 hover:text-white border-transparent hover:border-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-white' : 'text-white/80 group-hover:text-white'
                        }`}
                      />
                    )}
                  </Link>

                  {/* Standard Dropdown Menu - Crisp White Card matching screenshot */}
                  {link.dropdown && isOpen && (
                    <div 
                      className="absolute top-full left-0 pt-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[340px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] py-6 px-7 border border-slate-100 flex flex-col space-y-3.5">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={`#${item.pageId}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.pageId);
                            }}
                            className="text-left text-[15.5px] font-normal text-[#000000] hover:text-[#6B7280] transition-colors duration-150 cursor-pointer leading-snug py-0.5 block tracking-[-0.01em]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mega Menu for Specializations - Crisp White Card */}
                  {link.isMega && isOpen && (
                    <div 
                      className="absolute top-full -left-28 pt-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[620px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] py-7 px-8 border border-slate-100 grid grid-cols-2 gap-8">
                        {link.columns?.map((col, cIdx) => (
                          <div key={cIdx} className="space-y-3.5">
                            {col.heading && (
                              <div className="text-[12px] font-bold uppercase tracking-wider text-[#10ACCF] pb-2 border-b border-slate-100">
                                {col.heading}
                              </div>
                            )}
                            <div className="space-y-3">
                              {col.items.map((item, iIdx) => (
                                <Link
                                  key={iIdx}
                                  href={`#${item.pageId}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.pageId);
                                  }}
                                  className="text-left block text-[15px] font-normal text-[#000000] hover:text-[#6B7280] transition-colors duration-150 cursor-pointer tracking-[-0.01em] leading-snug"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Buttons with enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Phone Number Pill Button */}
            <a
              href="tel:18005135096"
              className="border border-white text-white hover:bg-white hover:text-[#132930] text-sm xl:text-[15px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md active:scale-95"
            >
              1-800-513-5096
            </a>

            {/* Solid Cyan Hire Talent CTA Link */}
            <Link
              href="#hire-talent"
              id="header-hire-talent-btn"
              onClick={(e) => {
                e.preventDefault();
                onOpenHireModal();
              }}
              className="bg-[#10ACCF] hover:bg-[#0dbadb] active:scale-95 text-white font-bold px-7 py-2.5 rounded-full text-sm xl:text-[15px] transition-all duration-200 shadow-[0_2px_14px_rgba(16,172,207,0.38)] hover:shadow-[0_0_24px_rgba(16,172,207,0.65)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap inline-block text-center"
            >
              Hire Talent
            </Link>
          </div>

          {/* Mobile Actions Header */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="#hire-talent"
              onClick={(e) => {
                e.preventDefault();
                onOpenHireModal();
              }}
              className="bg-[#10ACCF] hover:bg-[#0dbadb] text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-sm cursor-pointer inline-block text-center active:scale-95 transition-all"
            >
              Hire Talent
            </Link>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#10ACCF] p-2 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#132930] border-b border-white/10 px-4 pt-3 pb-8 space-y-4 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-1 divide-y divide-white/10">
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.dropdown || link.columns);
              const isExpanded = mobileExpandedSection === link.name;

              return (
                <div key={link.name} className="pt-2 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`#${link.pageId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.pageId);
                      }}
                      className={`text-left py-1 text-base font-medium cursor-pointer ${
                        currentPage === link.pageId ? 'text-[#10ACCF] font-bold' : 'text-white hover:text-[#10ACCF]'
                      }`}
                    >
                      {link.name}
                    </Link>

                    {hasDropdown && (
                      <button
                        onClick={() => setMobileExpandedSection(isExpanded ? null : link.name)}
                        className="p-2 text-slate-400 hover:text-white cursor-pointer"
                        aria-label={`Expand ${link.name} sub-options`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#10ACCF]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Accordion Submenu */}
                  {hasDropdown && isExpanded && (
                    <div className="pl-3 mt-2 space-y-2 bg-white/5 p-3 rounded-xl border border-white/10">
                      {link.dropdown?.map((item, idx) => (
                        <Link
                          key={idx}
                          href={`#${item.pageId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.pageId);
                          }}
                          className="w-full text-left py-1.5 text-xs text-slate-200 hover:text-[#10ACCF] flex items-center space-x-1.5 cursor-pointer"
                        >
                          <ChevronRight className="w-3 h-3 text-[#10ACCF] flex-shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      ))}

                      {link.columns?.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-bold text-[#10ACCF] uppercase tracking-wider block">
                            {col.heading}
                          </span>
                          {col.items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={`#${sub.pageId}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(sub.pageId);
                              }}
                              className="w-full text-left py-1 text-xs text-slate-300 hover:text-[#10ACCF] pl-2 block cursor-pointer"
                            >
                              • {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Mobile Action Buttons */}
          <div className="pt-3 flex flex-col space-y-2.5 border-t border-white/10">
            <a
              href="tel:18005135096"
              className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold text-white py-3 border border-white rounded-full bg-transparent hover:bg-white hover:text-[#132930] transition-colors"
            >
              <span>1-800-513-5096</span>
            </a>
            <Link
              href="#hire-talent"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="w-full bg-[#10ACCF] hover:bg-[#0dbadb] text-white font-bold py-3 rounded-full text-center text-xs sm:text-sm shadow-md cursor-pointer inline-block"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
