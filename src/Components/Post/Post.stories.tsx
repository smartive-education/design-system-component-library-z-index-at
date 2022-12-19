import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Post } from "./Post";

export default {
    title: 'Post',
    component: Post,
  } as ComponentMeta<typeof Post>;
  
  const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;
  
  export const DefaultPost = Template.bind({});
  DefaultPost.args = {
    name: 'Robert Vogt',
    userName: 'robertvogt',
    postCreationTime: 'vor 11 Minuten',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut >labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    commentCount: 0,
    isLiked: false,
    likeCount: 0,
    link: 'Random Link'
  }