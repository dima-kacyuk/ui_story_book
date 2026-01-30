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
  Settings,
} from "lucide-react";

/**
 * # DjButton Component
 *
 * The `DjButton` is a high-performance, fully customizable button component.
 * It follows modern design principles with a focus on tactile feedback and semantic clarity.
 *
 * ## Features
 * - **Polymorphic**: Supports the Slot pattern (`asChild`).
 * - **Refined Semantics**: Semantic variants (Success, Warning, Info, Danger) feature matching text and shadow colors for a clean look.
 * - **Advanced Customization**: Control justification, corner radius, shadows, and icon styling independently.
 * - **Adaptive**: Built-in support for light/dark modes and various screen sizes.
 */
const meta = {
  title: "UI/DjButton",
  component: DjButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Our primary button component. Highly flexible, accessible, and beautiful by default.",
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
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "icon"],
    },
    justify: {
        control: "select",
        options: ["start", "center", "end", "between"],
    },
    rounded: {
        control: "select",
        options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
    shadow: {
        control: "select",
        options: ["none", "sm", "md", "lg", "xl", "2xl"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    pill: { control: "boolean" },
    asChild: { control: "boolean" },
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

export const Primary: Story = {
  args: { variant: "primary", children: "Get Started" },
};

/**
 * Refined semantic variants showing the matching text and shadow scheme.
 */
export const SemanticShowcase: Story = {
    render: (args) => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        <DjButton {...args} variant="success" leftIcon={<CheckCircle2 />}>Success Action</DjButton>
        <DjButton {...args} variant="danger" leftIcon={<Trash2 />}>Danger Action</DjButton>
        <DjButton {...args} variant="warning" leftIcon={<AlertTriangle />}>Warning Action</DjButton>
        <DjButton {...args} variant="info" leftIcon={<Info />}>Info Action</DjButton>
      </div>
    ),
};

/**
 * Control the inner layout of the button content using the `justify` prop.
 */
export const Justification: Story = {
    args: {
        isFullWidth: true,
        leftIcon: <Settings />,
        rightIcon: <ArrowRight />,
        children: "Settings Panel",
        className: "w-[300px]",
    },
    render: (args) => (
        <div className="flex flex-col gap-4 w-[350px]">
            <DjButton {...args} justify="start">Start (Left)</DjButton>
            <DjButton {...args} justify="center">Center (Default)</DjButton>
            <DjButton {...args} justify="end">End (Right)</DjButton>
            <DjButton {...args} justify="between">Space Between</DjButton>
        </div>
    )
};

/**
 * Override the default rounding with the `rounded` prop.
 */
export const CustomRounding: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <DjButton {...args} rounded="none">Sharp</DjButton>
      <DjButton {...args} rounded="md">Square-ish</DjButton>
      <DjButton {...args} rounded="xl">Default (XL)</DjButton>
      <DjButton {...args} rounded="3xl">Extra Round</DjButton>
      <DjButton {...args} pill>Pill (Full)</DjButton>
    </div>
  ),
};

/**
 * Control the shadow elevation independently of the variant.
 */
export const ShadowElevations: Story = {
    args: {
        variant: "secondary",
    },
    render: (args) => (
      <div className="flex flex-wrap items-center gap-6">
        <DjButton {...args} shadow="none">Flat</DjButton>
        <DjButton {...args} shadow="sm">Small</DjButton>
        <DjButton {...args} shadow="md">Medium</DjButton>
        <DjButton {...args} shadow="lg">Large</DjButton>
        <DjButton {...args} shadow="2xl">High Elevation</DjButton>
      </div>
    ),
};

export const LargeHero: Story = {
  args: {
    size: "xl",
    pill: true,
    children: "Download Now",
    rightIcon: <ArrowRight />,
  },
};

export const GlassEffect: Story = {
  render: (args) => (
    <div className="rounded-3xl p-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-rose-700 shadow-2xl">
      <DjButton {...args} variant="glass" size="lg" leftIcon={<ExternalLink />}>
        Explore Universe
      </DjButton>
    </div>
  ),
};

export const IconButtons: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <DjButton {...args} size="icon" variant="outline" aria-label="Save"><Save /></DjButton>
      <DjButton {...args} size="icon" variant="danger" aria-label="Delete"><Trash2 /></DjButton>
      <DjButton {...args} size="icon" variant="secondary" aria-label="Settings"><Settings /></DjButton>
    </div>
  ),
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
    children: "Action in Progress",
  },
};

export const InteractiveTests: Story = {
  args: {
    children: "Test Logic",
    variant: "primary",
    size: "lg",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Test Logic/i });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
