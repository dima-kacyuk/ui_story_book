import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AccordionProps extends AccordionPrimitive.AccordionSingleProps {
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjAccordion is a kinetic, accessible component for organizing content into collapsible sections.
 */
export const Accordion = ({ className, theme, ...props }: any) => (
  <AccordionPrimitive.Root 
    className={cn(
      "w-full space-y-2", 
      theme === 'dark' && 'dark', 
      theme === 'light' && 'light', 
      className
    )} 
    {...props} 
  />
);

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 transition-all duration-300",
      "data-[state=open]:shadow-xl data-[state=open]:shadow-slate-900/5 dark:data-[state=open]:shadow-white/5",
      className
    )}
    {...props}
  />
));

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-5 text-sm font-bold transition-all hover:bg-slate-50 dark:hover:bg-white/5 group",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 text-slate-400" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-slate-500 dark:text-slate-400",
      className
    )}
    {...props}
  >
    <div className="p-5 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
