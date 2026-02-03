import React, { useId } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Label for the select field
   */
  label?: string;
  /**
   * Helper text below the select
   */
  helperText?: string;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjSelect is a custom-styled native select component that matches the premium input aesthetic.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, helperText, theme, id: providedId, children, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className={cn("flex flex-col gap-2 w-full", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-slate-900 dark:text-slate-100 ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          <select
            id={id}
            ref={ref}
            className={cn(
              "w-full h-11 px-4 text-sm outline-none transition-all duration-300",
              "rounded-lg appearance-none cursor-pointer",
              // Light Mode Default
              "bg-white border-2 border-black hover:border-black focus:border-black text-black",
              // Dark Mode Overrides
              "dark:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-white dark:text-gray-100",
              // Theme prop overrides
               theme === 'light' && "bg-white text-slate-900 border-slate-200",
               theme === 'dark' && "bg-slate-950 text-gray-100 border-slate-800",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-slate-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {helperText && (
          <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
