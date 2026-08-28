'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────
interface Review {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
  source: 'google' | 'mock';
}

// ── Star Rating Component ──────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-[#777F5C] text-[#777F5C]' : 'fill-none text-[#D4CFC7]'}
        />
      ))}
    </div>
  );
}

// ── Review Card ────────────────────────────────────────────────────────
function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <blockquote className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DD] flex flex-col h-full">
      {/* Quote mark */}
      <span className="font-serif text-[2.5rem] text-[#E8E4DD] leading-none select-none mb-4" aria-hidden="true">
        &ldquo;
      </span>

      {/* Review text */}
      <p className="font-sans text-[0.9rem] sm:text-[0.938rem] text-[#5A5A5A] leading-[1.75] flex-1 mb-6">
        {review.text}
      </p>

      {/* Footer: stars + author */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t border-[#E8E4DD]">
        <div>
          <p className="font-sans text-[0.875rem] font-medium text-[#2C2C2C]">
            {review.author}
          </p>
          <p className="font-sans text-[0.75rem] text-[#A39B82] mt-0.5">
            {review.relativeTime}
          </p>
        </div>
        <Stars rating={review.rating} />
      </div>
    </blockquote>
  );
}

// ── Loading Skeleton ───────────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-end gap-4 mb-14">
        <div className="h-12 w-12 rounded-full bg-[#E8E4DD]" />
        <div className="space-y-2">
          <div className="h-8 w-64 rounded bg-[#E8E4DD]" />
          <div className="h-4 w-40 rounded bg-[#E8E4DD]" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DD]">
            <div className="h-10 w-6 rounded bg-[#E8E4DD] mb-4" />
            <div className="space-y-3 mb-6">
              <div className="h-4 w-full rounded bg-[#E8E4DD]" />
              <div className="h-4 w-full rounded bg-[#E8E4DD]" />
              <div className="h-4 w-3/4 rounded bg-[#E8E4DD]" />
            </div>
            <div className="h-px bg-[#E8E4DD] mb-4" />
            <div className="flex justify-between">
              <div className="h-4 w-24 rounded bg-[#E8E4DD]" />
              <div className="h-4 w-20 rounded bg-[#E8E4DD]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────
export function ReviewsSection() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Skeleton />;
  if (!data) return null;

  const displayReviews = data.reviews.slice(0, 3);

  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header + rating summary */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
              Avaliações
            </p>
            <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] text-balance">
              O que nossos pacientes dizem.
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border border-[#E8E4DD] shrink-0">
            <span className="font-serif text-[2.25rem] text-[#2C2C2C] leading-none">
              {data.rating.toFixed(1).replace('.', ',')}
            </span>
            <div className="flex flex-col gap-1">
              <Stars rating={Math.round(data.rating)} />
              <p className="font-sans text-[0.75rem] text-[#A39B82]">
                {data.totalReviews} avaliações no Google
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review, index) => (
            <ReviewCard key={review.author} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
