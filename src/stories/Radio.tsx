import React, { useId } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the radio button
   */
  label?: string;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjRadio is a premium, accessible radio button with a smooth circular animation.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, theme, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className={cn("flex items-center gap-3 group/radio", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
        <div className="relative flex items-center h-5">
          <input
            {...props}
            type="radio"
            id={id}
            ref={ref}
            className="peer absolute inset-0 w-5 h-5 opacity-0 cursor-pointer z-10"
          />
          <div className={cn(
            "w-5 h-5 rounded-full border-2 transition-all duration-300 ease-out",
            "bg-white border-slate-200 peer-hover:border-slate-300",
            "dark:bg-slate-950 dark:border-slate-800 dark:peer-hover:border-slate-700",
            "peer-checked:bg-slate-900 peer-checked:border-slate-900",
            "dark:peer-checked:bg-white dark:peer-checked:border-white",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-slate-400 peer-focus-visible:ring-offset-2",
            "group-active/radio:scale-95",
            className
          )}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white dark:bg-slate-950 scale-0 peer-checked:scale-100 transition-transform duration-300 ease-out" />
          </div>
        </div>
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-slate-900 dark:text-slate-100 cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
