import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Source URL for the image
   */
  src?: string;
  /**
   * Initials to display as fallback
   */
  fallback?: string;
  /**
   * Size of the avatar
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * If true, displays a small "online" status dot
   */
  isOnline?: boolean;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjAvatar is a premium profile indicator supporting images, initials, and status states.
 */
export const Avatar = ({
  className,
  src,
  fallback,
  size = 'md',
  isOnline = false,
  theme,
  ...props
}: AvatarProps) => {
  const [hasError, setHasError] = React.useState(false);

  const sizeStyles = {
    xs: "w-6 h-6 text-[10px]",
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const statusSizeStyles = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3 border-2",
    xl: "w-4 h-4 border-2",
  };

  return (
    <div className={cn("relative inline-flex", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
      <div 
        className={cn(
          "relative flex items-center justify-center shrink-0 rounded-full overflow-hidden transition-all duration-300",
          "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
          "hover:border-slate-300 dark:hover:border-slate-600",
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {src && !hasError ? (
          <img 
            src={src} 
            alt={fallback || "Avatar"} 
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
            {fallback?.slice(0, 2) || "?"}
          </span>
        )}
      </div>
      
      {isOnline && (
        <span className={cn(
          "absolute bottom-0 right-0 block rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950 shadow-lg",
          statusSizeStyles[size]
        )} />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
