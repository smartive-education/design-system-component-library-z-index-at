import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ProfilePicture } from '../../ProfilePicture/ProfilePicture';
import { FileUploadModal } from './FileUploadModal';

export default {
  title: 'Composition/FileUploadModal',
  component: FileUploadModal,
  parameters: {
    backgrounds: { default: 'grey' },
    docs: {
      description: {
        component:
          'Modal opens when Edit (pen) is clicked. Profile Picture is not a part of this story, it only serves the interactivity.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: false,
    },
  },
} as ComponentMeta<typeof FileUploadModal>;

const noop = () => {};

const Template: ComponentStory<typeof FileUploadModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ProfilePicture name="unkown" src="" size="large" edit={true} onClick={noop} onEdit={() => setIsOpen(true)} />
      <FileUploadModal {...args} isOpen={isOpen} closeFn={() => setIsOpen(false)} />
    </div>
  );
};

export const FileUpload = Template.bind({});
FileUpload.args = {
  submitFn: (file: File) => console.log(file),
};
