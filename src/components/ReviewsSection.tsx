import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/mockData';
import { ReviewItem } from '../types';

interface ReviewsSectionProps {
  onOpenReviewModal?: (review: ReviewItem) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviewModal }) => {
  const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Google Rating Summary Badge */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0">
            <span className="text-xl sm:text-2xl font-black text-[#132930] tracking-tight uppercase font-sans">
              EXCELLENT
            </span>

            {/* 5 Stars */}
            <div className="flex items-center space-x-1 my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} viewBox="0 0 24 24" className="w-5 h-5 fill-[#faaf00] text-[#faaf00]">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Based on <strong className="text-slate-800 font-bold">164 reviews</strong>
            </div>

            {/* Google Logo */}
            <div className="mt-3 flex items-center space-x-1.5">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-semibold text-slate-700">Google</span>
            </div>
          </div>

          {/* Right Column: 4 Authentic Review Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-8 rounded-full ${rev.avatarColor} text-white flex items-center justify-center font-bold text-xs shadow-sm`}
                      >
                        {rev.avatarLetter}
                      </div>
                      <div className="leading-tight">
                        <h4 className="text-xs font-bold text-slate-900 truncate max-w-[110px]">
                          {rev.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 block">{rev.timeAgo}</span>
                      </div>
                    </div>

                    {/* Google G small icon */}
                    <div className="w-4 h-4 opacity-80">
                      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center space-x-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#faaf00] text-[#faaf00]">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-[#212529] leading-relaxed line-clamp-4">
                    {rev.text}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedReview(rev)}
                    className="text-[11px] font-semibold text-[#10ACCF] hover:underline cursor-pointer"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Subtext Link */}
        <div className="mt-8 text-right">
          <span className="text-xs text-slate-400 font-medium">
            Showing our verified Google reviews (4.9 / 5.0)
          </span>
        </div>
      </div>

      {/* Review Detail Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132930]/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-[24px] max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full ${selectedReview.avatarColor} text-white flex items-center justify-center font-bold text-sm`}
                >
                  {selectedReview.avatarLetter}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#132930]">{selectedReview.name}</h4>
                  <span className="text-xs text-slate-400">
                    {selectedReview.role} • {selectedReview.timeAgo}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="text-slate-400 hover:text-slate-600 p-1 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center space-x-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="w-4 h-4 fill-[#faaf00] text-[#faaf00]">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="text-xs font-semibold text-slate-600 ml-1.5">Verified Google Review</span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">{selectedReview.fullText || selectedReview.text}</p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedReview(null)}
                className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white text-xs font-bold px-5 py-2 rounded-full cursor-pointer shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

