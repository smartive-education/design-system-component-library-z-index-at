import React, { ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';
import { IconColor, IconHoverColor, IconProps } from '../../models';

export default {
  title: 'Basic/Icon',
  component: Icon,
  argTypes: {
    color: {
      options: Object.values(IconColor),
      control: {
        type: 'radio',
        labels: Object.keys(IconColor).reduce((result, key: string) => {
          result[IconColor[key]] = key;
          return result;
        }, {}),
      },
    },
    hoverColor: {
      options: Object.values(IconHoverColor),
      control: {
        type: 'radio',
        labels: Object.keys(IconHoverColor).reduce((result, key: string) => {
          result[IconHoverColor[key]] = key;
          return result;
        }, {}),
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const sizes = [14, 32, 64];

const IconVariantTemplate = (args: IconProps) => (
  <ul className="flex group">
    {sizes.map((size) => (
      <li className="px-4 flex">
        <Icon size={args.size || size} id={args.id} color={args.color} hoverColor={args.hoverColor} />
      </li>
    ))}
  </ul>
);

export const Close = IconVariantTemplate.bind({});
Close.args = {
  id: 'close',
  color: IconColor.Pink,
  hoverColor: IconHoverColor.DarkPink,
};
export const Eyes = IconVariantTemplate.bind({});
Eyes.args = {
  id: 'eye',
  color: IconColor.Gray,
  hoverColor: IconHoverColor.DarkPink,
};

const iconIds = [
  'close',
  'eye',
  'mumble',
  'calendar',
  'chat-empty',
  'chat-full',
  'check',
  'down',
  'up',
  'left',
  'right',
  'heart-full',
  'heart-empty',
  'edit',
  'enlarge',
  'location',
  'logout',
  'profile',
  'refresh',
  'share',
  'settings',
  'time',
  'upload',
  'send',
  'logout-start',
];

const IconListTemplate = () => (
  <ul>
    {iconIds.map((id) => (
      <li key={id} className="flex items-center pb-2">
        <Icon size={20} id={id} color={IconColor.Violet} />
        <span className="pl-4">{id}</span>
      </li>
    ))}
  </ul>
);

export const IconList = IconListTemplate.bind({});
