import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

const meta = {
  title: "UI/djAccordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern for accordions, using Radix UI primitives.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styling flexible?</AccordionTrigger>
          <AccordionContent>
            Absolutely. It uses Tailwind CSS and follows our premium "Gold Standard" design tokens.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use custom icons?</AccordionTrigger>
          <AccordionContent>
            The trigger uses Lucide icons by default, but the structure is fully customizable.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
