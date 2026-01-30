import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Semantic variant of the alert
   * @default "info"
   */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Optional title for the alert
   */
  title?: string;
  /**
   * If true, shows a close button
   */
  onClose?: () => void;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjAlert is a premium semantic banner for providing feedback or important information.
 */
export const Alert = ({
  className,
  variant = 'info',
  title,
  children,
  onClose,
  theme,
  ...props
}: AlertProps) => {
  const icons = {
    info: <Info className="w-5 h-5 shrink-0" />,
    success: <CheckCircle2 className="w-5 h-5 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 shrink-0" />,
  };

  const variantStyles = {
    info: "bg-blue-50 border-blue-100 text-blue-800 dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-blue-300",
    success: "bg-emerald-50 border-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-300",
    warning: "bg-amber-50 border-amber-100 text-amber-800 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-300",
    error: "bg-rose-50 border-rose-100 text-rose-800 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-300",
  };

  return (
    <div
      role="alert"
      className={cn(
        "relative flex items-start gap-4 p-5 border-2 rounded-[24px] transition-all duration-300",
        variantStyles[variant],
        theme === 'dark' && 'dark',
        theme === 'light' && 'light',
        className
      )}
      {...props}
    >
      <div className="mt-0.5">{icons[variant]}</div>
      <div className="flex-1 space-y-1">
        {title && (
          <h5 className="font-black tracking-tight leading-none text-base">
            {title}
          </h5>
        )}
        <div className="text-sm opacity-90 leading-relaxed font-medium">
          {children}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors absolute top-4 right-4"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

Alert.displayName = 'Alert';
