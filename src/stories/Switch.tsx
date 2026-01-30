import React from 'react';
import { useId } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the switch
   */
  label?: string;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjSwitch is a high-end toggle component with smooth physics and tactile interaction.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, theme, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className={cn("flex items-center gap-3 group/sw", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
        <div className="relative inline-flex items-center cursor-pointer">
          <input
            {...props}
            type="checkbox"
            id={id}
            ref={ref}
            className="peer sr-only"
          />
          <div className={cn(
            "w-11 h-6 rounded-full border-2 transition-all duration-300",
            "bg-slate-100 border-slate-200 peer-hover:border-slate-300",
            "dark:bg-slate-900 dark:border-slate-800 dark:peer-hover:border-slate-700",
            "peer-checked:bg-slate-900 peer-checked:border-slate-900",
            "dark:peer-checked:bg-white dark:peer-checked:border-white",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-slate-400 peer-focus-visible:ring-offset-2",
            "ring-offset-white dark:ring-offset-slate-950",
            className
          )}>
            <div className={cn(
              "absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
              "bg-white border border-slate-100 shadow-sm",
              "dark:bg-slate-400 dark:border-transparent",
              "peer-checked:translate-x-5 peer-checked:bg-white",
              "dark:peer-checked:bg-slate-900",
              "group-active/sw:w-6 transition-all"
            )} />
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

Switch.displayName = 'Switch';
