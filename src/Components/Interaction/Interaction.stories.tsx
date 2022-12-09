import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IconColor } from "../Icon/Icon";
import { Interaction, TextColor } from "./Interaction";

export default {
    title: 'Interaction',
    component: Interaction
} as ComponentMeta<typeof Interaction>;

const Template: ComponentStory<typeof Interaction> = (args) => <Interaction {...args} />;

export const Comment = Template.bind({});
Comment.args = {
    iconId: 'chat-empty',
    label: 'Comment'
}

export const Comments = Template.bind({});
Comments.args = {
    iconId: 'chat-full',
    label: 'Comments',
    value: 32,
    iconColor: IconColor.Violet,
    textColor: TextColor.Gray
}

export const Like = Template.bind({});
Like.args = {
    iconId: 'heart-empty',
    label: 'Like',
    iconColor: IconColor.LightPink,
    textColor: TextColor.LightPink
}

export const Liked = Template.bind({});
Liked.args = {
    iconId: 'heart-full',
    label: 'Liked',
    iconColor: IconColor.Pink,
    textColor: TextColor.Pink
}

export const Likes = Template.bind({});
Likes.args = {
    iconId: 'heart-full',
    label: 'Likes',
    value: 13,
    iconColor: IconColor.Pink,
    textColor: TextColor.DarkPink
}

export const UserName = Template.bind({});
UserName.args = {
    iconId: 'profile',
    label: 'Username',
    iconColor: IconColor.Violet,
    textColor: TextColor.Violet,
    size: 'small'
}

export const Location = Template.bind({});
Location.args = {
    iconId: 'location',
    label: 'Location',
    iconColor: IconColor.LightGray,
    textColor: TextColor.LightGray,
    size: 'small'
}
