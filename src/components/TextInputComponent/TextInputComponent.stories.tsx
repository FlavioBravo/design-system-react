import { Meta, StoryFn } from "@storybook/react";
import TextInputComponent from "./TextInputComponent";

export default {
  title: "My Components/TextInputComponent",
  component: TextInputComponent,
  argTypes: {
    customClass: {
      description: "Label of component",
      options: [
        "mui-input-text-secondary",
        "mui-input-text-tertiary",
        "mui-input-text-quaternary",
      ],
      control: { type: "select" },
    },
  },
} as Meta<typeof TextInputComponent>;

const Template: StoryFn<typeof TextInputComponent> = (args) => <TextInputComponent {...args} />;

export const textInputComponent = Template.bind({});
textInputComponent.args = {
  id: "ejemplo",
  label: "nombre",
  customClass: "mui-input-text-tertiary",
};
