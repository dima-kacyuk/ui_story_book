import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

const meta = {
  title: "UI/djDatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Departure Date",
    placeholder: "Select a date",
  },
};

export const ThemeShowcase: Story = {
  render: () => (
    <div className="flex flex-col md:flex-row gap-12 p-8">
      <div className="w-80 space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Light Theme</h3>
        <DatePicker label="Project Start" theme="light" />
      </div>
      <div className="w-80 space-y-4 p-8 bg-[#09090b] rounded-[32px] border border-slate-800">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dark Theme</h3>
        <DatePicker label="Project Deadline" theme="dark" />
      </div>
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    label: "Date of Birth",
    error: true,
    helperText: "You must be at least 18 years old.",
  },
};
