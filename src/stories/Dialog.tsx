import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DialogProps extends AlertDialogPrimitive.AlertDialogProps {
  /**
   * Title of the alert dialog
   */
  title: string;
  /**
   * Description of the alert dialog
   */
  description: string;
  /**
   * Explicit theme override
   */
  theme?: 'light' | 'dark';
  /**
   * Dialog content
   */
  children?: React.ReactNode;
}

/**
 * DjDialog is a professional confirmation dialog based on the Alert Dialog pattern.
 * Ensuring critical actions are confirmed with premium tactile feedback.
 */
export const Dialog = ({
  children,
  title,
  description,
  theme,
  ...props
}: DialogProps) => {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay 
          className={cn(
            "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",
            theme === 'dark' && 'dark', theme === 'light' && 'light'
          )} 
        />
        <AlertDialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2",
            "bg-white dark:bg-slate-950 p-8 shadow-2xl border border-slate-100 dark:border-slate-800 rounded-[32px]",
            "animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300",
            theme === 'dark' && 'dark', theme === 'light' && 'light'
          )}
        >
          <div className="flex flex-col gap-2 mb-6">
            <AlertDialogPrimitive.Title className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {title}
            </AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Description className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              {description}
            </AlertDialogPrimitive.Description>
          </div>
          
          <div className="flex gap-3 justify-end mt-8">
            {children}
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export const DialogTrigger = AlertDialogPrimitive.Trigger;
export const DialogAction = AlertDialogPrimitive.Action;
export const DialogCancel = AlertDialogPrimitive.Cancel;

Dialog.displayName = 'Dialog';
