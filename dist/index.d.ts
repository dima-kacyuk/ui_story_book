import * as React$1 from 'react';
import React__default, { ButtonHTMLAttributes, ReactNode } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ColumnDef } from '@tanstack/react-table';
import * as Dialog$1 from '@radix-ui/react-dialog';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

interface DjButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Defines the visual style of the button.
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "warning" | "info" | "link" | "glass";
    /**
     * Controls the size of the button.
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | "xl" | "icon";
    /**
     * If true, displays a loading spinner and disables the button.
     */
    isLoading?: boolean;
    /**
     * Icon element to display before the button text.
     */
    leftIcon?: ReactNode;
    /**
     * Custom classes for the left icon container.
     */
    leftIconClassName?: string;
    /**
     * Icon element to display after the button text.
     */
    rightIcon?: ReactNode;
    /**
     * Custom classes for the right icon container.
     */
    rightIconClassName?: string;
    /**
     * Custom classes for the loading spinner.
     */
    spinnerClassName?: string;
    /**
     * Content justification.
     * @default "center"
     */
    justify?: "start" | "center" | "end" | "between";
    /**
     * If true, the button will take up the full width of its container.
     */
    isFullWidth?: boolean;
    /**
     * If true, the button will have fully rounded corners (pill shape).
     */
    pill?: boolean;
    /**
     * Corner radius override.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    /**
     * Shadow elevation.
     * @default "md"
     */
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
    /**
     * Explicit theme override.
     */
    theme?: "light" | "dark";
    /**
     * If true, renders as a child element (Slot pattern).
     */
    asChild?: boolean;
}
/**
 * DjButton is a polymorphic, accessible button component with advanced customization options.
 */
declare const DjButton: React$1.ForwardRefExoticComponent<DjButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface CheckboxProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Label for the checkbox
     */
    label?: string;
    /**
     * Optional description text below the label
     */
    description?: string;
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjCheckbox is a premium, accessible checkbox with a custom-built tactile checkmark.
 */
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

interface DjSwitchProps extends React__default.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    /**
     * Label for the switch
     */
    label?: string;
    /**
     * Optional helper text below the label
     */
    description?: string;
    /**
     * Size of the switch
     */
    size?: 'sm' | 'md' | 'lg';
}
/**
 * DjSwitch is a high-end toggle component powered by Radix UI.
 * It features smooth physics, tactile interaction, and perfect accessibility.
 */
declare const DjSwitch: React__default.ForwardRefExoticComponent<DjSwitchProps & React__default.RefAttributes<HTMLButtonElement>>;

interface DjCarouselProps {
    /**
     * Slides to render within the carousel
     */
    children: React__default.ReactNode[];
    /**
     * Enable infinite loop
     */
    loop?: boolean;
    /**
     * Autoplay interval in ms (0 to disable)
     */
    autoplayInterval?: number;
    /**
     * Orientation of the carousel
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Show navigation arrows
     */
    showArrows?: boolean;
    /**
     * Show pagination dots
     */
    showDots?: boolean;
    /**
     * Custom class for the root container
     */
    className?: string;
    /**
     * Custom class for the slide container (controls slide width/spacing)
     * Example: 'flex-[0_0_50%] pl-4' for 2 slides per view
     */
    slideClassName?: string;
    /**
     * Alignment of the slides
     */
    align?: 'start' | 'center' | 'end';
}
/**
 * DjCarousel is a premium slider component powered by Embla Carousel.
 * It features buttery-smooth physics, touch/drag support, and customizable navigation.
 */
declare const DjCarousel: React__default.FC<DjCarouselProps>;

interface DjInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'error'> {
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
}
/**
 * DjInput is a high-performance input suite with industrial design.
 * Features built-in validation constraints, password visibility toggle, and premium focus mechanics.
 */
declare const DjInput: React__default.ForwardRefExoticComponent<DjInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface DjTableStyles {
    headerBg?: string;
    headerText?: string;
    rowBg?: string;
    rowText?: string;
    rowHoverBg?: string;
    accentColor?: string;
    borderColor?: string;
}
interface DjTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    pageSize?: number;
    className?: string;
    onRowClick?: (row: TData) => void;
    enableSelection?: boolean;
    variant?: 'default' | 'bordered';
    styles?: DjTableStyles;
}
/**
 * DjTable is a professional-grade data grid powered by TanStack Table.
 * Features row selection, sorting, filtering, and adaptive pagination with a high-contrast industrial UI.
 */
declare function DjTable<TData>({ data, columns, pageSize, className, onRowClick, enableSelection, variant, styles, }: DjTableProps<TData>): react_jsx_runtime.JSX.Element;

interface BadgeProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * The visual style of the badge
     * @default "primary"
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'glass' | 'outline';
    /**
     * The size of the badge
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * If true, the badge will be a perfect pill shape
     */
    pill?: boolean;
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjBadge is a premium status indicator with refined transitions and dual-theme support.
 */
declare const Badge: {
    ({ className, variant, size, pill, theme, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * If true, adds a hover animation and lifting effect
     */
    interactive?: boolean;
    /**
     * Border radius of the card
     * @default "2xl"
     */
    rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl";
    /**
     * Shadow elevation
     * @default "md"
     */
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjCard is a high-end container with premium shadows and glassmorphism capabilities.
 */
declare const Card: {
    ({ className, interactive, rounded, shadow, theme, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CardHeader: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CardBody: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CardFooter: {
    ({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface TextareaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Optional label above the textarea
     */
    label?: string;
    /**
     * Optional helper text below
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
 * DjTextarea is a premium multi-line input field with smooth resizing and focus mechanics.
 */
declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

interface RadioProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Label for the radio button
     */
    label?: string;
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjRadio is a premium, accessible radio button with a smooth circular animation.
 */
declare const Radio: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

interface SelectProps extends React__default.SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Label for the select field
     */
    label?: string;
    /**
     * Helper text below the select
     */
    helperText?: string;
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjSelect is a custom-styled native select component that matches the premium input aesthetic.
 */
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Source URL for the image
     */
    src?: string;
    /**
     * Initials to display as fallback
     */
    fallback?: string;
    /**
     * Size of the avatar
     * @default "md"
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * If true, displays a small "online" status dot
     */
    isOnline?: boolean;
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjAvatar is a premium profile indicator supporting images, initials, and status states.
 */
declare const Avatar: {
    ({ className, src, fallback, size, isOnline, theme, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface DatePickerProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
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
declare const DatePicker: React__default.ForwardRefExoticComponent<DatePickerProps & React__default.RefAttributes<HTMLInputElement>>;

interface ModalProps extends Dialog$1.DialogProps {
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
declare const Modal: {
    ({ children, title, description, theme, maxWidth, contentClassName, ...props }: ModalProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalTrigger: React$1.ForwardRefExoticComponent<Dialog$1.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const ModalClose: React$1.ForwardRefExoticComponent<Dialog$1.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;

interface TabsProps extends TabsPrimitive.TabsProps {
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
    /**
     * Tabs content
     */
    children?: React__default.ReactNode;
}
/**
 * DjTabs is a premium navigation component with smooth transitions and tactile indicator effects.
 */
declare const Tabs: {
    ({ className, theme, ...props }: TabsProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TabsList: React__default.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React__default.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React__default.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface ProgressProps extends ProgressPrimitive.ProgressProps {
    /**
     * Visual variant of the progress bar
     * @default "primary"
     */
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'indigo';
    /**
     * The height of the bar
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
    /**
     * If true, adds an animated shine effect
     */
    animate?: boolean;
}
/**
 * DjProgress is a sleek, animated loading bar with multiple semantic variants.
 */
declare const Progress: React__default.ForwardRefExoticComponent<ProgressProps & React__default.RefAttributes<HTMLDivElement>>;

interface AccordionProps extends AccordionPrimitive.AccordionSingleProps {
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjAccordion is a kinetic, accessible component for organizing content into collapsible sections.
 */
declare const Accordion: {
    ({ className, theme, ...props }: any): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AccordionItem: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React__default.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React__default.RefAttributes<HTMLDivElement>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Semantic variant of the alert
     * @default "info"
     */
    variant?: 'info' | 'success' | 'warning' | 'error';
    /**
     * Optional title for the alert
     */
    title?: string;
    /**
     * If true, shows a close button
     */
    onClose?: () => void;
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjAlert is a premium semantic banner for providing feedback or important information.
 */
declare const Alert: {
    ({ className, variant, title, children, onClose, theme, ...props }: AlertProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ToasterProps {
    /**
     * Position of the toasts
     * @default "bottom-right"
     */
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark' | 'system';
}
/**
 * DjToaster is a premium notification provider powered by sonner.
 * Includes Gold Standard styling and tactile animations.
 */
declare const Toaster: ({ position, theme, ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;
/**
 * Simplified toast utility to avoid build issues with complex types.
 */
declare const djToast: {
    success: (message: string, options?: any) => string | number;
    error: (message: string, options?: any) => string | number;
    info: (message: string, options?: any) => string | number;
    warning: (message: string, options?: any) => string | number;
    message: (message: string, options?: any) => string | number;
};

interface DialogProps extends AlertDialogPrimitive.AlertDialogProps {
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
declare const Dialog: {
    ({ children, title, description, theme, ...props }: DialogProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogAction: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogCancel: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>>;

interface HeaderProps {
    /**
     * Logo or brand content
     */
    logo?: React__default.ReactNode;
    /**
     * Navigation links array
     */
    navItems?: {
        label: string;
        href: string;
    }[];
    /**
     * Optional theme override (not for switching, but for static styling)
     */
    theme?: 'light' | 'dark';
    /**
     * Current active theme (for toggle state)
     */
    currentTheme?: 'light' | 'dark';
    /**
     * Callback for theme toggle
     */
    onThemeToggle?: () => void;
}
/**
 * DjHeader is a premium, responsive navigation bar with mobile menu support and theme toggle.
 */
declare const Header: ({ logo, navItems, theme, currentTheme, onThemeToggle }: HeaderProps) => react_jsx_runtime.JSX.Element;

interface FooterProps {
    /**
     * Explicit theme override
     */
    theme?: 'light' | 'dark';
}
/**
 * DjFooter is a premium multi-column footer with social links and responsive grid.
 */
declare const Footer: ({ theme }: FooterProps) => react_jsx_runtime.JSX.Element;

export { AccordionContent, AccordionItem, type AccordionProps, AccordionTrigger, type AlertProps, type AvatarProps, type BadgeProps, CardBody, CardFooter, CardHeader, type CardProps, type CheckboxProps, type DatePickerProps, DialogAction, DialogCancel, type DialogProps, DialogTrigger, type DjButtonProps, type DjCarouselProps, type DjInputProps, type DjSwitchProps, type DjTableProps, type FooterProps, type HeaderProps, ModalClose, type ModalProps, ModalTrigger, type ProgressProps, type RadioProps, type SelectProps, TabsContent, TabsList, type TabsProps, TabsTrigger, type TextareaProps, type ToasterProps, Accordion as djAccordion, Alert as djAlert, Avatar as djAvatar, Badge as djBadge, DjButton as djButton, Card as djCard, DjCarousel as djCarousel, Checkbox as djCheckbox, DatePicker as djDatePicker, Dialog as djDialog, Footer as djFooter, Header as djHeader, DjInput as djInput, Modal as djModal, Progress as djProgress, Radio as djRadio, Select as djSelect, DjSwitch as djSwitch, DjTable as djTable, Tabs as djTabs, Textarea as djTextarea, djToast, Toaster as djToaster };
