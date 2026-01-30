import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, adds a hover animation and lifting effect
   */
  interactive?: boolean;
  /**
   * Border radius of the card
   * @default "2xl"
   */
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /**
   * Shadow elevation
   * @default "md"
   */
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjCard is a high-end container with premium shadows and glassmorphism capabilities.
 */
export const Card = ({
  className,
  interactive = false,
  rounded = "2xl",
  shadow = "md",
  theme,
  children,
  ...props
}: CardProps) => {
  const roundedStyles = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-[24px]",
    "3xl": "rounded-[32px]",
  };

  const shadowStyles = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md shadow-slate-900/5",
    lg: "shadow-lg shadow-slate-900/5",
    xl: "shadow-xl shadow-slate-900/10",
    "2xl": "shadow-2xl shadow-slate-900/15",
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 transition-all duration-300 overflow-hidden",
        roundedStyles[rounded],
        shadowStyles[shadow],
        interactive && "hover:-translate-y-1 hover:shadow-2xl hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer",
        theme === 'dark' && 'dark',
        theme === 'light' && 'light',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pb-3 border-b border-slate-50 dark:border-slate-900", className)} {...props} />
);

export const CardBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props} />
);

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-3 border-t border-slate-50 dark:border-slate-900 flex items-center justify-between", className)} {...props} />
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';
