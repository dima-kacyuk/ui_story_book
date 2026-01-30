import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ProgressProps extends ProgressPrimitive.ProgressProps {
  /**
   * Visual variant of the progress bar
   * @default "primary"
   */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'indigo';
  /**
   * The height of the bar
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
  /**
   * If true, adds an animated shine effect
   */
  animate?: boolean;
}

/**
 * DjProgress is a sleek, animated loading bar with multiple semantic variants.
 */
export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant = 'primary', size = 'md', theme, animate = true, ...props }, ref) => {
  const variants = {
    primary: "bg-slate-900 dark:bg-white",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
    indigo: "bg-indigo-600",
  };

  const sizes = {
    sm: "h-1.5",
    md: "h-3",
    lg: "h-5",
  };

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10 border border-slate-100 dark:border-white/5",
        sizes[size],
        theme === 'dark' && 'dark',
        theme === 'light' && 'light',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-all duration-500 ease-in-out relative",
          variants[variant]
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        {animate && (
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] h-full animate-progress-shine -translate-x-full" />
          </div>
        )}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = 'Progress';
