import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Like } from './Like';

export default {
  title: 'Composition/Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => {
  const [likeState, setLikeState] = useState({
    value: args.value,
    isLiked: args.isLiked,
  });
  const setIslikedFn = (isLiked: boolean) => {
    setLikeState((state) => ({
      value: isLiked ? state.value + 1 : state.value - 1,
      isLiked: isLiked,
    }));
  };

  return <Like value={likeState.value} isLiked={likeState.isLiked} setIsLiked={setIslikedFn} />;
};

export const DynamicLike = Template.bind({});
DynamicLike.args = {
  value: 1,
  isLiked: false,
};
