import type { Meta, StoryObj } from "@storybook/react";
import { DjButton } from "./DjButton";
import React from "react";
import { Star, ArrowRight } from "lucide-react";

/**
 * DjButton is a premium component with tactile feedback and dual-theme support.
 */
const meta = {
  title: "UI/djButton",
  component: DjButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "success", "warning", "info", "glass", "link"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg", "xl", "icon"],
    },
    theme: {
      control: "radio",
      options: ["light", "dark"],
    },
    isLoading: { control: "boolean" },
    isFullWidth: { control: "boolean" },
    pill: { control: "boolean" },
  },
} satisfies Meta<typeof DjButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Stories ---

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const ThemeShowcase: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Light Theme</h3>
        <div className="flex flex-wrap gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <DjButton {...args} theme="light" variant="primary">Black Primary</DjButton>
          <DjButton {...args} theme="light" variant="success">Success</DjButton>
          <DjButton {...args} theme="light" variant="glass" className="bg-slate-900/10 text-slate-900 border-slate-900/20">Glass</DjButton>
          <DjButton {...args} theme="light" variant="outline">Outline</DjButton>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dark Theme</h3>
        <div className="flex flex-wrap gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl">
          <DjButton {...args} theme="dark" variant="primary">White Primary</DjButton>
          <DjButton {...args} theme="dark" variant="success">Success</DjButton>
          <DjButton {...args} theme="dark" variant="glass">Glass</DjButton>
          <DjButton {...args} theme="dark" variant="outline">Outline</DjButton>
        </div>
      </div>
    </div>
  ),
};

export const Icons: Story = {
  args: {
    variant: "primary",
    leftIcon: <Star />,
    rightIcon: <ArrowRight />,
    children: "With Icons",
  },
};

export const Glass: Story = {
  decorators: [
    (Story) => (
      <div className="p-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    variant: "glass",
    children: "Glassmorphism",
    size: "lg",
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {(["primary", "secondary", "success", "danger", "warning", "info", "outline", "glass"] as const).map(v => (
        <div key={v} className="flex flex-col gap-2 items-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">{v}</span>
          <DjButton variant={v}>{v}</DjButton>
        </div>
      ))}
    </div>
  )
};
