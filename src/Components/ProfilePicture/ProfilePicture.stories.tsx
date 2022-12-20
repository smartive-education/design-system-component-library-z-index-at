import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfilePicture } from './ProfilePicture';

export default {
  title: 'ProfilePicture',
  component: ProfilePicture,
} as ComponentMeta<typeof ProfilePicture>;

const Template: ComponentStory<typeof ProfilePicture> = (args) => <ProfilePicture {...args} />;

export const ProfileAvatar = Template.bind({});
ProfileAvatar.args = {
  src:'/assets/images/profile/r.vogt.jpg',
  name:'Robert Vogt'
};

export const PostAvatar = Template.bind({});
PostAvatar.args = {
  src:'/assets/images/profile/r.vogt.jpg',
  name:'Robert Vogt',
  hasOutline: true
};