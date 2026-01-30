import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogAction, DialogCancel } from "./Dialog";
import { DjButton as Button } from "./DjButton";
import React from "react";

const meta = {
  title: "UI/djDialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog 
      title="Are you absolutely sure?" 
      description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
    >
      <DialogCancel asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogCancel>
      <DialogAction asChild>
        <Button variant="primary">Confirm Deletion</Button>
      </DialogAction>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Account</Button>
      </DialogTrigger>
    </Dialog>
  ),
};
