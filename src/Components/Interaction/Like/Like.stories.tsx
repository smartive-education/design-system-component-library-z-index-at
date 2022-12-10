import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Like } from "./Like";


export default {
  title: "Like",
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => (
  <Like {...args} />
);

export const SingleLike = Template.bind({});
SingleLike.args = {
    value:0,
    isLiked: false
};

export const MultipleLikes = Template.bind({});
MultipleLikes.args = {
    value:1,
    isLiked: true
};
