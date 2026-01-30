import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The visual style of the badge
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'glass' | 'outline';
  /**
   * The size of the badge
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, the badge will be a perfect pill shape
   */
  pill?: boolean;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjBadge is a premium status indicator with refined transitions and dual-theme support.
 */
export const Badge = ({
  className,
  variant = 'primary',
  size = 'md',
  pill = true,
  theme,
  children,
  ...props
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 select-none";
  
  const variants = {
    primary: "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-transparent shadow-sm",
    secondary: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700",
    success: "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-400",
    danger: "bg-rose-50 text-rose-600 border border-rose-100 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-400",
    warning: "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-400",
    info: "bg-sky-50 text-sky-600 border border-sky-100 dark:bg-sky-950/30 dark:border-sky-900/50 dark:text-sky-400",
    glass: "bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-lg",
    outline: "bg-transparent border-2 border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px] gap-1",
    md: "px-2.5 py-1 text-[11px] gap-1.5",
    lg: "px-3 py-1.5 text-xs gap-2",
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        pill ? "rounded-full" : "rounded-md",
        theme === 'dark' && 'dark',
        theme === 'light' && 'light',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Badge.displayName = 'Badge';
