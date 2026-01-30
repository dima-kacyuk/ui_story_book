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
   */
  asChild?: boolean;
}

/**
 * DjButton is a polymorphic, accessible button component with variants and states.
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
    const Comp = asChild ? Slot : "button";

    // Base styles: adaptive (light/dark), better hover/active, nicer focus ring
    const baseStyles =
      "group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold " +
      "select-none transition-all duration-300 ease-in-out " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
      "ring-offset-white dark:ring-offset-slate-950 " +
      "disabled:pointer-events-none disabled:opacity-50 " +
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +
      "active:scale-[0.97]";

    // Premium hover behavior: lift + glow + brightness adjustment
    const hoverEffects = "hover:-translate-y-0.5 hover:brightness-110";

    const variants: Record<NonNullable<DjButtonProps["variant"]>, string> = {
      primary:
        "bg-indigo-600 text-white border-transparent " +
        "shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 " +
        "focus-visible:ring-indigo-600 " +
        hoverEffects,

      secondary:
        "bg-slate-200 text-slate-900 border-transparent " +
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

      danger:
        "bg-rose-600 text-white border-transparent " +
        "shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 " +
        "focus-visible:ring-rose-600 " +
        hoverEffects,

      success:
        "bg-emerald-600 text-white border-transparent " +
        "shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 " +
        "focus-visible:ring-emerald-600 " +
        hoverEffects,

      warning:
        "bg-amber-500 text-slate-900 border-transparent " +
        "shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 " +
        "focus-visible:ring-amber-500 " +
        hoverEffects,

      info:
        "bg-sky-500 text-white border-transparent " +
        "shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 " +
        "focus-visible:ring-sky-500 " +
        hoverEffects,

      link:
        "bg-transparent text-indigo-600 underline-offset-4 hover:underline " +
        "dark:text-indigo-400 " +
        "focus-visible:ring-indigo-500 shadow-none active:scale-100",

      glass:
        "bg-white/10 text-white border border-white/20 backdrop-blur-xl " +
        "hover:bg-white/20 hover:border-white/30 " +
        "shadow-xl shadow-black/10 " +
        "focus-visible:ring-white/50 " +
        hoverEffects,
    };

    const sizes: Record<NonNullable<DjButtonProps["size"]>, string> = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-base",
      xl: "h-14 px-10 text-lg",
      icon: "h-10 w-10 p-0",
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isFullWidth && "w-full",
          pill ? "rounded-full" : "rounded-xl",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-1 h-4 w-4"
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
