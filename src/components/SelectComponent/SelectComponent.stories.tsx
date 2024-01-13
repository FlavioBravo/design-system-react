import { Meta, StoryFn } from "@storybook/react";
import SelectComponent from "./SelectComponent";

export default {
  title: "My Components/SelectComponent",
  component: SelectComponent,
  argTypes: {
    customClass: {
      description: "Label of component",
      options: [
        "mui-select-input-secondary",
        "mui-select-input-tertiary",
        "mui-select-input-quaternary",
      ],
      control: { type: "select" },
    },
  },
} as Meta<typeof SelectComponent>;

const Template: StoryFn<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
);

export const selectComponent = Template.bind({});
selectComponent.args = {
  id: "select",
  label: "puntos",
  age: 10,
  list: [
    { text: "ten", value: 10 },
    { text: "twenty", value: 20 },
    { text: "thirty", value: 30 },
  ],
  customClass: "mui-select-input-secondary",
};
