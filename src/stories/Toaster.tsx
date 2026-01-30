import { Toaster as Sonner, toast as sonnerToast } from 'sonner';

export interface ToasterProps {
  /**
   * Position of the toasts
   * @default "bottom-right"
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark' | 'system';
}

/**
 * DjToaster is a premium notification provider powered by sonner.
 * Includes Gold Standard styling and tactile animations.
 */
export const Toaster = ({
  position = "bottom-right",
  theme = "system",
  ...props
}: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position={position}
      theme={theme}
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-2 group-[.toaster]:border-slate-100 group-[.toaster]:shadow-2xl group-[.toaster]:rounded-[24px] dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-white dark:group-[.toaster]:border-slate-800",
          description: "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400 font-medium",
          actionButton: "group-[.toast]:bg-slate-900 group-[.toast]:text-white dark:group-[.toast]:bg-white dark:group-[.toast]:text-slate-950 font-black rounded-xl",
          cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-white/10 dark:group-[.toast]:text-slate-400 font-black rounded-xl",
        },
      }}
      {...props}
    />
  );
};

/**
 * Simplified toast utility to avoid build issues with complex types.
 */
export const djToast = {
  success: (message: string, options?: any) => sonnerToast.success(message, options),
  error: (message: string, options?: any) => sonnerToast.error(message, options),
  info: (message: string, options?: any) => sonnerToast.info(message, options),
  warning: (message: string, options?: any) => sonnerToast.warning(message, options),
  message: (message: string, options?: any) => sonnerToast(message, options),
};
