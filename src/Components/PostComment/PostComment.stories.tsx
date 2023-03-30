import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PostComment } from './PostComment';

export default {
  title: 'Composition/PostComment',
  component: PostComment,
  parameters: {
    backgrounds: { default: 'grey' },
  },
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    RLabel: {
      control: {
        type: 'text',
      },
    },
    LLabel: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof PostComment>;

const Template: ComponentStory<typeof PostComment> = (args) => (
  <div className="md:mx-10">
    <PostComment {...args} />
  </div>
);

export const Comment = Template.bind({});
Comment.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  openProfile: () => {},
  onSubmit: (file: File, text: string) => {
    console.log(file);
    console.log(text);
  },
};
