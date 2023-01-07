import React, { FC, useMemo } from 'react';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { Icon, IconColor, IconHoverColor } from '../../Components/Icon';
import { Interaction, TextColor, TextHoverColor } from '../../Components/Interaction';

interface ProfileCardProps {
  name: string;
  userName: string;
  profileImage: string;
  profilePicture: string;
  location: string;
  calendarText: string;
  profileText: string;
  openProfile: () => void;
  followed: boolean;
  onFollow: () => void;
}

const openProfile = () => {};
const iconClose = 'close';

export const ProfileCard: FC<ProfileCardProps> = ({
  name,
  profileImage,
  profilePicture,
  userName,
  location,
  calendarText,
  profileText,
  openProfile,
  followed,
  onFollow,
}) => {
  const buttonClasses = useMemo(() => {
    if (followed) {
      return {
        classes: 'text-white bg-slate-600',
        text: 'Unfollow',
      };
    }
    return {
      classes: 'text-black',
      text: 'Follow',
    };
  }, [followed]);

  return (
    <div className="py-4 px-6 md:py-8 md:px-12 order-1 border-transparent rounded-xl">
      <div className="relative">
        <div className="mb-4 max-h-80 object-contain overflow-hidden rounded-xl">
          <img src={profileImage} alt="" />
        </div>
        <div className="absolute -bottom-20 right-10">
          <ProfilePicture name="unkown" size="large" src={profilePicture} />
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
      <div className="pt-4 text-slate-400">{profileText}</div>
      <div className="flex justify-end pt-10">
        {followed && <div className="pr-4 pt-2 text-slate-400">Du folgst Damian Carduff</div>}
        <button
          onClick={onFollow}
          className={`border border-solid rounded-md px-4 py-2 flex border-2 border-slate-600 ${buttonClasses.classes}`}
        >
          <div className="fwhitespace-nowrap">{buttonClasses.text}</div>
          {followed && (
            <div className="pt-1 pl-4">
              <Icon id={iconClose} size={16} color={IconColor.White} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
