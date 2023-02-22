import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Basic/Toggle',
  component: Toggle,
  argTypes: {
    isToggleOn: {
      control: false,
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [isOn, setIsOn] = useState(false);
  return <Toggle {...args} isToggleOn={isOn} onClick={(isOn) => setIsOn(() => isOn)} />;
};

export const ProfileActions = Template.bind({});
ProfileActions.args = {
  onLabel: 'Deine Mumbles',
  offLabel: 'Deine Likes',
};
