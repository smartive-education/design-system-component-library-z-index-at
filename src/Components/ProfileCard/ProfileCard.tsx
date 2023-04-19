import React, { FC, useState } from 'react';
import { Icon } from '../../Components/Icon';
import { Interaction } from '../../Components/Interaction';
import { IconColor, IconHoverColor, ProfileCardProps, TextColor, TextHoverColor } from '../../models';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { Typography } from '../Typography';

export const ProfileCard: FC<ProfileCardProps> = ({
  name,
  profilePicture,
  userName,
  location,
  calendarText,
  profileText,
  children,
  openProfile,
  onEdit,
}) => {
  const [showEditIcon, setShowEditIcon] = useState(false);

  return (
    <div className="order-1 border-transparent rounded-xl">
      <div className="relative">
        <div
          className="mb-4 h-56 md:h-80 xl:h-[30rem] relative overflow-hidden rounded-xl cursor-pointer bg-violet-100"
          onClick={onEdit}
          onMouseOver={() => setShowEditIcon(true)}
          onMouseOut={() => setShowEditIcon(false)}
        >
          {children}
          <div className={`absolute inset-1/2 ${showEditIcon ? '' : 'hidden'}`}>
            <div className="animate-icontilt">
              <Icon id="edit" size={30} color={IconColor.White} />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute -bottom-20 right-10">
          <ProfilePicture name="unkown" size="large" src={profilePicture} />
        </div>
        <div className="md:hidden flex absolute -bottom-8 right-10">
          <ProfilePicture name="unkown" size="medium" src={profilePicture} />
        </div>
      </div>
      <h4 className="pt-5 text-3xl whitespace-nowrap text-ellipsis overflow-hidden font-semibold" title={name}>
        {name}
      </h4>
      <div className="flex items-center pt-4">
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
        <Interaction
          iconId="location"
          iconColor={IconColor.LightGray}
          textColor={TextColor.LightGray}
          iconHoverColor={IconHoverColor.Gray}
          textHoverColor={TextHoverColor.Gray}
          label={location}
          size="small"
        />
        <div className="hidden md:block">
          <Interaction
            iconId="calendar"
            iconColor={IconColor.LightGray}
            textColor={TextColor.LightGray}
            iconHoverColor={IconHoverColor.Gray}
            textHoverColor={TextHoverColor.Gray}
            label={calendarText}
            size="small"
          />
        </div>
      </div>
      <div className="pt-4">
        <Typography type="paragraph-l" color="text-slate-400">
          {profileText}
        </Typography>
      </div>
    </div>
  );
};
