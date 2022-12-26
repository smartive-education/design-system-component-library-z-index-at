import React, { FC } from 'react';

import { UserWidget } from '../UserWidget'

export type AvatarSize = 'small' | 'medium' | 'large';

export const UserWidgetRow = () => {

  return (
    <div className="flex flex-row items-center justify-around">
    <div className="w-full p-2 min-w-fit">
        <UserWidget
          src='/assets/images/profile/r.vogt.jpg'
          name='Damian Caduff'
          size='small'
          username = 'damiancaduff'
        />
      </div>
    <div className="w-full p-2 min-w-fit">
        <UserWidget
          src='/assets/images/profile/r.vogt.jpg'
          name='Robert Vogt'
          size='small'
          username = 'robertvogt'
      />
      </div>
    <div className="w-full p-2 min-w-fit">
        <UserWidget
          src='/assets/images/profile/r.vogt.jpg'
          name='Chrisoph Bühler'
          size='small'
          username = 'christophbuehler'
      />
      </div>
    </div>
  );
};
