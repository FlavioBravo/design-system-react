import { Meta, StoryFn } from "@storybook/react";
import AccordionComponent from "./AccordionComponent";

export default {
  title: "My Components/AccordionComponent",
  component: AccordionComponent,
  argTypes: {
    customClass: {
      description: "Label of component",
      options: [
        "mui-accordion-secondary",
        "mui-accordion-tertiary",
        "mui-accordion--quaternary",
      ],
      control: { type: "select" },
    },
  },
} as Meta<typeof AccordionComponent>;

const Template: StoryFn<typeof AccordionComponent> = (args) => (
  <AccordionComponent {...args} />
);

export const accordionComponent = Template.bind({});
accordionComponent.args = {
  id: "accordion",
  list: [
    {
      title: "Accordion 1",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
      title: "Accordion 2",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
    {
      title: "Accordion 3",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.`,
    },
  ],
  customClass: "mui-accordion-quaternary",
};
