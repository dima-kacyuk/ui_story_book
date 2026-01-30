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
    <div className="w-80">
      <Select {...args} label="Region" helperText="Determines currency and tax">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
        <option value="uk">United Kingdom</option>
        <option value="jp">Japan</option>
      </Select>
    </div>
  ),
};
