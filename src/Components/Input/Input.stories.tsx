import React, { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: "Text",
  type: "text",
  required: true,
  maxLength: 40,
  pattern: undefined,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: "Email",
  type: "email",
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: undefined,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Passwort",
  type: "password",
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: undefined,
};