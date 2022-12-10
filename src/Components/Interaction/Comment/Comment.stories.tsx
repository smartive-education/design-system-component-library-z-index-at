import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Comment } from "./Comment";

export default {
  title: "Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const NoComment = Template.bind({});
NoComment.args = {
    value:0
};

export const MultipleComment = Template.bind({});
MultipleComment.args = {
    value:32
};
