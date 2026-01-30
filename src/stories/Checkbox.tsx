import React, { useId } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Optional description text below the label
   */
  description?: string;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjCheckbox is a premium, accessible checkbox with a custom-built tactile checkmark.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, theme, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className={cn("flex items-start gap-3 group/cb", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
        <div className="relative flex items-center h-5">
          <input
            {...props}
            type="checkbox"
            id={id}
            ref={ref}
            className="peer absolute inset-0 w-5 h-5 opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
          />
          <div className={cn(
            "w-5 h-5 rounded-md border-2 transition-all duration-300 ease-out",
            "bg-white border-slate-200 peer-hover:border-slate-300",
            "dark:bg-slate-950 dark:border-slate-800 dark:peer-hover:border-slate-700",
            "peer-checked:bg-slate-900 peer-checked:border-slate-900",
            "dark:peer-checked:bg-white dark:peer-checked:border-white",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-slate-400 peer-focus-visible:ring-offset-2",
            "ring-offset-white dark:ring-offset-slate-950",
            "group-active/cb:scale-95",
            className
          )}>
            <svg
              className="w-3.5 h-3.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-slate-900 scale-0 peer-checked:scale-100 transition-transform duration-300 ease-out fill-none stroke-current stroke-[3]"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        {(label || description) && (
          <label htmlFor={id} className="flex flex-col cursor-pointer select-none">
            {label && (
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 peer-disabled:opacity-50 transition-colors">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {description}
              </span>
            )}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
