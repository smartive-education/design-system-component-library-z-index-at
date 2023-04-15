import React, { FC } from 'react';
import { Interaction } from '../../../Components/Interaction';
import { IconColor, IconHoverColor, ProfileHeaderProps, TextColor, TextHoverColor } from '../../../models';
import { ProfilePicture } from '../../ProfilePicture';

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  type = 'POST',
  name,
  userName,
  src,
  location,
  memberSince,
  postCreationTime,
  openProfile,
}) => {
  return (
    <div
      className={`relative flex items-center mb-4 ${type === 'POST' || type === 'CREATE-POST' ? 'md:-left-20' : ''}`}
    >
      {type !== 'PROFILE' && (
        <ProfilePicture
          name={name}
          onClick={openProfile}
          src={src}
          size={type === 'POST' || type === 'CREATE-POST' ? 'medium' : 'small'}
        />
      )}
      <div className="ml-4">
        <h4
          className={`${
            type === 'PROFILE'
              ? 'text-3xl font-bold'
              : type === 'POST' || type === 'CREATE-POST'
              ? 'text-2xl font-semibold'
              : 'font-semibold text-base'
          }`}
        >
          {name}
        </h4>
        <div className="flex">
          {type !== 'CREATE-POST' && (
            <div className="hidden md:block">
              <Interaction
                iconId="profile"
                iconColor={IconColor.Violet}
                textColor={TextColor.Violet}
                iconHoverColor={IconHoverColor.DarkViolet}
                textHoverColor={TextHoverColor.DarkViolet}
                label={userName}
                size="small"
                onClickFn={openProfile}
              />
            </div>
          )}
          {(type === 'POST' || type === 'REPLY') && (
            <Interaction
              iconId="time"
              iconColor={IconColor.LightGray}
              textColor={TextColor.LightGray}
              iconHoverColor={IconHoverColor.Gray}
              textHoverColor={TextHoverColor.Gray}
              label={postCreationTime ?? ''}
              size="small"
            />
          )}
          {type === 'PROFILE' && (
            <>
              <Interaction
                iconId="location"
                iconColor={IconColor.LightGray}
                textColor={TextColor.LightGray}
                iconHoverColor={IconHoverColor.Gray}
                textHoverColor={TextHoverColor.Gray}
                label={location ?? ''}
                size="small"
              />
              <Interaction
                iconId="calendar"
                iconColor={IconColor.LightGray}
                textColor={TextColor.LightGray}
                iconHoverColor={IconHoverColor.Gray}
                textHoverColor={TextHoverColor.Gray}
                label={memberSince ?? ''}
                size="small"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
