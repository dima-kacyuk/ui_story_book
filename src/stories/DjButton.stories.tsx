import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within, fn } from "@storybook/test"; // Interaction testing imports
import { DjButton } from "./DjButton";
import { Mail, ArrowRight, Trash2, Save, ExternalLink } from "lucide-react";

/**
 * # DjButton Component
 * 
 * The `DjButton` is the primary action component in our application. 
 * It supports multiple variants, sizes, and polymorphism (rendering as different elements).
 * 
 * ## Best Practices
 * - Use **Primary** for the main action on a page.
 * - Use **Secondary** or **Outline** for alternative actions.
 * - Use **Ghost** for subtle actions.
 * - Use **Danger** for destructive actions.
 */
const meta = {
  title: "UI/DjButton",
  component: DjButton,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: "A highly customizable button component supporting polymorphism, icons, and loading states.",
        },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "link", "glass"],
      description: "Visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "icon"],
      description: "Size of the button",
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    pill: { control: "boolean" },
    asChild: { 
        control: "boolean",
        description: "If true, merges props onto the child element (e.g., for composition with <a> tags)." 
    },
    onClick: { action: "clicked" }, // Automatically logs actions
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    disabled: false,
    pill: false,
    onClick: fn(), 
  },
} satisfies Meta<typeof DjButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Basic Stories ---

export const Primary: Story = {
  args: { variant: "primary", children: "Primary Action" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary Action" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline Action" },
};

export const Danger: Story = {
  args: { 
      variant: "danger", 
      children: "Delete Item", 
      leftIcon: <Trash2 />, 
      pill: true 
  },
};

// --- Feature Spotlights ---

/**
 * Use the `xl` size and `pill` prop for a prominent, modern look.
 */
export const LargePill: Story = {
    args: {
        size: "xl",
        pill: true,
        children: "Get Started Now",
        rightIcon: <ArrowRight />,
    },
};

/**
 * **Polymorphism in Action**: This button is actually an `<a>` tag!
 * Inspect the DOM to verify. This is achieved using the `asChild` prop 
 * and passing an `<a>` element as a child.
 */
export const AsLink: Story = {
    args: {
        asChild: true,
        variant: "link",
        children: (
            <a href="https://google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                Visit Google <ExternalLink className="size-4" />
            </a>
        ),
    },
};

export const WithIcons: Story = {
    render: (args) => (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
             <DjButton {...args} leftIcon={<Mail />}>Email Me</DjButton>
             <DjButton {...args} rightIcon={<ArrowRight />}>Next Step</DjButton>
        </div>
        <div className="flex items-center gap-4">
            <DjButton {...args} size="icon" variant="outline"><Save /></DjButton>
            <DjButton {...args} size="icon" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50"><Trash2 /></DjButton>
        </div>
      </div>
    ),
};

export const LoadingState: Story = {
    args: {
        isLoading: true,
        children: "Processing...",
    },
};

// --- Interaction Tests ---

/**
 * This story performs an automated interaction test within Storybook.
 * It verifies that the button is clickable and fires the handler.
 */
export const InteractiveTest: Story = {
    args: {
        children: "Click to Test",
        variant: "primary",
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button", { name: /Click to Test/i });
        
        // Assert button is visible
        await expect(button).toBeInTheDocument();
        
        // Simulate click
        await userEvent.click(button);
        
        // Assert onClick handler was called
        await expect(args.onClick).toHaveBeenCalled();
    },
};
