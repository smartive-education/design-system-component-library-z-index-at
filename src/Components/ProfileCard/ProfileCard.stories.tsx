import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'Composition/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <main className="md:grid md:grid-cols-12 bg-slate-100 min-h-screen">
    <div className="flex flex-col sm:w-3/4 sm:mx-auto md:w-auto md:mx-0 px-4 sm:px-0 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 2xl:col-start-5 2xl:col-end-9">
      <ProfileCard {...args}>
        <img
          src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"
          alt="profile image"
          className="h-full w-full ease-in-out duration-200 hover:opacity-50"
        />
      </ProfileCard>
    </div>
  </main>
);
export const Profile = Template.bind({});
Profile.args = {
  name: 'Damian Caduff',
  userName: 'damiancaduff',
  location: 'Chur',
  calendarText: 'Mitglied seit 35 Jahre',
  profilePicture: 'assets/images/profile/r.vogt.jpg',
  followed: true,
  profileText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
