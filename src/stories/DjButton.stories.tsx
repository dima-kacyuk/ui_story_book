import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within, fn } from "@storybook/test";
import { DjButton } from "./DjButton";
import {
  Mail,
  ArrowRight,
  Trash2,
  Save,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

/**
 * # DjButton Component
 *
 * The `DjButton` is a premium, versatile button component designed for modern web applications.
 * It features sophisticated transitions, semantic color palettes, and adaptive styling for both light and dark modes.
 *
 * ## Features
 * - **Polymorphic**: Uses the Slot pattern for element composition.
 * - **Tactile Feedback**: Smooth hover lift, active scale, and subtle glows.
 * - **Accessible**: Complies with standard button interactions and focus states.
 * - **Adaptive**: Automatically adjusts colors and contrast for dark mode.
 */
const meta = {
  title: "UI/DjButton",
  component: DjButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A refined button component with high-performance aesthetics and full accessibility support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "danger",
        "success",
        "warning",
        "info",
        "link",
        "glass",
      ],
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
      description:
        "If true, merges props onto the child element (e.g., for composition with <a> tags).",
    },
    onClick: { action: "clicked" },
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

// --- Showcase Stories ---

/**
 * The standard brand action variant. Featuring a rich indigo color and soft glow.
 */
export const Primary: Story = {
  args: { variant: "primary", children: "Get Started" },
};

/**
 * Used for less prominent actions. Adapts beautifully to dark mode.
 */
export const Secondary: Story = {
  args: { variant: "secondary", children: "Learn More" },
};

/**
 * A clean, bordered variant for secondary actions or toolbar items.
 */
export const Outline: Story = {
  args: { variant: "outline", children: "Edit Profile" },
};

/**
 * A high-transparency variant that works perfectly on colorful backgrounds.
 */
export const Glass: Story = {
  render: (args) => (
    <div className="rounded-3xl p-16 bg-gradient-to-tr from-indigo-900 via-purple-800 to-rose-700 shadow-2xl">
      <DjButton {...args} variant="glass" size="lg" leftIcon={<ExternalLink />}>
        Join the Future
      </DjButton>
    </div>
  ),
};

// --- Semantic Variants ---

export const Success: Story = {
  args: {
    variant: "success",
    children: "Payment Successful",
    leftIcon: <CheckCircle2 />,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "System Warning",
    leftIcon: <AlertTriangle />,
  },
};

export const InfoAction: Story = {
  args: {
    variant: "info",
    children: "New Notification",
    leftIcon: <Info />,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete Workspace",
    leftIcon: <Trash2 />,
    pill: true,
  },
};

// --- Layouts and States ---

/**
 * Compare all sizes from extra-large heroes to small utility buttons.
 */
export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-6">
      <DjButton {...args} size="xl" pill>Extra Large Hero</DjButton>
      <DjButton {...args} size="lg">Large Button</DjButton>
      <DjButton {...args} size="md">Medium Base</DjButton>
      <DjButton {...args} size="sm">Small Utility</DjButton>
    </div>
  ),
};

export const InteractiveTests: Story = {
  args: {
    children: "Test Interaction",
    variant: "primary",
    size: "lg",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Test Interaction/i });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

/**
 * A gallery showing all semantic and visual variants side-by-side.
 */
export const VariantGallery: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      <DjButton {...args} variant="primary">Primary</DjButton>
      <DjButton {...args} variant="secondary">Secondary</DjButton>
      <DjButton {...args} variant="outline">Outline</DjButton>
      <DjButton {...args} variant="ghost">Ghost</DjButton>
      <DjButton {...args} variant="success">Success</DjButton>
      <DjButton {...args} variant="warning">Warning</DjButton>
      <DjButton {...args} variant="info">Info</DjButton>
      <DjButton {...args} variant="danger">Danger</DjButton>
    </div>
  ),
};
