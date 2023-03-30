import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Basic/Skeleton',
  component: Skeleton,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <div className="md:ml-20">
    <Skeleton {...args} />
  </div>
);

export const PostSkeleton = Template.bind({});
