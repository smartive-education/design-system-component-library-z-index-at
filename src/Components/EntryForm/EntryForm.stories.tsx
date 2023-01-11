import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { EntryForm } from './EntryForm';

export default {
  title: 'EntryForm',
  component: EntryForm,
} as ComponentMeta<typeof EntryForm>;

const Template: ComponentStory<typeof EntryForm> = (args) => <EntryForm {...args} />;

export const DynamicForm = Template.bind({});
DynamicForm.args = {
  loginFn: (form: HTMLFormElement) => {
    console.log(`Email: ${(form.elements.namedItem('login-email') as HTMLInputElement).value}`);
    console.log(`Password: ${(form.elements.namedItem('login-password') as HTMLInputElement).value}`);
  },
  registerFn: (form: HTMLFormElement) => {
    console.log(`Name: ${(form.elements.namedItem('register-name') as HTMLInputElement).value}`);
    console.log(`User: ${(form.elements.namedItem('register-user') as HTMLInputElement).value}`);
    console.log(`Email: ${(form.elements.namedItem('register-email') as HTMLInputElement).value}`);
    console.log(`Password: ${(form.elements.namedItem('register-password') as HTMLInputElement).value}`);
  },
};
