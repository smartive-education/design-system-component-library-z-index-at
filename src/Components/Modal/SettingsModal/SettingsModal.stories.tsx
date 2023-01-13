import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Navigation } from '../../Navigation';
import { SettingsModal } from './SettingsModal';

export default {
  title: 'Template/SettingsModal',
  component: SettingsModal,
  parameters: {
    backgrounds: { default: 'grey' },
    docs: {
      description: {
        component:
          'SettingsModal is just a Template, meaning it is not exported from the lib as a standalone component. It only serves presentation and design purposes. Modal opens when Settings (cog) is clicked. Header is not a part of this story, it only serves the interactivity.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: false,
    },
  },
} as ComponentMeta<typeof SettingsModal>;

const noop = () => {};

const Template: ComponentStory<typeof SettingsModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navigation
        profilePictureSrc="assets/images/profile/r.vogt.jpg"
        navigateToFeed={noop}
        navigateToProfile={noop}
        logout={noop}
        openSettings={() => setIsOpen(true)}
      />
      <SettingsModal {...args} isOpen={isOpen} closeFn={() => setIsOpen(false)} submitFn={() => setIsOpen(false)} />
    </div>
  );
};

export const Settings = Template.bind({});
Settings.args = {
  title: 'Einstellungen',
  submitFn: noop,
};
