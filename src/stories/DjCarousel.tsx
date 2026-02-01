import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DjCarouselProps {
  /**
   * Slides to render within the carousel
   */
  children: React.ReactNode[];
  /**
   * Enable infinite loop
   */
  loop?: boolean;
  /**
   * Autoplay interval in ms (0 to disable)
   */
  autoplayInterval?: number;
  /**
   * Orientation of the carousel
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Show navigation arrows
   */
  showArrows?: boolean;
  /**
   * Show pagination dots
   */
  showDots?: boolean;
  /**
   * Custom class for the root container
   */
  className?: string;
  /**
   * Custom class for the slide container
   */
  slideClassName?: string;
}

/**
 * DjCarousel is a premium slider component powered by Embla Carousel.
 * It features buttery-smooth physics, touch/drag support, and customizable navigation.
 */
export const DjCarousel: React.FC<DjCarouselProps> = ({
  children,
  loop = true,
  autoplayInterval = 0,
  orientation = 'horizontal',
  showArrows = true,
  showDots = true,
  className,
  slideClassName,
}) => {
  const plugins = autoplayInterval > 0 ? [Autoplay({ delay: autoplayInterval, stopOnInteraction: false })] : [];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop, 
    axis: orientation === 'horizontal' ? 'x' : 'y' 
  }, plugins);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className={cn("relative group/carousel overflow-hidden bg-white dark:bg-slate-950 rounded-3xl", className)}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className={cn(
          "flex touch-pan-y h-full",
          orientation === 'horizontal' ? '' : 'flex-col'
        )}>
          {React.Children.map(children, (child, index) => (
            <div 
              key={index} 
              className={cn(
                "relative min-w-0 flex-[0_0_100%] h-full",
                slideClassName
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-xl transition-all",
              "hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none",
              "opacity-0 group-hover/carousel:opacity-100"
            )}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft size={24} className="text-slate-900 dark:text-white" />
          </button>
          <button
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-xl transition-all",
              "hover:scale-110 active:scale-95 disabled:opacity-0 disabled:pointer-events-none",
              "opacity-0 group-hover/carousel:opacity-100"
            )}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight size={24} className="text-slate-900 dark:text-white" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === selectedIndex 
                  ? "w-8 bg-slate-900 dark:bg-white" 
                  : "w-1.5 bg-slate-900/20 dark:bg-white/20 hover:bg-slate-900/40 dark:hover:bg-white/40"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
