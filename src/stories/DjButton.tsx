import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DjButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the visual style of the button.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link" | "glass";
  /**
   * Controls the size of the button.
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  /**
   * If true, displays a loading spinner and disables the button.
   */
  isLoading?: boolean;
  /**
   * Icon element to display before the button text.
   */
  leftIcon?: ReactNode;
  /**
   * Icon element to display after the button text.
   */
  rightIcon?: ReactNode;
  /**
   * If true, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;
  /**
   * If true, the button will have fully rounded corners (pill shape).
   */
  pill?: boolean;
  /**
   * If true, renders as a child element (Slot pattern). 
   * Useful for using the button as a link (<a>) or with other frameworks like Next.js Link.
   */
  asChild?: boolean;
}

/**
 * **DjButton** is a polymorphic, fully accessible button component with multiple variants and states.
 * It follows modern design principles and supports the Slot pattern for composition.
 */
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
      pill = false,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine the component to render (Button or Slot)
    const Comp = asChild ? Slot : "button";

    // Design System Tokens
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]";
    
    // Variant Styles
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg border border-transparent",
      secondary: "bg-blue-50 text-blue-900 hover:bg-blue-100 border border-transparent",
      outline: "border border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 text-gray-700 shadow-sm",
      ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-600",
      danger: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg border border-transparent",
      link: "text-blue-600 underline-offset-4 hover:underline shadow-none active:scale-100",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-sm",
    };

    // Size Styles
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-base",
      xl: "h-14 px-10 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isFullWidth && "w-full",
          pill ? "rounded-full" : "rounded-lg",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Note: When asChild is true, we need to be careful with internal structure. 
            Slottable content is handled by Radix Slot, but we typically wrap content manually if we inject icons.
            However, when asChild is true, we assume the child handles its own content or we merge props.
            For simplicity in this advanced example, we render icons ONLY if not asChild, 
            or we expect the user to pass them inside the child.
            BUT, to be robust: loading spinner replaces content if loading. */}
        
        {isLoading ? (
            <>
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
                {/* When loading, we might want to keep the text visible but dimmed, or replaced. 
                    Standard pattern often is replacing or prepending. Here we prepend spinner. */}
                {children}
            </>
        ) : (
            <>
               {!asChild && leftIcon}
               {children}
               {!asChild && rightIcon}
            </>
        )}
      </Comp>
    );
  }
);

DjButton.displayName = "DjButton";
