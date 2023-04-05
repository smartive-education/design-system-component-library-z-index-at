import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
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

const Template: ComponentStory<typeof PostComment> = (args) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [fileValue, setFileValue] = useState(undefined);
  const [textValue, setTextValue] = useState('');

  return (
    <div className="md:mx-10">
      <PostComment
        {...args}
        fileValue={fileValue}
        textValue={textValue}
        isDisabled={isDisabled}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setIsDisabled(!event.target.value);
        }}
        onSubmit={(file: File | undefined, text: string) => {
          console.log(file);
          console.log(text);
        }}
      />
    </div>
  );
};

export const Comment = Template.bind({});
Comment.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  isDisabled: true,
  openProfile: () => {},
};
