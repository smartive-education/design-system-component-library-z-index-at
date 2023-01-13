import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileHeader } from './ProfileHeader';

export default {
  title: 'Basic/ProfileHeader',
  component: ProfileHeader,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args) => (
  <div className="ml-20">
    <ProfileHeader {...args} />
  </div>
);

export const Profile = Template.bind({});
Profile.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  location: 'Zürich',
  memberSince: 'Mitglied seit 4 Wochen',
  size: 'medium',
};
