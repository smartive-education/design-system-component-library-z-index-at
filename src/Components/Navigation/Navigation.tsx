import React, { FC } from 'react';
import { ActionBackGroundColor, NavigationProps } from '../../models';
import { Effect } from '../Interaction/Effect';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';

export const Navigation: FC<NavigationProps> = ({
  profilePictureSrc,
  settingsLabel = 'Settings',
  loggedInStatusLabel = 'Log in',
  navigateToFeed,
  navigateToProfile,
  openSettings = () => {},
  changeLoggedInStatus,
}) => {
  return (
    <div className="bg-violet-600 h-20 flex justify-around items-center md:grid md:grid-cols-12 md:content-center">
      <div className="hidden md:flex items-center md:col-start-3 md:col-end-5 lg:col-start-4 lg:col-end-6 3xl:col-start-5">
        <Effect
          iconId="mumble"
          label="Mumble"
          size="large"
          effect="group-hover:scale-125 ease-out duration-500"
          squared={false}
          navigate={navigateToFeed}
        />
      </div>
      <div className="md:hidden flex items-center">
        <Effect
          iconId="mumble"
          label=""
          size="large"
          effect="group-hover:scale-125 ease-out duration-500"
          squared={false}
          navigate={navigateToFeed}
        />
      </div>
      <div className="md:col-start-7 md:col-span-4 lg:col-start-6 2xl:col-end-9 flex justify-end">
        <div className="flex items-center">
          <ProfilePicture size="small" src={profilePictureSrc} onClick={navigateToProfile} name="Profile Page" />
        </div>
        <div className="flex items-center ml-4">
          <Effect
            iconId="settings"
            label={settingsLabel}
            size="normal"
            effect="group-hover:rotate-180 ease-out duration-500"
            squared={true}
            backgroundColor={ActionBackGroundColor.DarkViolet}
            navigate={openSettings}
          />
        </div>
        <div className="flex items-center ml-4">
          <Effect
            iconId="logout-start"
            secondaryIcon="logout"
            label={loggedInStatusLabel}
            size="normal"
            effect="transition-all ease-in duration-800"
            squared={true}
            backgroundColor={ActionBackGroundColor.DarkViolet}
            navigate={changeLoggedInStatus}
          />
        </div>
      </div>
    </div>
  );
};
