import React, { FC } from 'react';
import {
  ActionBackGroundColor,
  EffectProps,
  IconColor,
  IconHoverColor,
  TextColor,
  TextHoverColor,
} from '../../../models';
import { Icon } from '../../Icon';

export const Effect: FC<EffectProps> = ({
  iconId,
  label,
  size,
  effect,
  squared,
  secondaryIcon,
  backgroundColor,
  navigate,
}) => {
  return (
    <button
      onClick={navigate}
      className={`group flex items-center rounded-lg
        ${squared ? 'flex-col' : 'flex-row'}
        ${backgroundColor || ActionBackGroundColor.None} ${squared ? 'p-3' : ''}
      ${TextColor.White} ${TextHoverColor.White}
      ${size === 'large' ? 'text-3xl font-bold' : 'text-base'}`}
    >
      <div className={`${effect} ${secondaryIcon ? 'group-hover:hidden' : ''}`}>
        <Icon id={iconId} size={size === 'large' ? 40 : 20} color={IconColor.White} hoverColor={IconHoverColor.White} />
      </div>
      <div className={`${effect} hidden group-hover:inline-block`}>
        {secondaryIcon && (
          <Icon
            id={secondaryIcon}
            size={size === 'large' ? 40 : 20}
            color={IconColor.White}
            hoverColor={IconHoverColor.White}
          />
        )}
      </div>

      <span className={`inline-block text-inherit ${squared ? '' : 'ml-4'}`}>{label}</span>
    </button>
  );
};
