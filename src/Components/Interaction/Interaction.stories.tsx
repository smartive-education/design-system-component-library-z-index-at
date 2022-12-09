import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IconColor, IconHoverColor } from "../Icon/Icon";
import { BackGroundColor, Interaction, TextColor, TextHoverColor } from "./Interaction";

export default {
    title: 'Interaction',
    component: Interaction
} as ComponentMeta<typeof Interaction>;

const Template: ComponentStory<typeof Interaction> = (args) => <Interaction {...args} />;

export const Comment = Template.bind({});
Comment.args = {
    iconId: 'chat-empty',
    label: 'Comment',
    backgroundColor: BackGroundColor.Gray,
    iconColor: IconColor.LightGray,
    textColor: TextColor.LightGray,
    iconHoverColor: IconHoverColor.Gray,
    textHoverColor: TextHoverColor.Gray
}

export const Comments = Template.bind({});
Comments.args = {
    iconId: 'chat-full',
    label: 'Comments',
    value: 32,
    backgroundColor: BackGroundColor.Violet,
    iconColor: IconColor.Violet,
    textColor: TextColor.LightGray,
    textHoverColor: TextHoverColor.Gray
}

export const Like = Template.bind({});
Like.args = {
    iconId: 'heart-empty',
    label: 'Like',
    iconColor: IconColor.Gray,
    textColor: TextColor.Gray,
    backgroundColor: BackGroundColor.Pink,
    iconHoverColor: IconHoverColor.Pink,
    textHoverColor: TextHoverColor.Pink
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
