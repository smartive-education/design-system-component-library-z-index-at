import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserWidget } from './UserWidget';

export default {
  title: 'UserWidget',
  component: UserWidget,
} as ComponentMeta<typeof UserWidget>;

const Template: ComponentStory<typeof UserWidget> = (args) => <UserWidget {...args} />;

export const Widget = Template.bind({});
Widget.args = {
  src: '/assets/images/profile/r.vogt.jpg',
  name: 'Robert Vogt',
  size: 'small',
};
