import React, { FC } from 'react';
import { ProfilePicture } from '../ProfilePicture';

export interface SekeletonProps {
  isProfile?: boolean;
}

export const Skeleton: FC<SekeletonProps> = ({ isProfile = false }) => {
  return (
    <>
      {isProfile ? (
        <div className="relative border-1 border-transparent rounded-xl">
          <div className="w-full border-1 border-transparent rounded-xl ">
            <div className="relative mb-8">
              <div className="w-full h-56 md:h-80 xl:h-[30rem] bg-slate-300 rounded-xl"></div>
              <div className="hidden md:flex z-1 absolute right-10 -bottom-20">
                <div
                  className={`relative cursor-pointer rounded-full bg-violet-100 outline outline-8 outline-slate-100 h-40 w-40`}
                ></div>
              </div>
              <div className="md:hidden flex absolute -bottom-8 right-10">
                <div
                  className={`relative cursor-pointer rounded-full bg-violet-100 outline outline-8 outline-slate-100 h-16 w-16`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative py-4 px-6 mt-4 md:py-8 md:px-12 bg-white border-1 border-transparent rounded-xl">
          <div className="relative flex items-center md:-left-20">
            <div
              className={`relative cursor-pointer rounded-full bg-violet-100 outline outline-8 outline-slate-100 h-16 w-16`}
            ></div>
            <div className="relative flex flex-col w-3/4 mb-4">
              <div className="w-1/2 h-4 animate-skeleton ml-6 my-2"></div>
              <div className="relative w-full">
                <span className="inline-block w-1/3 h-4 animate-skeleton ml-6"></span>
                <span className="inline-block w-1/3 h-4 animate-skeleton ml-6"></span>
              </div>
            </div>
          </div>
          <div className="w-full h-80 border-1 border-transparent rounded-xl">
            <div className="relative flex flex-col w-full mb-2">
              <div className="w-full h-4 animate-skeleton mb-2"></div>
              <div className="w-full h-4 animate-skeleton mb-2"></div>
              <div className="w-full h-4 animate-skeleton mb-2"></div>
            </div>
            <div className="w-full h-60 bg-slate-300 rounded-xl"></div>
          </div>
        </div>
      )}
    </>
  );
};
