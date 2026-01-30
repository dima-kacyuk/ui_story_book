import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { Card, CardBody } from "./Card";

const meta = {
  title: "UI/djTabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardBody>
              <h4 className="font-bold">Account Settings</h4>
              <p className="text-sm text-slate-500 mt-2">Manage your public profile and preferences.</p>
            </CardBody>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardBody>
              <h4 className="font-bold">Password Policy</h4>
              <p className="text-sm text-slate-500 mt-2">Update your authentication credentials.</p>
            </CardBody>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <div className="flex flex-col gap-12">
      <div className="p-8 bg-white rounded-3xl border border-slate-100">
        <h3 className="text-xs font-black uppercase tracking-tighter text-slate-300 mb-4">Standard Light</h3>
        <Tabs defaultValue="one" theme="light">
          <TabsList>
            <TabsTrigger value="one">Overview</TabsTrigger>
            <TabsTrigger value="two">Integrations</TabsTrigger>
            <TabsTrigger value="three">Billing</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="p-8 bg-slate-950 rounded-3xl border border-slate-800">
        <h3 className="text-xs font-black uppercase tracking-tighter text-slate-700 mb-4">Midnight Dark</h3>
        <Tabs defaultValue="one" theme="dark">
          <TabsList className="bg-white/5 border-white/5">
            <TabsTrigger value="one">Overview</TabsTrigger>
            <TabsTrigger value="two">Integrations</TabsTrigger>
            <TabsTrigger value="three">Billing</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};
