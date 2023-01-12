import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Basic/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ProfileActions = Template.bind({});
ProfileActions.args = {
  onLabel: 'Deine Mumbles',
  offLabel: 'Deine Likes',
};
