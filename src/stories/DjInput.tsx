import React, { useId, useState, type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Eye, EyeOff } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DjInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'error'> {
  /**
   * Optional label above the input
   */
  label?: string;
  /**
   * Optional helper text or error message below the input
   */
  error?: string | boolean;
  /**
   * Left side icon or element
   */
  leftIcon?: ReactNode;
  /**
   * Right side icon or element (ignored if type is 'password')
   */
  rightIcon?: ReactNode;
  /**
   * If true, only numbers will be allowed (useful for ZIP, card numbers etc)
   */
  onlyNumbers?: boolean;
  /**
   * If true, only alphabetic characters will be allowed
   */
  onlyStrings?: boolean;
  /**
   * Visual variant
   */
  variant?: 'black' | 'white';
}

/**
 * DjInput is a high-performance input suite with industrial design.
 * Features built-in validation constraints, password visibility toggle, and premium focus mechanics.
 */
export const DjInput = React.forwardRef<HTMLInputElement, DjInputProps>(
  ({ 
    className, 
    label, 
    error, 
    leftIcon, 
    rightIcon, 
    type = 'text', 
    onlyNumbers, 
    onlyStrings,
    variant = 'white',
    id: providedId, 
    onChange,
    ...props 
  }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const [showPassword, setShowPassword] = useState(false);
    
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const handleInputFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      
      if (onlyNumbers) {
        value = value.replace(/[^0-9]/g, '');
      } else if (onlyStrings) {
        value = value.replace(/[^a-zA-Z\s]/g, '');
      }

      e.target.value = value;
      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-1.5 w-full group/input">
        {label && (
          <label 
            htmlFor={id} 
            className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1 transition-colors group-focus-within/input:text-indigo-600"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-slate-900 dark:group-focus-within/input:text-white transition-colors">
              {React.isValidElement(leftIcon) ? React.cloneElement(leftIcon as React.ReactElement<any>, { size: 18 }) : leftIcon}
            </div>
          )}
          
          <input
            {...props}
            id={id}
            ref={ref}
            type={inputType}
            onChange={handleInputFilter}
            className={cn(
              "w-full h-12 px-4 text-sm font-medium outline-none transition-all duration-300",
              "border-2 rounded-2xl placeholder:font-normal",
              variant === 'black' && "bg-slate-900 text-white border-white placeholder:text-slate-400 hover:bg-slate-800 focus:bg-slate-900 focus:border-white focus:ring-4 focus:ring-white/10",
              variant === 'white' && "bg-white text-slate-900 border-slate-900 placeholder:text-slate-400 hover:border-slate-700 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5",
              error && "border-rose-500 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/5",
              leftIcon && "pl-12",
              (rightIcon || isPassword) && "pr-12",
              className
            )}
          />

          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          ) : rightIcon ? (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              {React.isValidElement(rightIcon) ? React.cloneElement(rightIcon as React.ReactElement<any>, { size: 18 }) : rightIcon}
            </div>
          ) : null}
        </div>

        {typeof error === 'string' && (
          <span className="text-[10px] font-black uppercase tracking-tight text-rose-500 dark:text-rose-400 ml-1 mt-0.5">
            {error}
          </span>
        )}
      </div>
    );
  }
);

DjInput.displayName = 'DjInput';
