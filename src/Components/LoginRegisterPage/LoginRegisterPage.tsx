import React, { FC, useState, useEffect } from 'react';

import { EntryForm } from '../EntryForm';
import { Icon, IconColor } from '../Icon';

interface LoginRegisterPageProps {
  isRegistered: boolean;
}
const keywords = ['fashion', 'politics', 'tech', 'lifestyle', 'sports'];

const loginFn = () => {};
const registerFn = () => {};

const getKeyword = (keyword) => {
  return <div className="text-white animate-textintro">#{keyword}</div>;
};

export const LoginRegisterPage: FC<LoginRegisterPageProps> = ({ isRegistered }) => {
  const [keyword, setKeyword] = useState(getKeyword(keywords[0]));
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeyword(<></>);
      setSeconds((seconds) => (seconds < keywords.length - 1 ? seconds + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setKeyword(getKeyword(keywords[seconds]));
  }, [seconds]);

  return (
    <div className="flex flex-col md:flex-row items-center h-screen w-screen">
      <div className="h-full bg-gradient-to-r to-pink-500 from-purple-500 items-center justify-center flex w-screen md:w-6/12">
        <div>
          <div className="flex justify-center">
            <Icon id="mumble" size={48} color={IconColor.White} />
          </div>
          <h1 className="pt-4 pb-4 text-white font-bold text-6xl text-center">Mumble</h1>
          <h2 className="pt-4 pb-2 text-pink-300 font-bold text-4xl">Find out what's new</h2>
          <h2 className="text-pink-300 font-bold text-4xl flex justify-center">in&nbsp;{keyword}.</h2>
        </div>
      </div>
      <div className="w-6/12 pt-4 md:pt-0">
        <EntryForm isRegistered={isRegistered} loginFn={loginFn} registerFn={registerFn} />
      </div>
    </div>
  );
};
