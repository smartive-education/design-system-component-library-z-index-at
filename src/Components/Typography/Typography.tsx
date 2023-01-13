import React, { FC } from 'react';

type Type = 'h1' | 'h2' | 'h3' | 'h4' | 'label-xl' | 'label-l' | 'label-m'
| 'label-s' | 'paragraph-l' | 'paragraph-m' | 'placeholder'

interface TypographyProps {
  type?: Type;
  children: string;
  htmlFor?: string,
}

export const Typography: FC<TypographyProps> = ({
  type,
  children,
  htmlFor,
}) => {
  switch(type) {
    case 'h1':
      return <h1 className="font-bold text-slate-600 text-3xl md:text-5xl">{children}</h1>
    case 'h2':
      return <h2 className="font-bold text-slate-600 text-2xl text-xl md:text-4xl">{children}</h2>
    case 'h3':
      return <h2 className="font-bold text-slate-600 text-lg text-xl md:text-3xl">{children}</h2>
    case 'h4':
      return <h4 className="font-bold text-slate-600 text-base md:text-2xl">{children}</h4>
    case 'label-xl':
      return <label className="font-semibold text-slate-600  text-lg md:text-2xl" htmlFor={htmlFor}>{children}</label>
    case 'label-l':
      return <label className="text-slate-600 font-semibold text-base md:text-xl" htmlFor={htmlFor}>{children}</label>
    case 'label-m':
      return <label className="text-slate-600 font-semibold tex-sm md:text-lg" htmlFor={htmlFor}>{children}</label>
    case 'label-s':
      return <label className="text-slate-600 font-semibold text-xs" htmlFor={htmlFor}>{children}</label>
    case 'paragraph-l':
      return <p className="text-slate-600 text-xl md:text-2xl">{children}</p>
    case 'placeholder':
      return <p className="text-slate-300 text-base">{children}</p>
    default:
      return <p className="text-slate-600 text-base">{children}</p>
  }
};
