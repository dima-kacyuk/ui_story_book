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
  /**
   * Custom border color (overrides theme defaults)
   */
  borderColor?: string;
  /**
   * Custom background color (overrides theme defaults)
   */
  backgroundColor?: string;
  /**
   * Custom text color (overrides theme defaults)
   */
  textColor?: string;
}

/**
 * DjSelect is a custom-styled native select component that matches the premium input aesthetic.
 */
export const DjSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    label, 
    helperText, 
    theme, 
    id: providedId, 
    children, 
    borderColor,
    backgroundColor,
    textColor,
    style,
    ...props 
  }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    const customStyles: React.CSSProperties = {
      ...(borderColor ? { borderColor } : {}),
      ...(backgroundColor ? { backgroundColor } : {}),
      ...(textColor ? { color: textColor } : {}),
      ...style,
    };

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
            style={customStyles}
            className={cn(
              "w-full h-11 px-4 text-sm outline-none transition-all duration-300",
              "rounded-lg appearance-none cursor-pointer",
              // Base Styles (Light/Default)
              "bg-white border-2 border-slate-200 hover:border-slate-300 focus:border-slate-900 text-slate-900",
              
              // Dark Mode (Applied if NOT forced light)
              theme !== 'light' && "dark:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-white dark:text-gray-100",
              
              // Forced Light Theme (High Contrast Black)
               theme === 'light' && "bg-white text-black border-2 border-black hover:border-black focus:border-black",
               
              // Forced Dark Theme (High Contrast White)
               theme === 'dark' && "bg-slate-950 text-white border-2 border-white hover:border-white focus:border-white",
               
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

DjSelect.displayName = 'DjSelect';
