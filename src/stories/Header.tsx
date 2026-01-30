import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface HeaderProps {
  /**
   * Logo or brand content
   */
  logo?: React.ReactNode;
  /**
   * Navigation links array
   */
  navItems?: { label: string; href: string }[];
  /**
   * Optional theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjHeader is a premium, responsive navigation bar with mobile menu support.
 */
export const Header = ({
  logo = <span className="text-2xl font-black tracking-tighter">GOLDEN<span className="text-indigo-600 italic">STANDARD</span></span>,
  navItems = [
    { label: "Product", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Community", href: "#" },
    { label: "Pricing", href: "#" }
  ],
  theme
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-colors",
      theme === 'dark' && 'dark', theme === 'light' && 'light'
    )}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="text-slate-900 dark:text-white hover:opacity-80 transition-opacity">
            {logo}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors mr-2">
             <Globe size={18} />
             <span className="text-sm font-bold uppercase tracking-widest">EN</span>
             <ChevronDown size={14} />
          </div>
          
          <button className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-xl text-sm font-black text-slate-950 bg-slate-100 hover:bg-slate-200 dark:bg-white dark:hover:bg-slate-100 transition-all active:scale-95">
            Log In
          </button>
          
          <button className="inline-flex items-center justify-center h-10 px-4 rounded-xl text-sm font-black text-white bg-slate-900 hover:bg-black dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-all active:scale-95 shadow-xl shadow-slate-900/10">
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-950 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white dark:bg-slate-950 z-30 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-8 gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-2xl font-black text-slate-900 dark:text-white border-b border-slate-50 dark:border-slate-900 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
               <button className="w-full h-14 rounded-2xl bg-slate-100 dark:bg-white/5 font-black text-slate-950 dark:text-white text-lg">
                  Sign In
               </button>
               <button className="w-full h-14 rounded-2xl bg-slate-900 dark:bg-indigo-600 text-white font-black text-lg">
                  Start FREE Trial
               </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
