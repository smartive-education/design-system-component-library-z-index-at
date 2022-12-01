import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Slate = Template.bind({});
Slate.args = {
  type: 'Slate',
  label: 'E-mail',
}
export const Violet = Template.bind({});
Violet.args = {
  type: 'Violet',
  label: 'E-mail',
}
export const Gradient = Template.bind({});
Gradient.args = {
  type: 'Gradient',
  label: 'E-mail',
}
