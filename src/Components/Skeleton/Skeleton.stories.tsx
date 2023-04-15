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
  <main className="md:grid md:grid-cols-12 bg-slate-100 min-h-screen">
    <div className="flex flex-col sm:w-3/4 sm:mx-auto md:w-auto md:mx-0 px-4 sm:px-0 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 2xl:col-start-5 2xl:col-end-9">
      <Skeleton {...args} />{' '}
    </div>
  </main>
);

export const PostSkeleton = Template.bind({});
