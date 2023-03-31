export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'L' | 'M';
export type ButtonColor = 'Slate' | 'Violet' | 'Gradient';
export type InputType = 'text' | 'password' | 'email' | 'textarea';
export type InteractionSize = 'small' | 'standard';
export type EffectSize = 'normal' | 'large';
export type AvatarSize = 'small' | 'medium' | 'large';
export type IconSize = 14 | 16 | 20 | 24 | 30 | 40 | 64;

export enum IconColor {
  LightGray = 'fill-slate-400',
  Gray = 'fill-slate-600',
  LightPink = 'fill-pink-500',
  Pink = 'fill-pink-600',
  DarkPink = 'fill-pink-900',
  Violet = 'fill-violet-600',
  DarkViolet = 'fill-violet-900',
  White = 'fill-violet-50',
}

export enum IconHoverColor {
  Gray = 'group-hover:fill-slate-600',
  LightPink = 'group-hover:fill-pink-500',
  Pink = 'group-hover:fill-pink-600',
  DarkPink = 'group-hover:fill-pink-900',
  Violet = 'group-hover:fill-violet-600',
  DarkViolet = 'group-hover:fill-violet-900',
  White = 'group-hover:fill-violet-50',
}

export enum TextColor {
  Gray = 'text-slate-600',
  LightGray = 'text-slate-400',
  LightPink = 'text-pink-500',
  Pink = 'text-pink-600',
  DarkPink = 'text-pink-900',
  Violet = 'text-violet-600',
  DarkViolet = 'text-violet-900',
  White = 'text-violet-50',
}

export enum TextHoverColor {
  Gray = 'hover:text-slate-600',
  LightPink = 'hover:text-pink-500',
  Pink = 'hover:text-pink-600',
  DarkPink = 'hover:text-pink-900',
  Violet = 'hover:text-violet-600',
  DarkViolet = 'hover:text-violet-900',
  White = 'text-violet-50',
}

export enum ActionBackGroundColor {
  Pink = 'hover:bg-pink-50',
  Violet = 'hover:bg-violet-50',
  DarkViolet = 'hover:bg-violet-900',
  Gray = 'hover:bg-slate-100',
  None = '',
}

export type TypographyTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'label-xl'
  | 'label-l'
  | 'label-m'
  | 'label-s'
  | 'paragraph-l'
  | 'paragraph-m'
  | 'placeholder';

export type ProfileHeaderType = 'POST' | 'REPLY' | 'CREATE-POST' | 'CREATE-REPLY' | 'PROFILE';
