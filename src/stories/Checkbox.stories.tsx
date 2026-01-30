import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import React from "react";

const meta = {
  title: "UI/djCheckbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "radio",
      options: ["light", "dark"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept Terms",
    description: "I agree to the premium service agreement.",
  },
};

export const ThemeShowcase: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Light Theme</h3>
        <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Checkbox {...args} theme="light" label="Notifications" checked />
          <Checkbox {...args} theme="light" label="Marketing" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dark Theme</h3>
        <div className="flex flex-col gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl">
          <Checkbox {...args} theme="dark" label="Notifications" checked />
          <Checkbox {...args} theme="dark" label="Marketing" />
        </div>
      </div>
    </div>
  ),
};
