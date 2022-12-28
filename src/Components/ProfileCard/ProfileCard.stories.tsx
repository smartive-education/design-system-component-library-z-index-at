import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  src: 'assets/images/profile/r.vogt.jpg',
  name: 'Robert Vogt',
  size: 'small',
};
