import type { Meta, StoryObj } from '@storybook/react';
import { DjCarousel } from './DjCarousel';

const meta = {
  title: 'Components/DjCarousel',
  component: DjCarousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DjCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleSlides = [
  <div key="1" className="w-full h-[400px] flex items-center justify-center bg-slate-100 dark:bg-slate-900 p-12">
    <div className="max-w-md text-center">
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Precision Engineering</h2>
      <p className="text-slate-500 dark:text-slate-400">The world's most advanced UI primitives, built for technical excellence.</p>
    </div>
  </div>,
  <div key="2" className="w-full h-[400px] flex items-center justify-center bg-slate-950 text-white p-12">
    <div className="max-w-md text-center">
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">Quantum Density</h2>
      <p className="text-slate-400">High-density interfaces that don't compromise on aesthetic purity.</p>
    </div>
  </div>,
  <div key="3" className="w-full h-[400px] flex items-center justify-center bg-white dark:bg-slate-950 p-12 border-4 border-slate-900 dark:border-white">
    <div className="max-w-md text-center">
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Master Console</h2>
      <p className="text-slate-500 dark:text-slate-400">Total control over your system architecture from a single minimalist entry point.</p>
    </div>
  </div>,
];

export const Default: Story = {
  args: {
    children: SampleSlides,
    className: 'max-w-4xl mx-auto my-12',
  },
};

export const Autoplay: Story = {
  args: {
    children: SampleSlides,
    autoplayInterval: 3000,
    className: 'max-w-4xl mx-auto my-12',
  },
};

export const Vertical: Story = {
  args: {
    children: SampleSlides,
    orientation: 'vertical',
    className: 'max-w-4xl h-[400px] mx-auto my-12',
  },
};

export const Minimalist: Story = {
  args: {
    children: SampleSlides,
    showArrows: false,
    showDots: true,
    className: 'max-w-4xl mx-auto my-12',
  },
};
