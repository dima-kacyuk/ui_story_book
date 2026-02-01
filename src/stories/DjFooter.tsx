import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface DjFooterProps {
  /**
   * Logo text or element
   */
  logo?: React.ReactNode;
  /**
   * Navigation links array
   */
  links?: FooterLink[];
  /**
   * Copyright text
   */
  copyright?: string;
  /**
   * Visual variant
   */
  variant?: 'black' | 'white';
  /**
   * Optional className
   */
  className?: string;
}

/**
 * DjFooter is a simple, minimalistic footer component.
 */
export const DjFooter: React.FC<DjFooterProps> = ({
  logo = "Brand",
  links = [],
  copyright = `© ${new Date().getFullYear()} All rights reserved.`,
  variant = 'white',
  className,
}) => {
  const isBlack = variant === 'black';

  return (
    <footer
      className={cn(
        "w-full py-12 px-6 transition-colors duration-300",
        isBlack ? "bg-slate-900 text-white border-t border-white/10" : "bg-white text-slate-900 border-t border-slate-100",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo */}
        <div className="text-xl font-black uppercase tracking-tight">
          {logo}
        </div>

        {/* Center: Links */}
        <nav className="flex flex-wrap items-center justify-center gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wide transition-colors hover:underline decoration-2 underline-offset-4",
                isBlack ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Copyright */}
        <div className={cn(
          "text-xs font-medium tracking-wide opacity-50",
          isBlack ? "text-slate-400" : "text-slate-500"
        )}>
          {copyright}
        </div>
      </div>
    </footer>
  );
};
