import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputProps } from '../../models';
import { Input } from './Input';
import { defaultErrorMessages, emailPattern, passwordPattern } from './input-validation.helpers';

export default {
  title: 'Basic/Input',
  component: Input,
  argTypes: {
    type: {
      control: false,
    },
    name: {
      control: false,
    },
    validationTrigger: {
      control: false,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Text',
  type: 'text',
  required: true,
  maxLength: 40,
  placeholder: 'Type in some text',
  errorTranslations: defaultErrorMessages,
};

export const TextAreaInput = Template.bind({});
TextAreaInput.args = {
  label: 'Textarea',
  type: 'textarea',
  required: true,
  maxLength: 200,
  placeholder: 'Type in some text',
  errorTranslations: defaultErrorMessages,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
  type: 'email',
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: emailPattern,
  placeholder: 'Email address',
  errorTranslations: defaultErrorMessages,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Passwort',
  type: 'password',
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: passwordPattern,
  placeholder: 'Password',
  errorTranslations: defaultErrorMessages,
};
