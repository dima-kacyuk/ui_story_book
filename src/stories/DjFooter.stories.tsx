import type { Meta, StoryObj } from '@storybook/react';
import { DjFooter } from './DjFooter';

const meta: Meta<typeof DjFooter> = {
  title: 'Layout/DjFooter',
  component: DjFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DjFooter>;

const links = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Support', href: '#' },
];

export const WhiteVariant: Story = {
  args: {
    variant: 'white',
    logo: 'QRENZA',
    links: links,
    copyright: '© 2026 Qrenza Inc. All rights reserved.',
  },
};

export const BlackVariant: Story = {
  args: {
    variant: 'black',
    logo: 'QRENZA',
    links: links,
    copyright: '© 2026 Qrenza Inc. All rights reserved.',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  }
};
