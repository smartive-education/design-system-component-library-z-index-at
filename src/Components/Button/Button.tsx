import React, { FC, useMemo } from 'react';
import { ButtonProps, IconColor } from '../../models';
import { Icon } from '../Icon';

export const Button: FC<ButtonProps> = ({ label, type = 'button', color = 'Slate', size = 'L', icon, onClick }) => {
  const colorClasses = useMemo(() => {
    if (color === 'Violet') {
      return 'bg-violet-600 focus:border-violet-200 hover:bg-violet-700';
    }
    if (color === 'Gradient') {
      return 'bg-gradient-to-r from-pink-500 to-violet-600 focus:border-violet-200 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-700';
    }
    return 'bg-slate-600 focus:border-slate-200 hover:bg-slate-700';
  }, [color]);

  const sizeClasses = useMemo(() => {
    if (size === 'M') {
      return {
        text: 'pr-2',
        container: 'px-4 py-2',
      };
    }
    return {
      text: 'pr-4',
      container: 'px-8 py-4',
    };
  }, [size]);

  return (
    <div className="flex">
      <button
        type={type}
        onClick={onClick}
        className={`w-full border border-solid border-slate-200 rounded-md
         text-white text-base
        focus:outline-none focus:border-4
        leading-none ${colorClasses}`}
      >
        <div className={`flex place-content-center items-center ${sizeClasses.container}`}>
          <div className={`fwhitespace-nowrap ${sizeClasses.text}`}>{label}</div>
          <Icon id={icon} size={16} color={IconColor.White} />
        </div>
      </button>
    </div>
  );
};
