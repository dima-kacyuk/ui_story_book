import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
  title: "UI/djSelect",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80 p-4">
      <Select {...args} label="Default Theme" helperText="Standard Slate Styles">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </Select>
    </div>
  ),
};

export const Light: Story = {
  render: (args) => (
    <div className="w-80 p-4 bg-gray-50">
      <Select {...args} label="Light Theme Start" theme="light">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </Select>
    </div>
  ),
};

export const Dark: Story = {
  render: (args) => (
    <div className="w-80 p-4 bg-slate-950">
      <Select {...args} label="Dark Theme Start" theme="dark">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </Select>
    </div>
  ),
};
