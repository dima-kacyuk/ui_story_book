import type { Meta, StoryObj } from '@storybook/react';
import { DjSwitch } from './DjSwitch';

const meta = {
  title: 'Components/DjSwitch',
  component: DjSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    onCheckedChange: { action: 'checked changed' },
  },
} satisfies Meta<typeof DjSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable Telemetry',
    description: 'Send anonymous performance data to the master console.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Compact Mode',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'High Visibility',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'Active System',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'System Locked',
    description: 'You do not have permission to toggle this setting.',
  },
};
