import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LoginRegisterPage } from './LoginRegisterPage';

export default {
  title: 'LoginRegisterPage',
  component: LoginRegisterPage,
} as ComponentMeta<typeof LoginRegisterPage>;

const Template: ComponentStory<typeof LoginRegisterPage> = (args) => <LoginRegisterPage {...args} />;

export const Login = Template.bind({});

Login.args = {
  isRegistered: true,
};

export const Register = Template.bind({});

Login.args = {
  isRegistered: false,
};
