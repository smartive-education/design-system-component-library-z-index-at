import React, { FC, useState, useCallback } from 'react';

export type State = 'mumbles' | 'likes';

interface MumblesLikesProps {
  state: State;
  onClick: (param: string) => void;
}
const defaultProps: Partial<MumblesLikesProps> = {
  state: 'mumbles',
};

export const MumblesLikes: FC<MumblesLikesProps> = ({ state, onClick }) => {
  const [display, setDisplay] = useState(state);
  const [expandHover, setExpandHover] = useState('');
  const handleChange = useCallback(
    (state) => {
      setDisplay(state);
      onClick(state);
    },
    [display]
  );

  console.log(expandHover);
  return (
    <div className="bg-slate-200 border-transparent rounded-xl p-1 flex justify-between max-w-xs">
      <div
        className={`${display === 'mumbles' ? 'bg-white text-violet-600' : ''} rounded-xl p-2 cursor-pointer text-xl ${
          expandHover === 'mumbles' ? 'pr-5 duration-150' : 'pr-2 duration-150'
        }`}
        onClick={() => handleChange('mumbles')}
        onMouseOver={() => setExpandHover('likes')}
        onMouseOut={() => setExpandHover('')}
      >
        Deine Mumbles
      </div>
      <div
        className={`${display === 'likes' ? 'bg-white text-violet-600' : ''} rounded-xl p-2 cursor-pointer text-xl ${
          expandHover === 'likes' ? 'pl-5 duration-150' : 'pl-2 duration-150'
        }`}
        onClick={() => handleChange('likes')}
        onMouseOver={() => setExpandHover('mumbles')}
        onMouseOut={() => setExpandHover('')}
      >
        Deine Likes
      </div>
    </div>
  );
};

MumblesLikes.defaultProps = defaultProps;
