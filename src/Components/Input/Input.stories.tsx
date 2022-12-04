import React, { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";


export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'E-Mail',
  type: 'email',
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: undefined  
}
