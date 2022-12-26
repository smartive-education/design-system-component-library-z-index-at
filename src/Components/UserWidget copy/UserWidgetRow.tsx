import React, { FC } from 'react';

import { UserWidget } from '../UserWidget'

export type AvatarSize = 'small' | 'medium' | 'large';

export const UserWidgetRow = () => {

  return (
    <div className="flex items-center justify-around">
    <UserWidget
      src='/assets/images/profile/r.vogt.jpg'
      name='Damian Caduff'
      size='small'
      username = 'damiancaduff'
    />
    <UserWidget
      src='/assets/images/profile/r.vogt.jpg'
      name='Robert Vogt'
      size='small'
      username = 'robertvogt'
    />
    <UserWidget
      src='/assets/images/profile/r.vogt.jpg'
      name='Chrisoph Bühler'
      size='small'
      username = 'christophbuehler'
    />
    </div>
  );
};
