import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalTrigger } from "./Modal";
import { DjButton as Button } from "./DjButton";

const meta = {
  title: "UI/djModal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal 
      title="Architecture Upgrade" 
      description="Applying the Gold Standard boilerplate will refactor your existing project structure."
    >
      <div className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This action will migrate your components to the new directory structure and install advanced utilities.
        </p>
        <div className="flex gap-3 justify-end mt-8">
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Refactor Now</Button>
        </div>
      </div>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
    </Modal>
  ),
};

export const LargeShowcase: Story = {
  render: () => (
    <Modal 
      maxWidth="lg"
      title="System Configuration" 
      description="Manage your project settings and environmental variables."
    >
      <div className="grid grid-cols-2 gap-4 h-64 bg-slate-50 dark:bg-white/5 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center">
         <span className="text-slate-400 font-mono text-xs italic">Settings Content Area</span>
      </div>
      <ModalTrigger asChild>
        <Button variant="outline">Large Configuration</Button>
      </ModalTrigger>
    </Modal>
  ),
};
