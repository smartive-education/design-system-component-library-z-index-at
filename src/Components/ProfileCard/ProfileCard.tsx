import React, { FC, useCallback } from 'react';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';


export const ProfileCard = () => {
// interface ProfileCardProps {
//   name: string;
//   src: string;
//   size: AvatarSize;
//   edit?: boolean;
//   onClick: () => void;
//   onEdit?: () => void;
// }
  return (
    <div className="py-4 px-6 md:py-8 md:px-12 order-1 border-transparent rounded-xl">
      <div className="mb-4 max-h-80 relative">
        <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg" className="rounded-xl" />
        <div className="absolute bottom-0 right-10">
          <ProfilePicture name="unkown" size="large" src="assets/images/profile/r.vogt.jpg" />
        </div>
      </div>
    </div>
  );
};
