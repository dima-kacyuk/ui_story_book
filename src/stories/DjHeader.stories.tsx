import type { Meta, StoryObj } from '@storybook/react';
import { DjHeader } from './DjHeader';
import { useState } from 'react';

const meta: Meta<typeof DjHeader> = {
  title: 'Layout/DjHeader',
  component: DjHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DjHeader>;

const links = [
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

export const WhiteVariant: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <div className={isDark ? "dark bg-slate-950 min-h-[300px]" : "bg-white min-h-[300px]"}>
            <DjHeader 
                variant="white"
                links={links}
                logo="QRENZA"
                isDark={isDark}
                onToggleTheme={() => setIsDark(!isDark)}
                onLogin={() => alert('Login clicked')}
                onAdminLogin={() => alert('Admin Login clicked')}
            />
        </div>
    );
  }
};

export const BlackVariant: Story = {
    render: () => {
      const [isDark, setIsDark] = useState(true);
      return (
          <div className={isDark ? "dark bg-slate-950 min-h-[300px]" : "bg-white min-h-[300px]"}>
              <DjHeader 
                  variant="black"
                  links={links}
                  logo="QRENZA"
                  isDark={isDark}
                  onToggleTheme={() => setIsDark(!isDark)}
                  onLogin={() => alert('Login clicked')}
                  onAdminLogin={() => alert('Admin Login clicked')}
              />
          </div>
      );
    }
  };
