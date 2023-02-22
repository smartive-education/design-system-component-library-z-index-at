import React, { FC, useMemo, useState } from 'react';
import { ToggleProps } from '../../models';

export const Toggle: FC<ToggleProps> = ({ isToggleOn, onLabel, offLabel, onClick }) => {
  const [isOn, setIsOn] = useState(isToggleOn);
  const [expandHover, setExpandHover] = useState(false);
  const toggleIsOn = (): void => {
    setIsOn((isOn) => !isOn);
    onClick(isOn);
  };

  const expandHoverClasses = useMemo(() => {
    if (expandHover) {
      return isOn ? 'origin-left scale-x-105 duration-150' : 'origin-right scale-x-105';
    }
    return isOn ? 'w-[10rem] duration-150' : 'w-[8rem] duration-150';
  }, [isOn, expandHover]);

  return (
    <div className="bg-slate-200 border-transparent rounded-xl p-1 flex justify-between max-w-xs relative z-0">
      <div
        className={`${isOn ? 'text-violet-600' : ''} p-2 cursor-pointer text-xl z-20`}
        onClick={toggleIsOn}
        onMouseOver={() => setExpandHover(!isOn)}
        onMouseOut={() => setExpandHover(false)}
      >
        {onLabel}
      </div>
      <div
        className={`${!isOn ? 'text-violet-600' : ''} p-2 cursor-pointer text-xl z-20`}
        onClick={toggleIsOn}
        onMouseOver={() => setExpandHover(isOn)}
        onMouseOut={() => setExpandHover(false)}
      >
        {offLabel}
      </div>
      <div
        className={`absolute top-0 bottom-0 rounded-xl m-1 bg-white z-10
          ${isOn ? 'left-0 duration-150 translate-x-0 w-[10.8rem]' : 'duration-150 translate-x-[11.4rem] w-[7.8rem]'}
          ${expandHoverClasses}`}
      ></div>
    </div>
  );
};
