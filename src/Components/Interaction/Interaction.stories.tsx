import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IconColor, IconHoverColor } from "../Icon/Icon";
import { BackGroundColor, Interaction, TextColor, TextHoverColor } from "./Interaction";

export default {
    title: 'Interaction',
    component: Interaction
} as ComponentMeta<typeof Interaction>;

const Template: ComponentStory<typeof Interaction> = (args) => <Interaction {...args} />;

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
