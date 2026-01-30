import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import React from "react";

const meta = {
  title: "UI/djSwitch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable Features",
  },
};

export const ThemeShowcase: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8 p-12 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Light Theme</h3>
        <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <Switch {...args} theme="light" label="Sound Effects" defaultChecked />
          <Switch {...args} theme="light" label="Auto-Update" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dark Theme</h3>
        <div className="flex flex-col gap-4 p-8 bg-[#09090b] rounded-2xl border border-slate-800 shadow-xl">
          <Switch {...args} theme="dark" label="Sound Effects" defaultChecked />
          <Switch {...args} theme="dark" label="Auto-Update" />
        </div>
      </div>
    </div>
  ),
};
