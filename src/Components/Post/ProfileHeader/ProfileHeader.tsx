import React, { FC } from 'react';
import { IconColor, IconHoverColor } from '../../../Components/Icon';
import { Interaction, TextColor, TextHoverColor } from '../../../Components/Interaction';

export interface ProfileHeaderProps {
  name: string;
  userName: string;
  isProfilePageHeader?: boolean;
  location?: string;
  memberSince?: string;
  postCreationTime?: string;
  openProfile?: () => {};
}

const defaultProfileHeader: Partial<ProfileHeaderProps> = {
  isProfilePageHeader: false,
};

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  name,
  userName,
  location,
  memberSince,
  postCreationTime,
  isProfilePageHeader,
  openProfile,
}) => {
  return (
    <div>
      <h4 className={`${isProfilePageHeader ? 'text-3xl font-bold' : 'text-2xl font-medium'}`}>{name}</h4>
      <div className='flex'>
        <Interaction
          iconId="profile"
          iconColor={IconColor.Violet}
          textColor={TextColor.Violet}
          iconHoverColor={IconHoverColor.DarkViolet}
          textHoverColor={TextHoverColor.DarkViolet}
          label={userName}
          size='small'
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
              size='small'
            />
            <Interaction
              iconId="calendar"
              iconColor={IconColor.LightGray}
              textColor={TextColor.LightGray}
              iconHoverColor={IconHoverColor.Gray}
              textHoverColor={TextHoverColor.Gray}
              label={memberSince ?? ''}
              size='small'
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
            size='small'
          />
        )}
      </div>
    </div>
  );
};

ProfileHeader.defaultProps = defaultProfileHeader;
