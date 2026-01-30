import fs from 'node:fs';
import path from 'node:path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name (e.g., npm run generate MyComponent)');
  process.exit(1);
}

// Ensure first letter is uppercase
const name = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const storiesDir = path.resolve('src/stories');

const componentPath = path.join(storiesDir, `${name}.tsx`);
const storyPath = path.join(storiesDir, `${name}.stories.tsx`);
const indexPath = path.resolve('src/index.ts');

const componentTemplate = `import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ${name}Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional custom style variant
   */
  variant?: 'primary' | 'secondary';
}

/**
 * ${name} component placeholder.
 */
export const ${name} = ({ className, variant = 'primary', children, ...props }: ${name}Props) => {
  return (
    <div
      className={cn(
        'p-4 rounded-xl border transition-all duration-300',
        variant === 'primary' && 'bg-indigo-50 border-indigo-200 text-indigo-700',
        variant === 'secondary' && 'bg-slate-50 border-slate-200 text-slate-700',
        className
      )}
      {...props}
    >
      {children || '${name} Component'}
    </div>
  );
};
`;

const storyTemplate = `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta = {
  title: 'UI/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof ${name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '${name} Component Content',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
`;

// Create component file
fs.writeFileSync(componentPath, componentTemplate);
console.log(`Created component: ${componentPath}`);

// Create story file
fs.writeFileSync(storyPath, storyTemplate);
console.log(`Created story: ${storyPath}`);

// Update index.ts
let indexContent = fs.readFileSync(indexPath, 'utf-8');
const exportLine = `export { ${name} } from "./stories/${name}";\n`;

if (!indexContent.includes(exportLine)) {
  // Add export before the last newline or at the end
  indexContent = indexContent.trim() + '\n' + exportLine;
  fs.writeFileSync(indexPath, indexContent);
  console.log(`Updated exports in: ${indexPath}`);
}

console.log(`\nSuccessfully scaffolded ${name}!`);
console.log(`Check it out in Storybook!`);
