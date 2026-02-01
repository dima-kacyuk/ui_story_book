import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Moon, Sun } from 'lucide-react';
import { DjButton } from './DjButton';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface HeaderLink {
  label: string;
  href: string;
}

export interface DjHeaderProps {
  /**
   * Logo text or element
   */
  logo?: React.ReactNode;
  /**
   * Navigation links array
   */
  links?: HeaderLink[];
  /**
   * Visual variant
   */
  variant?: 'black' | 'white';
  /**
   * Callback for login button click
   */
  onLogin?: () => void;
  /**
   * Callback for admin login button click
   */
  onAdminLogin?: () => void;
  /**
   * Callback for theme toggle
   */
  onToggleTheme?: () => void;
  /**
   * Current theme state
   */
  isDark?: boolean;
  /**
   * Optional className
   */
  className?: string;
  /**
   * Callback for navigation link clicks (for router integration)
   */
  onLinkClick?: (href: string) => void;
}

/**
 * DjHeader is a simple, clean header component with navigation and theme controls.
 */
export const DjHeader: React.FC<DjHeaderProps> = ({
  logo = "Brand",
  links = [],
  variant = 'white',
  onLogin,
  onAdminLogin,
  onToggleTheme,
  isDark = false,
  className,
  onLinkClick,
}) => {
  const isBlack = variant === 'black';

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(href);
    }
  };

  return (
    <header
      className={cn(
        "w-full h-16 px-6 flex items-center justify-between transition-colors duration-300 backdrop-blur-md sticky top-0 z-50",
        isBlack ? "bg-slate-900/90 border-b border-white/10 text-white" : "bg-white/90 border-b border-slate-100 text-slate-900",
        className
      )}
    >
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="text-xl font-black uppercase tracking-tight">
          {logo}
        </div>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-bold uppercase tracking-wide transition-colors hover:scale-105 active:scale-95",
                isBlack ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Checkbox */}
        {onToggleTheme && (
            <div 
                onClick={onToggleTheme}
                className={cn(
                    "relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 flex items-center justify-between px-1.5",
                    isDark ? "bg-indigo-600" : "bg-slate-200 hover:bg-slate-300"
                )}
            >
                <Moon size={10} className="text-white z-10" />
                <Sun size={10} className="text-yellow-500 z-10" />
                
                {/* Thumb */}
                <div className={cn(
                    "absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm transition-transform duration-300",
                    isDark ? "translate-x-6" : "translate-x-0"
                )} />
            </div>
        )}

        <div className="flex items-center gap-2">
            <DjButton 
                variant={isBlack ? 'white' : 'black'} 
                size="sm"
                onClick={onLogin}
                className="font-bold px-4"
            >
                Login
            </DjButton>
            <DjButton 
                variant={isBlack ? 'white' : 'white'} 
                size="sm"
                onClick={onAdminLogin}
                className={cn(
                    "font-bold px-4", 
                    !isBlack && "border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50"
                )}
            >
                Admin
            </DjButton>
        </div>
      </div>
    </header>
  );
};
