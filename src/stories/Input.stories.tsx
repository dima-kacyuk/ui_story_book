import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import React from "react";
import { Mail, Lock, User, Search } from "lucide-react";

const meta = {
  title: "UI/djInput",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    leftIcon: <Mail size={18} />,
  },
};

export const LoginExample: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4 p-8 bg-white dark:bg-slate-950 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div className="text-center space-y-2 mb-4">
        <h2 className="text-2xl font-bold dark:text-white">Sign In</h2>
        <p className="text-xs text-slate-500">Premium access only</p>
      </div>
      <Input label="Username" placeholder="Enter username" leftIcon={<User size={18} />} />
      <Input label="Password" type="password" placeholder="••••••••" leftIcon={<Lock size={18} />} />
      <button className="mt-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold active:scale-95 transition-all">
        Authenticate
      </button>
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    label: "Username",
    error: true,
    helperText: "This username is already taken.",
    defaultValue: "dima_kacyuk",
  },
};

export const SearchBar: Story = {
  args: {
    placeholder: "Search components...",
    leftIcon: <Search size={18} />,
    className: "rounded-full h-12",
  },
};
