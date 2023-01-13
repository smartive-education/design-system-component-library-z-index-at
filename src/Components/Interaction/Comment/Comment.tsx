import React, { FC } from 'react';
import {
  ActionBackGroundColor,
  CommentProps,
  IconColor,
  IconHoverColor,
  TextColor,
  TextHoverColor,
} from '../../../models';
import { Interaction } from '../Interaction';

export const Comment: FC<CommentProps> = ({ value, clickFn }) => {
  return (
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={value === 0 ? 'chat-empty' : 'chat-full'}
          label={value && value > 1 ? 'Comments' : 'Comment'}
          value={value > 0 ? value : undefined}
          iconColor={value === 0 ? IconColor.Gray : IconColor.Violet}
          textColor={TextColor.Gray}
          iconHoverColor={IconHoverColor.Violet}
          textHoverColor={TextHoverColor.Violet}
          backgroundColor={ActionBackGroundColor.Violet}
          size="standard"
          onClickFn={clickFn}
        />
      </div>
      <div className="block md:hidden">
        <Interaction
          iconId={value === 0 ? 'chat-empty' : 'chat-full'}
          label=""
          value={value > 0 ? value : undefined}
          iconColor={value === 0 ? IconColor.Gray : IconColor.Violet}
          textColor={TextColor.Gray}
          iconHoverColor={IconHoverColor.Violet}
          textHoverColor={TextHoverColor.Violet}
          backgroundColor={ActionBackGroundColor.Violet}
          size="standard"
          onClickFn={clickFn}
        />
      </div>
    </div>
  );
};
