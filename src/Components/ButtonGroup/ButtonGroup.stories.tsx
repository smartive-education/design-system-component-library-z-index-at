import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonGroupProps } from '../../models';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Composition/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: ButtonGroupProps) => <ButtonGroup {...args} />;

export const MessageButtons = Template.bind({});
MessageButtons.args = {
  LLabel: 'Bild Hochladen',
  LColor: 'Slate',
  LSize: 'M',
  RLabel: 'Senden',
  RColor: 'Violet',
  RSize: 'M',
};
