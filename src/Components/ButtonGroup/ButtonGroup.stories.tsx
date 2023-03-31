import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonGroupProps } from '../../models';
import { Button } from '../Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Composition/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args: ButtonGroupProps) => (
  <ButtonGroup>
    <Button label="Bild Hochladen" icon="upload" color="Slate" size="M"></Button>
    <Button label="Senden" icon="send" color="Violet" size="M" type="submit"></Button>
  </ButtonGroup>
);

export const MessageButtons = Template.bind({});
