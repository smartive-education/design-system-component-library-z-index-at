import React, { FC } from 'react';

import { TypographyProps } from '../../models';

export const Typography: FC<TypographyProps> = ({ type, children, htmlFor }) => {
  switch (type) {
    case 'h1':
      return <h1 className="font-bold text-inherit text-3xl md:text-5xl">{children}</h1>;
    case 'h2':
      return <h2 className="font-bold text-inherit text-2xl text-xl md:text-4xl">{children}</h2>;
    case 'h3':
      return <h2 className="font-bold text-inherit text-lg text-xl md:text-3xl">{children}</h2>;
    case 'h4':
      return <h4 className="font-bold text-inherit text-base md:text-2xl">{children}</h4>;
    case 'label-xl':
      return (
        <label className="font-semibold text-inherit  text-lg md:text-2xl" htmlFor={htmlFor}>
          {children}
        </label>
      );
    case 'label-l':
      return (
        <label className="text-inherit font-semibold text-base md:text-xl" htmlFor={htmlFor}>
          {children}
        </label>
      );
    case 'label-m':
      return (
        <label className="text-inherit font-semibold tex-sm md:text-lg" htmlFor={htmlFor}>
          {children}
        </label>
      );
    case 'label-s':
      return (
        <label className="text-inherit font-semibold text-xs" htmlFor={htmlFor}>
          {children}
        </label>
      );
    case 'paragraph-l':
      return <p className="text-inherit text-xl md:text-2xl">{children}</p>;
      case 'paragraph-m':
        return <p className="text-inherit text-base md:text-lg">{children}</p>;
    case 'placeholder':
      return <p className="text-slate-300 text-base">{children}</p>;
    default:
      return <p className="text-inherit text-base">{children}</p>;
  }
};
