import React, { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const CloseSmall = Template.bind({});
CloseSmall.args = {
    id: "close",
    size: 14
}

export const CloseMedium = Template.bind({});
CloseMedium.args = {
    id: "close",
    size: 32
}

export const CloseLarge = Template.bind({});
CloseLarge.args = {
    id: "close",
    size: 64
}

export const Delete = Template.bind({});
Delete.args = {
    id: "close",
    size: 32,
    color: '#f43f5e'
}

export const Eye = Template.bind({});
Eye.args = {
    id: "eye",
    size: 32
}