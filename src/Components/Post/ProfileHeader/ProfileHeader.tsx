import React, { FC } from 'react';
import { ProfilePicture } from '../../ProfilePicture';
import { IconColor, IconHoverColor } from '../../../Components/Icon';
import { Interaction, TextColor, TextHoverColor } from '../../../Components/Interaction';

export interface ProfileHeaderProps {
  name: string;
  userName: string;
  src: string;
  isProfilePageHeader?: boolean;
  location?: string;
  memberSince?: string;
  postCreationTime?: string;
  openProfile: () => void;
}

const defaultProfileHeader: Partial<ProfileHeaderProps> = {
  isProfilePageHeader: false,
};

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  name,
  userName,
  src,
  location,
  memberSince,
  postCreationTime,
  isProfilePageHeader,
  openProfile,
}) => {
  return (
    <div className="relative -left-20 flex mb-4">
      <ProfilePicture name={name} onClick={openProfile} src={src} hasOutline={!isProfilePageHeader} />
      <div className='ml-4'>
        <h4 className={`${isProfilePageHeader ? 'text-3xl font-bold' : 'text-2xl font-medium'}`}>{name}</h4>
        <div className="flex">
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
          {isProfilePageHeader ? (
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
          ) : (
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
        </div>
      </div>
    </div>
  );
};

ProfileHeader.defaultProps = defaultProfileHeader;
