import React, { FC } from 'react';
import { ButtonProps, IconColor } from '../../models';
import { Icon } from '../Icon';

const colorClasses = (color: string): string => {
  if (color === 'Violet') {
    return 'bg-violet-600 focus:border-violet-200 hover:bg-violet-700';
  }
  if (color === 'Gradient') {
    return 'bg-gradient-to-r from-pink-500 to-violet-600 focus:border-violet-200 hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-700';
  }
  return 'bg-slate-600 focus:border-slate-200 hover:bg-slate-700';
};

interface SizeClasses {
  text: string;
  container: string;
}

const sizeClasses = (size: string): SizeClasses => {
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
};

export const Button: FC<ButtonProps> = ({
  label,
  type = 'button',
  color = 'Slate',
  size = 'L',
  icon,
  testId = label,
  disabled = false,
  onClick,
}) => {
  return (
    <div className="flex">
      <button
        type={type}
        aria-label={label}
        data-testid={testId}
        onClick={onClick}
        disabled={disabled}
        className={`w-full rounded-md
         text-white text-base
        active:outline-4 active:outline outline-slate-200
        leading-none disabled:pointer-events-none disabled:border-1 disabled:opacity-75 ${colorClasses(color)}`}
      >
        <div className={`flex place-content-center items-center ${sizeClasses(size).container}`}>
          <div className={`fwhitespace-nowrap ${sizeClasses(size).text}`}>{label}</div>
          <Icon id={icon} size={16} color={IconColor.White} />
        </div>
      </button>
    </div>
  );
};
