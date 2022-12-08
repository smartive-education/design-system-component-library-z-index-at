import React, { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon, IconColor } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const CloseSmall = Template.bind({});
CloseSmall.args = {
  id: "close"
};

export const CloseMedium = Template.bind({});
CloseMedium.args = {
  id: "close",
  width: 32,
  height: 32
};

export const CloseLarge = Template.bind({});
CloseLarge.args = {
  id: "close",
  width: 64,
  height: 64
};

export const Delete = Template.bind({});
Delete.args = {
  id: "close",
  width: 32,
  height: 32,
  color: IconColor.Red,
};

export const Eye = Template.bind({});
Eye.args = {
  id: "eye",
  width: 32,
  height: 32
};
