import React, { useState, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label above the date picker
   */
  label?: string;
  /**
   * Optional helper text
   */
  helperText?: string;
  /**
   * If true, displays an error state
   */
  error?: boolean;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
}

/**
 * DjDatePicker is a premium, high-end date selection component with custom tactile interaction.
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, label, helperText, error, theme, value, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value as string) : null);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const generateDays = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const numDays = daysInMonth(year, month);
      const firstDay = firstDayOfMonth(year, month);
      const days = [];

      // Empty slots for previous month
      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }

      // Actual days
      for (let i = 1; i <= numDays; i++) {
        days.push(new Date(year, month, i));
      }

      return days;
    };

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
      setIsOpen(false);
      if (onChange) {
        const event = {
          target: { value: date.toISOString().split('T')[0] }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const changeMonth = (offset: number) => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const isToday = (date: Date) => {
      const today = new Date();
      return date.getDate() === today.getDate() &&
             date.getMonth() === today.getMonth() &&
             date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date: Date) => {
      return selectedDate && 
             date.getDate() === selectedDate.getDate() &&
             date.getMonth() === selectedDate.getMonth() &&
             date.getFullYear() === selectedDate.getFullYear();
    };

    return (
      <div className={cn("flex flex-col gap-2 w-full relative", theme === 'dark' && 'dark', theme === 'light' && 'light')}>
        {label && (
          <label className="text-sm font-semibold text-slate-900 dark:text-slate-100 ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors pointer-events-none">
            <CalendarIcon size={18} />
          </div>
          <input
            {...props}
            ref={ref}
            type="text"
            readOnly
            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-full h-11 pl-11 pr-4 text-sm bg-white dark:bg-slate-950 outline-none transition-all duration-300 cursor-pointer",
              "border-2 border-slate-100 hover:border-slate-200 focus:border-slate-900",
              "dark:border-slate-900 dark:hover:border-slate-800 dark:focus:border-white",
              "rounded-xl placeholder:text-slate-400",
              "focus:shadow-xl focus:shadow-slate-900/5 dark:focus:shadow-white/5",
              error && "border-rose-500 hover:border-rose-600 focus:border-rose-600 dark:border-rose-800",
              className
            )}
          />
        </div>

        {isOpen && (
          <div className="absolute top-20 z-50 w-[320px] p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-4 px-1">
              <h4 className="font-bold text-slate-900 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h4>
              <div className="flex gap-1">
                <button 
                  onClick={() => changeMonth(-1)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => changeMonth(1)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <span key={day} className="text-[10px] font-black uppercase tracking-widest text-slate-400 py-1">
                  {day}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {generateDays().map((date, i) => (
                <div key={i} className="aspect-square flex items-center justify-center">
                  {date ? (
                    <button
                      onClick={() => handleDateSelect(date)}
                      className={cn(
                        "w-full h-full rounded-lg text-sm font-medium transition-all duration-200",
                        "hover:bg-slate-100 dark:hover:bg-slate-800",
                        isToday(date) && "text-indigo-600 dark:text-indigo-400 font-bold",
                        isSelected(date) && "bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-900 dark:hover:bg-white"
                      )}
                    >
                      {date.getDate()}
                    </button>
                  ) : (
                    <span className="w-full h-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {helperText && (
          <span className={cn(
            "text-xs ml-1 transition-colors",
            error ? "text-rose-500" : "text-slate-500 dark:text-slate-400"
          )}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
