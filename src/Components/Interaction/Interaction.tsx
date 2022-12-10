import React, { FC } from "react";
import { Icon, IconColor, IconHoverColor } from "../Icon/Icon";

export enum TextColor {
  Gray = "text-slate-600",
  LightGray = "text-slate-400",
  LightPink = "text-pink-500",
  Pink = "text-pink-600",
  DarkPink = "text-pink-900",
  Violet = "text-violet-600",
  DarkViolet = "text-violet-900",
  White = "text-violet-50",
}

export enum TextHoverColor {
    Gray = "hover:text-slate-600",
    LightGray = "hover:text-slate-400",
    LightPink = "hover:text-pink-500",
    Pink = "hover:text-pink-600",
    DarkPink = "hover:text-pink-900",
    Violet = "hover:text-violet-600",
    DarkViolet = "hover:text-violet-900",
    White = "hover:text-violet-50",
  }

export enum BackGroundColor {
  Pink = "hover:bg-pink-50",
  Violet = "hover:bg-violet-50",
  Gray = "hover:bg-slate-100",
}

export type InteractionSize = "small" | "standard";

export interface InteractionProps {
  iconId: string;
  label: string;
  iconColor: IconColor;
  textColor: TextColor;
  iconHoverColor?: IconHoverColor;
  textHoverColor?: TextHoverColor;
  backgroundColor?: BackGroundColor;
  size?: InteractionSize;
  value?: number;
  onClickFn: () => void;
}

export const defaultInteractionProps: Partial<InteractionProps> = {
  size: "standard",
  iconColor: IconColor.Gray,
  textColor: TextColor.Gray,
};

export const Interaction: FC<InteractionProps> = ({
  iconId,
  label,
  iconColor,
  textColor,
  iconHoverColor,
  textHoverColor,
  backgroundColor,
  size,
  value,
  onClickFn,
}) => {
  return (
    <button
      onClick={onClickFn}
      className={`group flex items-center px-3 py-4  hover:border-1 hover:border-solid rounded-full ${textColor} ${textHoverColor} ${
        size === "standard" ? "h-4" : "h-2"
      } ${backgroundColor}`}
    >
      <Icon
        id={iconId}
        size={size === "standard" ? 16 : 12}
        color={iconColor}
        hoverColor={iconHoverColor}
      />
      <span className={`inline-block pl-1 text-inherit`}>{value}</span>
      <span
        className={`inline-block ${
          size === "standard" ? "pl-0.5" : ""
        } text-inherit`}
      >
        {label}
      </span>
    </button>
  );
};

Interaction.defaultProps = defaultInteractionProps;
