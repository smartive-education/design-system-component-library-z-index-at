import React, { FC } from 'react';
import { Icon } from '../Icon/Icon';
import { TextColor, TextHoverColor, ActionBackGroundColor, InteractionProps } from '../../models';

export const Interaction: FC<InteractionProps> = ({
  iconId,
  label,
  iconColor,
  textColor,
  iconHoverColor,
  textHoverColor,
  backgroundColor,
  size,
  value,
  onClickFn,
}) => {
  return (
    <button
      onClick={onClickFn}
      className={`group flex items-center hover:border-1 hover:border-solid rounded-full
      ${textColor || TextColor.LightGray} ${textHoverColor || TextHoverColor.Gray}
      ${backgroundColor || ActionBackGroundColor.None} ${
        size === 'standard' ? 'px-3 py-2 font-semibold max-h-9' : 'mr-4'
      }`}
    >
      <Icon id={iconId} size={size === 'standard' ? 16 : 12} color={iconColor} hoverColor={iconHoverColor} />
      <span className={`inline-block text-inherit ${size === 'standard' ? 'pl-1' : 'pl-0.5 text-base font-semibold'}`}>
        {value}
      </span>
      <span className={`inline-block text-inherit ${size === 'standard' ? 'pl-1' : 'pl-0.5 text-base font-semibold'}`}>
        {label}
      </span>
    </button>
  );
};
