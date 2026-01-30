import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FooterProps {
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjFooter is a premium multi-column footer with social links and responsive grid.
 */
export const Footer = ({ theme }: FooterProps) => {
  const columns = [
    {
      title: "Solutions",
      links: ["Marketing", "Analytics", "Commerce", "Insights"]
    },
    {
      title: "Support",
      links: ["Pricing", "Documentation", "Guides", "API Status"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs", "Press", "Partners"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy"]
    }
  ];

  return (
    <footer className={cn(
      "bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-12 transition-colors",
      theme === 'dark' && 'dark', theme === 'light' && 'light'
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              GOLDEN<span className="text-indigo-600 italic">STANDARD</span>
            </span>
            <p className="text-sm text-slate-500 font-medium leading-loose max-w-xs">
              Building the future of web architecture with premium tactile design and technical excellence.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          {columns.map((col) => (
            <div key={col.title} className="space-y-6">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                {col.title}
              </h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-bold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400">
            © 2026 Golden Standard Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> globally.
          </div>
        </div>
      </div>
    </footer>
  );
};
