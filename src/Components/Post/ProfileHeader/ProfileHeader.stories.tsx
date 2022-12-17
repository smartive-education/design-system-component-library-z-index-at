import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ProfileHeader } from "./ProfileHeader";

export default {
    title: 'ProfileHeader',
    component: ProfileHeader,
  } as ComponentMeta<typeof ProfileHeader>;
  
  const Template: ComponentStory<typeof ProfileHeader> = (args) => <ProfileHeader {...args} />;
  
  export const PostHeader = Template.bind({});
  PostHeader.args = {
    name: 'Robert Vogt',
    userName: 'robertvogt',
    postCreationTime: 'vor 11 Minuten'
  }

  export const ProfilePageHeader = Template.bind({});
  ProfilePageHeader.args = {
    name: 'Robert Vogt',
    userName: 'robertvogt',
    postCreationTime: 'vor 11 Minuten',
    location: 'Zürich',
    memberSince: 'Mitglied seit 4 Wochen',
    isProfilePageHeader: true
  }