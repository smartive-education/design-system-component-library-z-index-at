import React, { FC } from "react";
import { Icon, IconColor } from "../Icon/Icon";

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

export type InteractionSize = "small" | "standard";

export interface InteractionProps {
  iconId: string;
  label: string;
  iconColor: IconColor;
  textColor: TextColor;
  size?: InteractionSize;
  value?: number;
  onClickFn: () => {};
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
  size,
  textColor,
  value,
  onClickFn,
}) => {

  
    
  return (
    <button onClick={onClickFn} className={`flex items-center ${size === "standard" ? "h-4" : "h-2"}`} >
      <Icon id={iconId} size={size === "standard" ? 16 : 12} color={iconColor} />
      <span className={`inline-block pl-1 ${textColor}`}>{value}</span>
      <span className={`inline-block ${size === "standard" ? "pl-0.5" : ""} ${textColor}`}>{label}</span>
    </button>
  );
};

Interaction.defaultProps = defaultInteractionProps;
