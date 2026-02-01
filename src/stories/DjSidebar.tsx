import React, { useState, type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DjSidebarMenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
  badge?: string | number;
}

export interface DjSidebarProps {
  /**
   * Logo or brand element to display at the top
   */
  logo?: ReactNode;
  /**
   * Array of menu items with icons and labels
   */
  menuItems: DjSidebarMenuItem[];
  /**
   * ID of the currently active menu item
   */
  activeItemId?: string;
  /**
   * Visual variant
   */
  variant?: 'black' | 'white';
  /**
   * Position of the sidebar
   */
  position?: 'left' | 'right';
  /**
   * Whether the sidebar starts collapsed
   */
  defaultCollapsed?: boolean;
  /**
   * Callback when collapse state changes
   */
  onCollapse?: (collapsed: boolean) => void;
  /**
   * Custom class for the root container
   */
  className?: string;
  /**
   * Width of the expanded sidebar
   */
  width?: string;
  /**
   * Width of the collapsed sidebar
   */
  collapsedWidth?: string;
  /**
   * Footer content at the bottom of the sidebar
   */
  footer?: ReactNode;
}

/**
 * DjSidebar is a professional navigation sidebar with industrial black/white aesthetics.
 * Features logo placement, icon menu, responsive collapse, and flexible positioning.
 */
export const DjSidebar: React.FC<DjSidebarProps> = ({
  logo,
  menuItems,
  activeItemId,
  variant = 'white',
  position = 'left',
  defaultCollapsed = false,
  onCollapse,
  className,
  width = '280px',
  collapsedWidth = '80px',
  footer,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapse?.(newState);
  };

  const isBlack = variant === 'black';
  const isWhite = variant === 'white';
  const isLeft = position === 'left';

  return (
    <aside
      className={cn(
        'flex flex-col h-screen transition-all duration-300 ease-in-out border-2 relative',
        isBlack && 'bg-slate-900 border-white text-white',
        isWhite && 'bg-white border-slate-900 text-slate-900',
        className
      )}
      style={{
        width: isCollapsed ? collapsedWidth : width,
      }}
    >
      {/* Logo Section */}
      {logo && (
        <div
          className={cn(
            'flex items-center justify-center h-20 border-b-2 transition-all duration-300',
            isBlack && 'border-white',
            isWhite && 'border-slate-900',
            isCollapsed && 'px-2',
            !isCollapsed && 'px-6'
          )}
        >
          {logo}
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = item.id === activeItemId;
            const ItemWrapper = item.href ? 'a' : 'button';

            return (
              <li key={item.id}>
                <ItemWrapper
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative',
                    'hover:scale-[1.02] active:scale-[0.98]',
                    isActive && isBlack && 'bg-white text-slate-900',
                    isActive && isWhite && 'bg-slate-900 text-white',
                    !isActive && isBlack && 'hover:bg-white/10',
                    !isActive && isWhite && 'hover:bg-slate-900/5',
                    isCollapsed && 'justify-center',
                    !isCollapsed && 'justify-start'
                  )}
                >
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    {React.isValidElement(item.icon)
                      ? React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })
                      : item.icon}
                  </span>
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-sm font-black uppercase tracking-wide text-left">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span
                          className={cn(
                            'px-2 py-0.5 text-[10px] font-black rounded-full',
                            isActive && isBlack && 'bg-slate-900 text-white',
                            isActive && isWhite && 'bg-white text-slate-900',
                            !isActive && isBlack && 'bg-white/20 text-white',
                            !isActive && isWhite && 'bg-slate-900/10 text-slate-900'
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div
                      className={cn(
                        'absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50',
                        'px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wide whitespace-nowrap',
                        isLeft ? 'left-full ml-2' : 'right-full mr-2',
                        isBlack && 'bg-white text-slate-900',
                        isWhite && 'bg-slate-900 text-white'
                      )}
                    >
                      {item.label}
                    </div>
                  )}
                </ItemWrapper>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {footer && (
        <div
          className={cn(
            'border-t-2 p-4 transition-all duration-300',
            isBlack && 'border-white',
            isWhite && 'border-slate-900',
            isCollapsed && 'px-2'
          )}
        >
          {footer}
        </div>
      )}

      {/* Collapse Toggle Button */}
      <button
        onClick={handleToggle}
        className={cn(
          'absolute top-24 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-200',
          'hover:scale-110 active:scale-95',
          isLeft ? '-right-4' : '-left-4',
          isBlack && 'bg-slate-900 border-white text-white hover:bg-slate-800',
          isWhite && 'bg-white border-slate-900 text-slate-900 hover:bg-slate-50'
        )}
      >
        {isCollapsed ? (
          isLeft ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )
        ) : isLeft ? (
          <ChevronLeft size={16} />
        ) : (
          <ChevronRight size={16} />
        )}
      </button>
    </aside>
  );
};

DjSidebar.displayName = 'DjSidebar';
