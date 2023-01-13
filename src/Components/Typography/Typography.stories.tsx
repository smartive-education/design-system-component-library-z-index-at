import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <div>
  <Typography type="h1">Headline H1</Typography><br />
  <Typography type="h2">Headline H2</Typography><br />
  <Typography type="h3">Headline H3</Typography><br />
  <Typography type="h4">Headline H4</Typography><br />
  <Typography type="paragraph-l">Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.</Typography><br />
  <Typography type="paragraph-m">Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.</Typography><br />
  <Typography type="label-xl">Label XL</Typography><br /><br />
  <Typography type="label-l">Label L</Typography><br /><br />
  <Typography type="label-m">Label M</Typography><br /><br />
  <Typography type="placeholder">Placeholder</Typography><br />
  <Typography type="label-s">Label S</Typography><br />
  </div>
  )

export const FontTypes = Template.bind({});
