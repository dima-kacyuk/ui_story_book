import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import React from "react";

const meta = {
  title: "UI/djAlert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Project Milestone",
    children: "You have successfully migrated to the Gold Standard boilerplate.",
    variant: "success",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[500px]">
      <Alert variant="info" title="System Update">A new version of the UI library is now available.</Alert>
      <Alert variant="success" title="Success">Your configuration has been saved successfully.</Alert>
      <Alert variant="warning" title="Warning">Your trial period is expiring in 3 days.</Alert>
      <Alert variant="error" title="Critical Error">Failed to connect to the backend API server.</Alert>
    </div>
  ),
};
