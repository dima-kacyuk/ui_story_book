import React, { useId } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Optional label above the textarea
   */
  label?: string;
  /**
   * Optional helper text below
   */
  helperText?: string;
  /**
   * If true, displays an error state
   */
  error?: boolean;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjTextarea is a premium multi-line input field with smooth resizing and focus mechanics.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, helperText, error, theme, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className={cn("flex flex-col gap-2 w-full", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-slate-900 dark:text-slate-100 ml-1">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full min-h-[100px] px-4 py-3 text-sm bg-white dark:bg-slate-950 outline-none transition-all duration-300",
            "border-2 border-slate-100 hover:border-slate-200 focus:border-slate-900",
            "dark:border-slate-900 dark:hover:border-slate-800 dark:focus:border-white",
            "rounded-xl placeholder:text-slate-400 resize-y",
            "focus:shadow-xl focus:shadow-slate-900/5 dark:focus:shadow-white/5",
            error && "border-rose-500 hover:border-rose-600 focus:border-rose-600 dark:border-rose-800",
            className
          )}
          {...props}
        />
        {helperText && (
          <span className={cn(
            "text-xs ml-1",
            error ? "text-rose-500" : "text-slate-500 dark:text-slate-400"
          )}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
