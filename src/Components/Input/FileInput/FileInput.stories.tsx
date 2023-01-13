import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileInputProps } from '../../../models';
import { FileInput } from './FileInput';

export default {
  title: 'Basic/FileInput',
  component: FileInput,
  argTypes: {
    allowedExtensions: {
      options: ['.pdf', '.jpg', '.png'],
      control: {
        type: 'select',
      },
    },
    allowedFileSize: {
      control: {
        type: 'number',
      },
    },
    errorTranslations: {
      control: false,
    },
  },
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args: FileInputProps) => <FileInput {...args} />;

export const DragAndDrop = Template.bind({});
DragAndDrop.args = {
  label: '... oder Datei auswählen',
  title: 'Datei hierhin ziehen',
  restrictions: 'JPEG oder PNG, maximal 5 MB',
  addFileFn: (file: File) => console.log(file),
};
