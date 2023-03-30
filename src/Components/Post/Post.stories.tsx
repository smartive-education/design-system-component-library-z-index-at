import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Post } from './Post';

export default {
  title: 'Composition/Post',
  component: Post,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => {
  const [likeState, setLikeState] = useState({
    value: args.likeCount,
    isLiked: args.isLiked,
  });
  const setIslikedFn = (isLiked: boolean) => {
    setLikeState((state) => ({
      value: isLiked ? state.value + 1 : state.value - 1,
      isLiked: isLiked,
    }));
  };
  return (
    <div className="md:mx-10">
      <Post {...args} likeCount={likeState.value} isLiked={likeState.isLiked} setIsLiked={setIslikedFn} />
    </div>
  );
};

export const SimplePost = Template.bind({});

SimplePost.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  commentCount: 0,
  isLiked: false,
  likeCount: 0,
  copyLabel: 'Copy Link',
  copiedLabel: 'Link is copied',
  link: 'Random Link',
};

const TemplateWithImage: ComponentStory<typeof Post> = (args) => (
  <div className="md:mx-10">
    <Post {...args}>
      <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg" />
    </Post>
  </div>
);

export const FullPost = TemplateWithImage.bind({});
FullPost.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  isLiked: true,
  likeCount: 13,
  link: 'Random Link',
  copyLabel: 'Copy Link',
  copiedLabel: 'Link is copied',
  hashtags: ['muchart', 'veryphoto', 'soballoons'],
  profileHeaderType: 'POST'
};

const TemplateWithGif: ComponentStory<typeof Post> = (args) => (
  <div className="md:mx-10">
    <Post {...args}>
      <img src="https://gifdb.com/images/high/neon-car-synthwave-drive-loop-43ljtbdmd15bzat5.webp" />
    </Post>
  </div>
);

export const PostWithGif = TemplateWithGif.bind({});
PostWithGif.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut >labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  commentCount: 1234,
  isLiked: true,
  likeCount: 4235,
  link: 'Random Link',
  copyLabel: 'Copy Link',
  copiedLabel: 'Link is copied',
  hashtags: ['fast', 'hip', 'retro'],
};
