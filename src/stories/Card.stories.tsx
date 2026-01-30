import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Badge } from "./Badge";
import { DjButton as Button } from "./DjButton";

const meta = {
  title: "UI/djCard",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Card>
        <CardBody>
          <h3 className="text-xl font-bold">Standard Card</h3>
          <p className="text-slate-500 mt-2">A clean container for your content.</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const PremiumProduct: Story = {
  render: () => (
    <div className="w-80">
      <Card interactive shadow="2xl" rounded="3xl">
        <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 right-4">
            <Badge variant="glass">Premium</Badge>
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-black dark:text-white">Gold Architecture</h3>
              <p className="text-xs text-slate-500">Infrastructure Template</p>
            </div>
            <div className="text-emerald-500 font-bold">$99</div>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Fully pre-configured React boilerplate with industry best practices.
          </p>
        </CardBody>
        <CardFooter className="bg-slate-50/50 dark:bg-white/5">
          <Button variant="ghost" size="sm">Details</Button>
          <Button variant="primary" size="sm">Buy Now</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
