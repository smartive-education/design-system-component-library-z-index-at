import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { IconColor, IconHoverColor, TextColor, TextHoverColor, UserWidgetProps } from '../../models';
import { Button } from '../Button';
import { Interaction } from '../Interaction';
import { ProfilePicture } from '../ProfilePicture';

export const UserWidget: FC<UserWidgetProps> = ({ name, username, src, onClick }) => {
  const inputId = uuid();

  return (
    <div className="bg-white rounded-2xl relative p-4 w-full">
      <div className="p-2 place-content-center flex">
        <ProfilePicture name="rvogt" size="medium" src={src} />
      </div>
      <h4
        className="p-1 text-xl text-center  whitespace-nowrap text-ellipsis overflow-hidden font-semibold"
        title={name}
      >
        {name}
      </h4>
      <div className="p-1 place-content-center flex">
        <Interaction
          iconId="profile"
          label={username}
          iconColor={IconColor.Violet}
          textColor={TextColor.Violet}
          iconHoverColor={IconHoverColor.DarkViolet}
          textHoverColor={TextHoverColor.DarkViolet}
        />
      </div>
      <div className="pt-2 pb-4">
        <Button
          type="submit"
          id={inputId}
          color="Violet"
          size="M"
          label="Follow"
          onClick={onClick}
          icon="mumble"
        />
      </div>
    </div>
  );
};
