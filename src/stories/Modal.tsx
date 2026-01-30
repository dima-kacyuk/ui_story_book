import * as Dialog from '@radix-ui/react-dialog';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { X } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ModalProps extends Dialog.DialogProps {
  /**
   * Title of the modal
   */
  title?: string;
  /**
   * Description or subtitle
   */
  description?: string;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
  /**
   * Max width of the modal
   * @default "md"
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * Custom className for the content area
   */
  contentClassName?: string;
  /**
   * Modal content
   */
  children?: React.ReactNode;
}

/**
 * DjModal is a premium, accessible dialog component with smooth backdrop transitions and tactile scaling.
 */
export const Modal = ({
  children,
  title,
  description,
  theme,
  maxWidth = 'md',
  contentClassName,
  ...props
}: ModalProps) => {
  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  };

  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className={cn(
            "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
            "animate-in fade-in duration-300",
            theme === 'dark' && 'dark', theme === 'light' && 'light'
          )} 
        />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2",
            "bg-white dark:bg-slate-950 p-8 shadow-2xl transition-all duration-300",
            "border border-slate-100 dark:border-slate-800 rounded-[32px]",
            "animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300",
            maxWidthStyles[maxWidth],
            theme === 'dark' && 'dark', theme === 'light' && 'light',
            contentClassName
          )}
        >
          <div className="flex flex-col gap-2 mb-6">
            <Dialog.Title className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {title}
            </Dialog.Title>
            {description && (
              <Dialog.Description className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {description}
              </Dialog.Description>
            )}
          </div>
          
          <div className="relative">
            {children}
          </div>

          <Dialog.Close className="absolute right-6 top-6 p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:rotate-90">
            <X size={20} />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

Modal.displayName = 'Modal';
export const ModalTrigger = Dialog.Trigger;
export const ModalClose = Dialog.Close;
