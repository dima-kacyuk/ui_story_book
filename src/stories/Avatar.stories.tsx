import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";

const meta = {
  title: "UI/djAvatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    fallback: "Dima Kacyuk",
    size: "lg",
    isOnline: true,
  },
};

export const Initials: Story = {
  args: {
    fallback: "John Wick",
    size: "lg",
    isOnline: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <Avatar fallback="XS" size="xs" />
      <Avatar fallback="SM" size="sm" />
      <Avatar fallback="MD" size="md" isOnline />
      <Avatar fallback="LG" size="lg" isOnline />
      <Avatar fallback="XL" size="xl" isOnline />
    </div>
  ),
};
