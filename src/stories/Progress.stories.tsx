import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta = {
  title: "UI/djProgress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 65,
    variant: "primary",
  },
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
};

export const VariantShowcase: Story = {
  render: () => (
    <div className="w-80 space-y-8 p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800">
      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Primary Bar</span>
          <span>75%</span>
        </div>
        <Progress value={75} variant="primary" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Indigo System</span>
          <span>45%</span>
        </div>
        <Progress value={45} variant="indigo" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>Success State</span>
          <span>100%</span>
        </div>
        <Progress value={100} variant="success" animate={false} />
      </div>
    </div>
  ),
};
