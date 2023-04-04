import React, { FC } from 'react';

import { TypographyProps } from '../../models';

export const Typography: FC<TypographyProps> = ({ type, children, htmlFor, color = 'text-slate-600' }) => {
  switch (type) {
    case 'h1':
      return <h1 className={`font-bold text-3xl md:text-5xl ${color}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`font-bold text-2xl text-xl md:text-4xl ${color}`}>{children}</h2>;
    case 'h3':
      return <h2 className={`font-bold text-lg text-xl md:text-3xl ${color}`}>{children}</h2>;
    case 'h4':
      return <h4 className={`font-bold text-base md:text-2xl ${color}`}>{children}</h4>;
    case 'label-xl':
      return <label className={`font-semibold  text-lg md:text-2xl" htmlFor={htmlFor}`}>{children}</label>;
    case 'label-l':
      return <label className={`font-semibold text-base md:text-xl htmlFor={htmlFor}`}>{children}</label>;
    case 'label-m':
      return <label className={`font-semibold tex-sm md:text-lg" htmlFor={htmlFor}`}>{children}</label>;
    case 'label-s':
      return <label className={`font-semibold text-xs" htmlFor={htmlFor}`}>{children}</label>;
    case 'paragraph-l':
      return <p className={`text-xl md:text-2xl ${color}`}>{children}</p>;
    case 'placeholder':
      return <p className={`text-slate-300 text-base ${color}`}>{children}</p>;
    default:
      return <p className={`text-base ${color}`}>{children}</p>;
  }
};
