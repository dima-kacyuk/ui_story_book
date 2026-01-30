import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import React from "react";

const meta = {
  title: "UI/djTextarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    helperText: "Supports Markdown",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Description",
    placeholder: "Required field",
    error: true,
    helperText: "Description must be at least 100 characters.",
  },
};
