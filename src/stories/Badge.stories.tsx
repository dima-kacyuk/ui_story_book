import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import React from "react";

const meta = {
  title: "UI/djBadge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Beta", variant: "primary" },
};

export const VariantShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <div className="bg-slate-900 p-4 rounded-xl">
        <Badge variant="glass">Glass</Badge>
      </div>
    </div>
  ),
};
