import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
// I'll check for utils first, or just implement cn here or import clsx/twMerge directly if utils isn't there.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define the variant primitives using cva (if available) or just a map.
// User didn't imply cva is installed. I'll check package.json again mentally. 
// Dependencies: clsx, tailwind-merge, lucide-react. cva is NOT in the list I saw earlier (I saw clsx, lucide-react, tailwind-merge).
// I will implement without cva to be safe, or just use a simple map object or switch.
// Actually, I can produce a high-quality component with just clsx/twMerge.

export interface DjButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isFullWidth?: boolean;
}

export const DjButton = forwardRef<HTMLButtonElement, DjButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      isFullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Design System Tokens (Google-like / Modern)
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
    
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm active:scale-[0.98]",
      secondary: "bg-blue-50 text-blue-900 hover:bg-blue-100 shadow-sm active:scale-[0.98]",
      outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 text-gray-700 shadow-sm active:scale-[0.98]",
      ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-600 active:scale-[0.98]",
      danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm active:scale-[0.98]",
      link: "text-blue-600 underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isFullWidth && "w-full",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

DjButton.displayName = "DjButton";
