import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import { Modal } from './Modal';

export default {
  title: 'Basic/Modal',
  component: Modal,
  parameters: {
    backgrounds: { default: 'grey' },
    docs: {
      description: {
        component:
          'Modal opens when Settings (cog) is clicked. Header is not a part of this story, it only serves the interactivity.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: false,
    },
  },
} as ComponentMeta<typeof Modal>;

const noop = () => {};

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navigation
        profilePictureSrc="assets/images/profile/r.vogt.jpg"
        navigateToFeed={noop}
        navigateToProfile={noop}
        changeLoggedInStatus={noop}
        openSettings={() => setIsOpen(true)}
        settingsLabel="Settings"
        loggedInStatusLabel="Logout"
      />
      <Modal {...args} isOpen={isOpen} closeFn={() => setIsOpen(false)} submitFn={() => setIsOpen(false)} />
    </div>
  );
};

export const ModalFrame = Template.bind({});
ModalFrame.args = {
  title: 'Modal Frame',
};

export const LoadingSpinner = Template.bind({});
LoadingSpinner.args = {
  isLoadingSpinner: true,
};
