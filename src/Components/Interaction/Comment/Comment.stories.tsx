import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Comment } from './Comment';

export default {
  title: 'Composition/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const DynamicComment = Template.bind({});
DynamicComment.args = {
  value: 0,
  clickFn: () => console.log('Navigate to comments'),
};
