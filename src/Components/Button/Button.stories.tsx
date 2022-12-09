import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SlateL = Template.bind({});
SlateL.args = {
  icon: 'mumble',
  type: "Slate",
  label: "E-mail",
};
export const SlateM = Template.bind({});
SlateM.args = {
  icon: 'mumble',
  type: "Slate",
  label: "E-mail",
  size: "M",
};
export const VioletL = Template.bind({});
VioletL.args = {
  icon: 'mumble',
  type: "Violet",
  label: "E-mail",
};
export const VioletM = Template.bind({});
VioletM.args = {
  icon: 'mumble',
  type: "Violet",
  label: "E-mail",
  size: "M",
};
export const GradientL = Template.bind({});
GradientL.args = {
  icon: 'mumble',
  type: "Gradient",
  label: "E-mail",
};
export const GradientM = Template.bind({});
GradientM.args = {
  icon: 'mumble',
  type: "Gradient",
  label: "E-mail",
  size: "M",
};
