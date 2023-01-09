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
  const handleChange = useCallback(
    (state) => {
      setDisplay(state);
      onClick(state);
    },
    [display]
  );

  return (
    <div className="bg-slate-200 border-transparent rounded-xl p-1 inline-flex">
      <div
        className={`${
          display === 'mumbles' ? 'bg-white text-violet-600' : ''
        } rounded-xl p-3 cursor-pointer text-xl mr-5`}
        onClick={() => handleChange('mumbles')}
      >
        Deine Mumbles
      </div>
      <div
        className={`${display === 'likes' ? 'bg-white text-violet-600' : ''} rounded-xl p-3 cursor-pointer text-xl`}
        onClick={() => handleChange('likes')}
      >
        Deine Likes
      </div>
    </div>
  );
};

MumblesLikes.defaultProps = defaultProps;
