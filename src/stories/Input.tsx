import React, { useId, type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label above the input
   */
  label?: string;
  /**
   * Optional helper text below the input
   */
  helperText?: string;
  /**
   * If true, displays an error state
   */
  error?: boolean;
  /**
   * Left side icon or element
   */
  leftIcon?: ReactNode;
  /**
   * Right side icon or element
   */
  rightIcon?: ReactNode;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjInput is a production-ready input field with premium focus mechanics and icon integration.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, leftIcon, rightIcon, theme, id: providedId, ...props }, ref) => {
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
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors">
              {leftIcon}
            </div>
          )}
          <input
            {...props}
            id={id}
            ref={ref}
            className={cn(
              "w-full h-11 px-4 text-sm bg-white dark:bg-slate-950 outline-none transition-all duration-300",
              "border-2 border-slate-100 hover:border-slate-200 focus:border-slate-900",
              "dark:border-slate-900 dark:hover:border-slate-800 dark:focus:border-white",
              "rounded-xl placeholder:text-slate-400",
              "focus:shadow-xl focus:shadow-slate-900/5 dark:focus:shadow-white/5",
              error && "border-rose-500 hover:border-rose-600 focus:border-rose-600 dark:border-rose-800",
              leftIcon && "pl-11",
              rightIcon && "pr-11",
              className
            )}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && (
          <span className={cn(
            "text-xs ml-1 transition-colors",
            error ? "text-rose-500" : "text-slate-500 dark:text-slate-400"
          )}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
