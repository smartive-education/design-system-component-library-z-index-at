import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Navigation } from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Header = Template.bind({});

Header.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: '/assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut >labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  commentCount: 0,
  isLiked: false,
  likeCount: 0,
  link: 'Random Link',
};
