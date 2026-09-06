import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, RotateCcw } from 'lucide-react';

interface HorizontalCarouselProps {
  children: React.ReactNode[];
  labels?: string[];
}

export const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ children, labels = [] }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = React.Children.count(children);

  const scrollTo = useCallback((index: number) => {
    if (!trackRef.current) return;
    const slides = trackRef.current.children;
    if (slides && slides[index]) {
      const slide = slides[index] as HTMLElement;
      trackRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  }, []);

  // Looping prev & next functions
  const prev = useCallback(() => {
    const nextIdx = activeIndex === 0 ? count - 1 : activeIndex - 1;
    scrollTo(nextIdx);
  }, [activeIndex, count, scrollTo]);

  const next = useCallback(() => {
    const nextIdx = activeIndex === count - 1 ? 0 : activeIndex + 1;
    scrollTo(nextIdx);
  }, [activeIndex, count, scrollTo]);

  // Track active scroll index via scroll observer
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!track) return;
        const scrollPosition = track.scrollLeft;
        const totalWidth = track.scrollWidth;
        const itemWidth = totalWidth / count;
        const index = Math.round(scrollPosition / itemWidth);
        const clamped = Math.max(0, Math.min(count - 1, index));
        setActiveIndex(clamped);
      }, 50);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [count]);

  // Keyboard navigation support (ArrowLeft / ArrowRight) when section in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect) return;
      // Only react if carousel is roughly in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === 'ArrowLeft') {
          prev();
        } else if (e.key === 'ArrowRight') {
          next();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  return (
    <div className="relative w-full bg-white group select-none">
      {/* Top Section Indicator Badge Bar */}
      <div className="bg-zinc-50 border-y border-zinc-200/80 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono-code uppercase font-semibold tracking-wider text-zinc-700">
            Interactive Showcase Hub
          </span>
        </div>

        {/* Tab Pills */}
        <div className="hidden md:flex items-center gap-1.5 bg-zinc-200/70 p-1 rounded-full">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-white text-zinc-900 shadow-sm font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {labels[i] || `Slide ${i + 1}`}
            </button>
          ))}
        </div>

        {/* Slide Counter & Next Section Cue */}
        <button
          onClick={next}
          className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 px-3 py-1 rounded-full transition-all cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Floating Middle Left Arrow Button (Loopable) */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-zinc-800 hover:text-zinc-950 border border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Previous Slide (Looping)"
        title="Previous Slide (Looping)"
      >
        <ChevronLeft size={22} className="stroke-[2.5]" />
      </button>

      {/* Floating Middle Right Arrow Button (Loopable) */}
      <button
        onClick={next}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-zinc-800 hover:text-zinc-950 border border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Next Slide (Looping)"
        title="Next Slide (Looping)"
      >
        <ChevronRight size={22} className="stroke-[2.5]" />
      </button>

      {/* Slide Track — Horizontal smooth snap scrolling */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-start transition-opacity duration-300"
            style={{ minWidth: '100%' }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Bottom Control Bar with Looping navigation, dots, and continue guide */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 bg-white border-t border-zinc-200/80">
        {/* Prev Slide indicator with label */}
        <button
          onClick={prev}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all cursor-pointer"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">
            {activeIndex === 0 ? labels[count - 1] || 'Previous' : labels[activeIndex - 1] || 'Previous'}
          </span>
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              title={labels[i] || `Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'w-7 h-2.5 bg-zinc-900'
                  : 'w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400'
              }`}
              aria-label={labels[i] || `Go to slide ${i + 1}`}
            />
          ))}
          <span className="ml-2 text-xs font-mono-code text-zinc-500 hidden xs:inline">
            {activeIndex + 1} / {count}
          </span>
        </div>

        {/* Continue / Next Slide indicator with label */}
        <button
          onClick={next}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm hover:shadow transition-all cursor-pointer"
        >
          <span>
            {activeIndex === count - 1 ? 'Loop to Start' : 'Continue'}
          </span>
          {activeIndex === count - 1 ? (
            <RotateCcw size={14} className="ml-0.5" />
          ) : (
            <ArrowRight size={14} className="ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
};
