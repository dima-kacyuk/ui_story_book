import type { Meta, StoryObj } from "@storybook/react";
import { DjSelect } from "./Select";

const meta = {
  title: "UI/djSelect",
  component: DjSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DjSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80 p-4">
      <DjSelect {...args} label="Default Theme" helperText="Standard Slate Styles">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </DjSelect>
    </div>
  ),
};

export const Light: Story = {
  render: (args) => (
    <div className="w-80 p-4 bg-gray-50">
      <DjSelect {...args} label="Light Theme Start" theme="light">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </DjSelect>
    </div>
  ),
};

export const Dark: Story = {
  render: (args) => (
    <div className="w-80 p-4 bg-slate-950">
      <DjSelect {...args} label="Dark Theme Start" theme="dark">
        <option value="us">United States</option>
        <option value="eu">European Union</option>
      </DjSelect>
    </div>
  ),
};

export const CustomColors: Story = {
  render: (args) => (
    <div className="w-80 p-4">
      <DjSelect 
        {...args} 
        label="Custom Colors" 
        helperText="Red Border, Blue Text, Yellow BG"
        borderColor="red"
        textColor="blue"
        backgroundColor="#fef9c3"
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </DjSelect>
    </div>
  ),
};
