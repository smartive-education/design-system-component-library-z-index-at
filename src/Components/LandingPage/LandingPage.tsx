import React, { FC } from 'react';
import { Icon } from '../Icon';
import { WordSpinnerAnimation } from '../WordSpinnerAnimation';
import { IconColor } from '../../models';

export const LandingPage: FC = () => {
  return (
      <div className="min-h-[50vh] md:min-h-screen bg-gradient-to-r to-pink-500 from-violet-600 items-center justify-center flex">
        <div>
          <div className="flex justify-center pt-2">
            <Icon id="mumble" size={64} color={IconColor.White} />
          </div>
          <h1 className="pt-4 pb-4 text-white font-bold text-6xl text-center">Mumble</h1>
          <h2 className="pt-4 pb-2 text-pink-300 font-bold text-4xl">Find out what&apos;s new</h2>
          <h2 className="text-pink-300 font-bold text-4xl flex justify-center pb-2">
            in&nbsp;
            <WordSpinnerAnimation />
          </h2>
        </div>
      </div>
  );
};
