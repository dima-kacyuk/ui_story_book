import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, djToast as toast } from "./Toaster";
import { DjButton as Button } from "./DjButton";
import React from "react";

const meta = {
  title: "UI/djToaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="flex gap-4">
        <Button onClick={() => toast.success("Connected to database")}>Success Toast</Button>
        <Button onClick={() => toast.error("Deployment failed")}>Error Toast</Button>
      </div>
      <Button variant="outline" onClick={() => toast.message("Processing request...", { description: "This might take a few seconds." })}>
        With Description
      </Button>
    </div>
  ),
};
