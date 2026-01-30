import type { Meta, StoryObj } from "@storybook/react";
import { DjButton } from "./DjButton";
import { Mail, ArrowRight, Trash2, Save } from "lucide-react";

const meta = {
  title: "UI/DjButton",
  component: DjButton,
  parameters: {
    layout: "centered",
    design: {
        type: "figma",
        url: "https://www.figma.com/file/your-figma-file-id", // Placeholder
    }
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "link"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "The size of the button",
    },
    isLoading: {
      control: "boolean",
      description: "Shows a loading spinner",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isLoading: false,
    disabled: false,
  },
} satisfies Meta<typeof DjButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete",
    leftIcon: <Trash2 />,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Read more",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <DjButton {...args} size="sm">Small</DjButton>
      <DjButton {...args} size="md">Medium</DjButton>
      <DjButton {...args} size="lg">Large</DjButton>
    </div>
  ),
};

export const WithIcons: Story = {
    render: (args) => (
      <div className="flex items-center gap-4">
        <DjButton {...args} leftIcon={<Mail />}>Email</DjButton>
        <DjButton {...args} rightIcon={<ArrowRight />}>Next</DjButton>
        <DjButton {...args} variant="outline" size="icon"><Save /></DjButton>
      </div>
    ),
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Saving...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};
