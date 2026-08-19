import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { PageId } from '../types';
import Link from './Link';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenHireModal: (role?: string) => void;
  onOpenScheduleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handlePageClick = (page: PageId, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-[#132930] pt-14 pb-12 border-t border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row: Logo on Left + 4 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Logo Column */}
          <div className="md:col-span-2 flex items-start">
            <Link
              href="#home"
              onClick={(e) => handlePageClick('home', e)}
              className="group focus:outline-none cursor-pointer py-1 block"
              aria-label="RestaurantZone Home"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Rotated Cyan Diamond with rounded corners matching screenshot */}
                <div className="absolute inset-1 bg-[#10ACCF] rounded-[11px] rotate-45 shadow-[0_4px_14px_rgba(16,172,207,0.35)] group-hover:scale-105 transition-transform duration-200"></div>

                {/* Centered White Circular Plate with Fork & Spoon / Knife icon */}
                <div className="relative z-10 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
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
          </div>

          {/* 4 Link Columns matching Image 2 */}
          <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Company */}
            <div className="space-y-3.5">
              <h4 className="text-[17px] font-bold text-[#132930] tracking-tight">
                Company
              </h4>
              <ul className="space-y-2 text-[15px] text-[#212529]">
                <li>
                  <Link href="#why-rz" onClick={(e) => handlePageClick('why-rz', e)} className="cursor-pointer text-left block text-[#212529]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#reviews" onClick={(e) => handlePageClick('reviews', e)} className="cursor-pointer text-left block text-[#212529]">
                    Customer Stories
                  </Link>
                </li>
                <li>
                  <Link href="#why-rz" onClick={(e) => handlePageClick('why-rz', e)} className="cursor-pointer text-left block text-[#212529]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" onClick={(e) => handlePageClick('contact', e)} className="cursor-pointer text-left block text-[#212529]">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#why-rz" onClick={(e) => handlePageClick('why-rz', e)} className="cursor-pointer text-left block text-[#212529]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#home" onClick={(e) => handlePageClick('home', e)} className="cursor-pointer text-left block text-[#212529]">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="#contact" onClick={(e) => handlePageClick('contact', e)} className="cursor-pointer text-left block text-[#212529]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Recruiting Services */}
            <div className="space-y-3.5">
              <h4 className="text-[17px] font-bold text-[#132930] tracking-tight">
                Recruiting Services
              </h4>
              <ul className="space-y-2 text-[15px] text-[#212529]">
                <li>
                  <Link href="#services" onClick={(e) => handlePageClick('services', e)} className="cursor-pointer text-left block text-[#212529]">
                    Restaurant Recruiting
                  </Link>
                </li>
                <li>
                  <Link href="#services" onClick={(e) => handlePageClick('services', e)} className="cursor-pointer text-left block text-[#212529]">
                    Hospitality Recruiting
                  </Link>
                </li>
                <li>
                  <Link href="#services" onClick={(e) => handlePageClick('services', e)} className="cursor-pointer text-left block text-[#212529]">
                    Hotel Recruiting
                  </Link>
                </li>
                <li>
                  <Link href="#specializations" onClick={(e) => handlePageClick('specializations', e)} className="cursor-pointer text-left block text-[#212529]">
                    Industries we Serve
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Job Seekers */}
            <div className="space-y-3.5">
              <h4 className="text-[17px] font-bold text-[#132930] tracking-tight">
                Job Seekers
              </h4>
              <ul className="space-y-2 text-[15px] text-[#212529]">
                <li>
                  <Link href="#job-seekers" onClick={(e) => handlePageClick('job-seekers', e)} className="cursor-pointer text-left block text-[#212529]">
                    Resume Upload
                  </Link>
                </li>
                <li>
                  <Link href="#job-seekers" onClick={(e) => handlePageClick('job-seekers', e)} className="cursor-pointer text-left block text-[#212529]">
                    Restaurant Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#job-seekers" onClick={(e) => handlePageClick('job-seekers', e)} className="cursor-pointer text-left block text-[#212529]">
                    Hospitality Resume Writing Editing
                  </Link>
                </li>
                <li>
                  <Link href="#job-seekers" onClick={(e) => handlePageClick('job-seekers', e)} className="cursor-pointer text-left block text-[#212529]">
                    Interview Coaching Career Counseling
                  </Link>
                </li>
                <li>
                  <Link href="#products" onClick={(e) => handlePageClick('products', e)} className="cursor-pointer text-left block text-[#212529]">
                    Hospitality Salary Report
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Questions? We're happy to help */}
            <div className="space-y-3.5">
              <h4 className="text-[17px] font-bold text-[#132930] tracking-tight leading-snug">
                Questions? We’re happy<br />to help.
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li>
                  <a
                    href="mailto:support@therestaurantzone.com"
                    className="text-[#10ACCF] font-medium block"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:18005135096"
                    className="text-[#10ACCF] font-medium block"
                  >
                    Call Us (800) 513-5096
                  </a>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={(e) => handlePageClick('contact', e)}
                    className="text-[#10ACCF] font-medium block cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider + Copyright & Social Icons */}
        <div className="mt-14 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[14px] text-[#212529] gap-4">
          <p>© 2026 The Restaurant Zone LLC. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/therestaurantzone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#132930] p-1"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 fill-current text-black" />
            </a>
            <a
              href="https://linkedin.com/company/the-restaurant-zone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#132930] p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 fill-current text-black" />
            </a>
            <a
              href="https://facebook.com/therestaurantzone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#132930] p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 fill-current text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

