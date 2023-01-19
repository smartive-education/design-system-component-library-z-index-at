import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconHoverColor, IconColor, TextColor, TextHoverColor, ActionBackGroundColor } from '../../models';
import { Interaction } from './Interaction';

export default {
  title: 'Basic/Interaction',
  component: Interaction,
  argTypes: {
    iconColor: {
      options: Object.values(IconColor),
      control: {
        type: 'radio',
        labels: Object.keys(IconColor).reduce((result, key: string) => {
          result[IconColor[key]] = key;
          return result;
        }, {}),
      },
    },
    iconHoverColor: {
      options: Object.values(IconHoverColor),
      control: {
        type: 'radio',
        labels: Object.keys(IconHoverColor).reduce((result, key: string) => {
          result[IconHoverColor[key]] = key;
          return result;
        }, {}),
      },
    },
    textColor: {
      options: Object.values(TextColor),
      control: {
        type: 'radio',
        labels: Object.keys(TextColor).reduce((result, key: string) => {
          result[TextColor[key]] = key;
          return result;
        }, {}),
      },
    },
    textHoverColor: {
      options: Object.values(TextHoverColor),
      control: {
        type: 'radio',
        labels: Object.keys(TextHoverColor).reduce((result, key: string) => {
          result[TextHoverColor[key]] = key;
          return result;
        }, {}),
      },
    },
    backgroundColor: {
      control: false,
    },
    size: {
      control: false,
    },
    value: {
      control: false,
    },
  },
} as ComponentMeta<typeof Interaction>;

const Template: ComponentStory<typeof Interaction> = (args) => <Interaction {...args} />;

export const UserName = Template.bind({});
UserName.args = {
  iconId: 'profile',
  label: 'Username',
  iconColor: IconColor.Violet,
  textColor: TextColor.Violet,
  iconHoverColor: IconHoverColor.DarkViolet,
  textHoverColor: TextHoverColor.DarkViolet,
};

export const Location = Template.bind({});
Location.args = {
  iconId: 'location',
  label: 'Location',
};

export const Joined = Template.bind({});
Joined.args = {
  iconId: 'calendar',
  label: 'Mitglied seit 4 Wochen',
};

export const Timestamp = Template.bind({});
Timestamp.args = {
  iconId: 'time',
  label: 'vor 11 Minuten',
};
