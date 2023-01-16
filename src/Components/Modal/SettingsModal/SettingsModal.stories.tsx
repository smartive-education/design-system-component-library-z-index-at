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
      <SettingsModal
        {...args}
        isOpen={isOpen}
        closeFn={() => setIsOpen(false)}
        submitFn={(form) => {
          console.log(`Name: ${(form.elements.namedItem('settings-name') as HTMLInputElement).value}`);
          console.log(`Email: ${(form.elements.namedItem('settings-email') as HTMLInputElement).value}`);
          console.log(`Location: ${(form.elements.namedItem('settings-location') as HTMLInputElement).value}`);
          console.log(`Bio: ${(form.elements.namedItem('settings-bio') as HTMLInputElement).value}`);
          console.log(`Altes Passwort: ${(form.elements.namedItem('old-password') as HTMLInputElement).value}`);
          console.log(`Neues Passwort: ${(form.elements.namedItem('new-password') as HTMLInputElement).value}`);
        }}
      />
    </div>
  );
};

export const Settings = Template.bind({});
Settings.args = {
  title: 'Einstellungen',
  submitFn: noop,
};
