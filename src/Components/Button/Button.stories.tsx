import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonProps } from '../../models';
import { Button } from './Button';

export default {
  title: 'Basic/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const SlateL = Template.bind({});
SlateL.args = {
  icon: 'mumble',
  label: 'E-mail',
  color: 'Slate',
  size: 'L',
  disabled: false,
};
