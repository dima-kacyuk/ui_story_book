import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta = {
  title: "UI/djRadio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Standard Option" },
};

export const GroupExample: Story = {
  render: () => (
    <div className="space-y-4 p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Select Plan</h3>
      <div className="space-y-3">
        <Radio name="plan" label="Basic Bundle" defaultChecked />
        <Radio name="plan" label="Pro Tier" />
        <Radio name="plan" label="Enterprise Solutions" />
      </div>
    </div>
  ),
};
