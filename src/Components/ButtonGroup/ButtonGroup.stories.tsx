import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const MessageButtons = Template.bind({});
MessageButtons.args = {
  LId: 'upload',
  LSize: 'M',
  LLabel: 'Bild Hochladen',
  LIcon: 'upload',
  RId: 'send',
  RColor: 'Violet',
  RSize: 'M',
  RLabel: 'Senden',
  RIcon: 'send',
};
