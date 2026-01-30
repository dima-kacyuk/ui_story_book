import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TabsProps extends TabsPrimitive.TabsProps {
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
  /**
   * Tabs content
   */
  children?: React.ReactNode;
}

/**
 * DjTabs is a premium navigation component with smooth transitions and tactile indicator effects.
 */
export const Tabs = ({ className, theme, ...props }: TabsProps) => (
  <TabsPrimitive.Root 
    className={cn(
      "flex flex-col w-full", 
      theme === 'dark' && 'dark', 
      theme === 'light' && 'light', 
      className
    )} 
    {...props} 
  />
);

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 p-1 text-slate-500 border border-slate-100 dark:border-slate-800",
      className
    )}
    {...props}
  />
));

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-bold transition-all duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-xl data-[state=active]:shadow-slate-900/5",
      "dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white dark:data-[state=active]:shadow-white/5",
      className
    )}
    {...props}
  />
));

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 p-2 focus-visible:outline-none animate-in fade-in slide-in-from-top-2 duration-300",
      className
    )}
    {...props}
  />
));

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
