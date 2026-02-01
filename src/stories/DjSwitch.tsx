import React, { useId } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DjSwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  /**
   * Label for the switch
   */
  label?: string;
  /**
   * Optional helper text below the label
   */
  description?: string;
  /**
   * Size of the switch
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * DjSwitch is a high-end toggle component powered by Radix UI.
 * It features smooth physics, tactile interaction, and perfect accessibility.
 */
export const DjSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  DjSwitchProps
>(({ className, label, description, size = 'md', id: providedId, ...props }, ref) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  const sizeStyles = {
    sm: { root: 'h-5 w-9', thumb: 'h-4 w-4 data-[state=checked]:translate-x-4' },
    md: { root: 'h-6 w-11', thumb: 'h-5 w-5 data-[state=checked]:translate-x-5' },
    lg: { root: 'h-7 w-14', thumb: 'h-6 w-6 data-[state=checked]:translate-x-7' },
  }[size];

  return (
    <div className="flex items-start gap-3 group/sw">
      <SwitchPrimitives.Root
        id={id}
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
          "bg-slate-200 dark:bg-slate-800",
          "data-[state=checked]:bg-slate-950 dark:data-[state=checked]:bg-white",
          sizeStyles.root,
          className
        )}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform dark:bg-slate-950",
            "data-[state=unchecked]:translate-x-0",
            sizeStyles.thumb
          )}
        />
      </SwitchPrimitives.Root>
      {(label || description) && (
        <label htmlFor={id} className="flex flex-col gap-0.5 select-none cursor-pointer">
          {label && (
            <span className="text-sm font-black tracking-tight text-slate-900 dark:text-slate-100 uppercase leading-none">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-tight">
              {description}
            </span>
          )}
        </label>
      )}
    </div>
  );
});

DjSwitch.displayName = "DjSwitch";
