import type { Meta, StoryObj } from '@storybook/react';
import { DjSidebar } from './DjSidebar';
import { Home, Users, Settings, BarChart3, Mail, Bell, LogOut } from 'lucide-react';


const meta = {
  title: 'Components/DjSidebar',
  component: DjSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['black', 'white'],
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof DjSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMenuItems = [
  { id: 'home', label: 'Dashboard', icon: <Home />, href: '#' },
  { id: 'users', label: 'Users', icon: <Users />, badge: '12' },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 /> },
  { id: 'messages', label: 'Messages', icon: <Mail />, badge: '3' },
  { id: 'notifications', label: 'Alerts', icon: <Bell />, badge: '99+' },
  { id: 'settings', label: 'Settings', icon: <Settings /> },
];

const SampleLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xl">
      DJ
    </div>
    <span className="text-lg font-black tracking-tight">NEXUS</span>
  </div>
);

const CollapsedLogo = () => (
  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xl">
    DJ
  </div>
);

export const White: Story = {
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'home',
    variant: 'white',
    position: 'left',
  },
  render: (args) => (
    <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar is on the left with white variant.</p>
      </div>
    </div>
  ),
};

export const Black: Story = {
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'analytics',
    variant: 'black',
    position: 'left',
  },
  render: (args) => (
    <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar is on the left with black variant.</p>
      </div>
    </div>
  ),
};

export const RightSide: Story = {
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'users',
    variant: 'white',
    position: 'right',
  },
  render: (args) => (
    <div className="flex h-screen bg-slate-50">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar is on the right side.</p>
      </div>
      <DjSidebar {...args} />
    </div>
  ),
};

export const Collapsed: Story = {
  args: {
    logo: <CollapsedLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'settings',
    variant: 'white',
    position: 'left',
    defaultCollapsed: true,
  },
  render: (args) => (
    <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar starts collapsed. Hover over icons to see tooltips.</p>
      </div>
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    logo: <SampleLogo />,
    menuItems: sampleMenuItems,
    activeItemId: 'home',
    variant: 'black',
    position: 'left',
    footer: (
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
        <LogOut size={20} />
        <span className="text-sm font-black uppercase tracking-wide">Logout</span>
      </button>
    ),
  },
  render: (args) => (
    <div className="flex h-screen bg-slate-50">
      <DjSidebar {...args} />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-black">Main Content Area</h1>
        <p className="text-slate-600 mt-2">The sidebar has a footer with a logout button.</p>
      </div>
    </div>
  ),
};
