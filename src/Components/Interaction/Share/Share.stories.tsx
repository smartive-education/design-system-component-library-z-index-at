import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Share } from './Share';

export default {
  title: 'Composition/Share',
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = (args) => <Share {...args} />;

export const CopyLink = Template.bind({});
CopyLink.args = {
  value: 'Link URL',
  label: 'Copy Link',
  copiedLabel: 'Link is copied',
};
