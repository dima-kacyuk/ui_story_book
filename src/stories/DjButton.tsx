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
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "link"
    | "glass";
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
   * Custom classes for the left icon container.
   */
  leftIconClassName?: string;
  /**
   * Icon element to display after the button text.
   */
  rightIcon?: ReactNode;
  /**
   * Custom classes for the right icon container.
   */
  rightIconClassName?: string;
  /**
   * Custom classes for the loading spinner.
   */
  spinnerClassName?: string;
  /**
   * Content justification.
   * @default "center"
   */
  justify?: "start" | "center" | "end" | "between";
  /**
   * If true, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;
  /**
   * If true, the button will have fully rounded corners (pill shape).
   */
  pill?: boolean;
  /**
   * Corner radius override.
   */
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  /**
   * Shadow elevation.
   * @default "md"
   */
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  /**
   * Explicit theme override.
   */
  theme?: "light" | "dark";
  /**
   * If true, renders as a child element (Slot pattern).
   */
  asChild?: boolean;
}

/**
 * DjButton is a polymorphic, accessible button component with advanced customization options.
 */
export const DjButton = forwardRef<HTMLButtonElement, DjButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      leftIconClassName,
      rightIcon,
      rightIconClassName,
      spinnerClassName,
      justify = "center",
      isFullWidth = false,
      pill = false,
      rounded,
      shadow: shadowProp,
      theme,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Base styles: tactile transitions and adaptive focus
    const baseStyles =
      "group inline-flex items-center whitespace-nowrap text-sm font-semibold " +
      "select-none transition-all duration-300 ease-in-out " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
      "ring-offset-white dark:ring-offset-slate-950 " +
      "disabled:pointer-events-none disabled:opacity-50 " +
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +
      "active:scale-[0.97]";

    // Justification map
    const justifications = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    };

    // Premium hover behavior with lift and brightness
    const hoverEffects = "hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0";

    const variants: Record<NonNullable<DjButtonProps["variant"]>, string> = {
      primary:
        "bg-slate-900 text-white border border-transparent " +
        "shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 " +
        "dark:bg-slate-50 dark:text-slate-900 " +
        hoverEffects,

      secondary:
        "bg-slate-100 text-slate-900 border border-transparent " +
        "dark:bg-slate-800 dark:text-slate-100 " +
        "shadow-sm hover:shadow-md " +
        "focus-visible:ring-slate-400 " +
        hoverEffects,

      outline:
        "bg-transparent text-slate-900 border-2 border-slate-200 " +
        "hover:border-slate-300 hover:bg-slate-50 " +
        "dark:text-slate-100 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900 " +
        "focus-visible:ring-slate-400 " +
        hoverEffects,

      ghost:
        "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 " +
        "dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 " +
        "focus-visible:ring-slate-400",

      // Semantic variants refined: Text color matching shadow color on tinted background
      danger:
        "bg-rose-50 text-rose-600 border border-rose-100 " +
        "shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 " +
        "dark:bg-rose-950/30 dark:border-rose-900/50 " +
        "focus-visible:ring-rose-600 " +
        hoverEffects,

      success:
        "bg-emerald-50 text-emerald-600 border border-emerald-100 " +
        "shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 " +
        "dark:bg-emerald-950/30 dark:border-emerald-900/50 " +
        "focus-visible:ring-emerald-600 " +
        hoverEffects,

      warning:
        "bg-amber-50 text-amber-600 border border-amber-100 " +
        "shadow-lg shadow-amber-600/20 hover:shadow-amber-600/30 " +
        "dark:bg-amber-950/30 dark:border-amber-900/50 " +
        "focus-visible:ring-amber-600 " +
        hoverEffects,

      info:
        "bg-sky-50 text-sky-600 border border-sky-100 " +
        "shadow-lg shadow-sky-600/20 hover:shadow-sky-600/30 " +
        "dark:bg-sky-950/30 dark:border-sky-900/50 " +
        "focus-visible:ring-sky-600 " +
        hoverEffects,

      link:
        "bg-transparent text-indigo-600 underline-offset-4 hover:underline " +
        "dark:text-indigo-400 " +
        "focus-visible:ring-indigo-500 shadow-none active:scale-100",

      glass:
        "bg-white/10 text-white border border-white/20 backdrop-blur-xl " +
        "hover:bg-white/20 hover:border-white/30 " +
        "shadow-xl shadow-black/20 " +
        "focus-visible:ring-white/50 " +
        hoverEffects,
    };

    const sizes: Record<NonNullable<DjButtonProps["size"]>, string> = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 py-2 gap-2",
      lg: "h-12 px-8 text-base gap-2.5",
      xl: "h-14 px-10 text-lg gap-3",
      icon: "h-10 w-10 p-0",
    };

    const roundedStyles = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    };

    const shadowStyles = {
      none: "shadow-none hover:shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          justifications[justify],
          variants[variant],
          sizes[size],
          isFullWidth && "w-full",
          pill ? "rounded-full" : (rounded ? roundedStyles[rounded] : "rounded-xl"),
          shadowProp && shadowStyles[shadowProp],
          theme === "dark" && "dark",
          theme === "light" && "light",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className={cn("animate-spin h-4 w-4", spinnerClassName)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
            <span className="opacity-0">{children}</span> 
            <span className="absolute">Loading...</span>
          </>
        ) : (
          <>
            {!asChild && leftIcon && (
              <span className={cn("inline-flex items-center", leftIconClassName)}>
                {leftIcon}
              </span>
            )}
            {children}
            {!asChild && rightIcon && (
              <span className={cn("inline-flex items-center", rightIconClassName)}>
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

DjButton.displayName = "DjButton";
