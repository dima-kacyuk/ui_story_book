import React, { useState, type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

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
  children?: DjSidebarMenuItem[];
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
 * Features logo placement, icon menu, nested navigation, responsive collapse, and flexible positioning.
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
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapse?.(newState);
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const isBlack = variant === 'black';
  const isWhite = variant === 'white';
  const isLeft = position === 'left';

  const renderMenuItem = (item: DjSidebarMenuItem, level: number = 0) => {
    const isActive = item.id === activeItemId;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const ItemWrapper = item.href ? 'a' : 'button';

    return (
      <li key={item.id}>
        <ItemWrapper
          href={item.href}
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              toggleExpanded(item.id);
            }
            item.onClick?.();
          }}
          className={cn(
            'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative',
            'hover:scale-[1.02] active:scale-[0.98]',
            level > 0 && 'ml-4',
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
              {hasChildren && (
                <ChevronDown
                  size={16}
                  className={cn(
                    'transition-transform duration-200',
                    isExpanded && 'rotate-180'
                  )}
                />
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
        {/* Render children */}
        {hasChildren && !isCollapsed && isExpanded && (
          <ul className="mt-1 space-y-1 overflow-hidden">
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

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
          {menuItems.map((item) => renderMenuItem(item))}
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

      {/* Collapse Toggle Button - Enhanced Design */}
      <button
        onClick={handleToggle}
        className={cn(
          'absolute top-24 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 shadow-lg',
          'hover:scale-110 active:scale-95',
          isLeft ? '-right-5' : '-left-5',
          isBlack && 'bg-slate-900 border-white text-white hover:bg-slate-800',
          isWhite && 'bg-white border-slate-900 text-slate-900 hover:bg-slate-50'
        )}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? (
          isLeft ? (
            <ChevronRight size={20} strokeWidth={3} />
          ) : (
            <ChevronLeft size={20} strokeWidth={3} />
          )
        ) : isLeft ? (
          <ChevronLeft size={20} strokeWidth={3} />
        ) : (
          <ChevronRight size={20} strokeWidth={3} />
        )}
      </button>
    </aside>
  );
};

DjSidebar.displayName = 'DjSidebar';
