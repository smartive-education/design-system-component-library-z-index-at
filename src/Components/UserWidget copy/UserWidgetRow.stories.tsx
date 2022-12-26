import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserWidgetRow } from './UserWidgetRow';

export default {
  title: 'UserWidgetRow',
  component: UserWidgetRow,
} as ComponentMeta<typeof UserWidgetRow>;

const Template: ComponentStory<typeof UserWidgetRow> = (args) => <UserWidgetRow {...args} />;

export const Row = Template.bind({});
