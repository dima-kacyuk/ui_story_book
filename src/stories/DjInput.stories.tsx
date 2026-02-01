import type { Meta, StoryObj } from '@storybook/react';
import { DjInput } from './DjInput';
import { Mail, Lock, Globe, User, Hash } from 'lucide-react';
import React from 'react';

const meta = {
  title: 'Components/DjInput',
  component: DjInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DjInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your system alias...',
    leftIcon: <User />,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Command Center Email',
    placeholder: 'admin@qrenza.pro',
    leftIcon: <Mail />,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Security Protocol',
    placeholder: 'Enter encrypted key...',
    leftIcon: <Lock />,
  },
};

export const NumberOnlyZip: Story = {
  args: {
    onlyNumbers: true,
    label: 'Zip Code',
    placeholder: '00000',
    leftIcon: <Globe />,
    maxLength: 5,
    description: 'Only numbers allowed via native constraint.'
  } as any,
};

export const ErrorState: Story = {
  args: {
    label: 'Access Code',
    placeholder: 'PR-9000-X',
    error: 'Invalid sequence detected. Please re-authenticate.',
    leftIcon: <Hash />,
  },
};

export const Adaptive: Story = {
  args: {
    label: 'Full Width Adaptive',
    placeholder: 'Responsively scaling with container...',
    className: 'w-full',
  },
};
