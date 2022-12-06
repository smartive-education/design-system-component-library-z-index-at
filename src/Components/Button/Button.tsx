import React, { FC, useState, useMemo } from "react";
import Icon from "../Icon";

type ButtonProps = {
    name: string;
    label: string;
    type?: string,
    size?: string,
    onClick: () => {}
};

const defaultProps: Partial<ButtonProps> = {
    type: 'Slate',
    size: 'L',
}

const Button: FC<ButtonProps> = ({
    label,
    name,
    type,
    size,
    onClick,
 }) => {
  const [toggleClicked, setToggleClicked] = useState(false);

  const typeClasses = useMemo(() => {
    if(type === 'Violet') {
        return 'bg-violet-600'
    }
    if(type === 'Gradient') {
        return 'bg-gradient-to-r from-pink-600 to-violet-600'
    }
    return 'bg-slate-600'
  }, [type])

  const sizeClasses = useMemo(() => {
    if(size === 'M') {
        return {
            button: 'w-[150px] h-10',
            text: 'pt-1.5 pl-1.5 pb-1.5 pr-2',
        }
    }
    return {
        button:'w-[178px] h-12',
        text: 'pt-3 pl-3 pb-3 pr-4',
    }
  }, [size])

  return (
    <div className="flex flex-col">
        <button
        id={name}
        onClick={() => setToggleClicked(toggleClicked ? false : true)}
        className={`border border-solid border-slate-200 rounded-md
        hover:border-2 hover:border-violet-600 text-white
        focus:outline-none focus:border-2 focus:border-violet-600
        leading-none ${typeClasses} ${sizeClasses.button}`}
      >
            <div className="flex place-content-center items-center">
                <div className={`fwhitespace-nowrap ${sizeClasses.text}`}>{label}</div>
                <div className="w-4 h-4">
                <Icon
                    id= "mumble"
                    size={16}
                    color= '#fff'/>
                </div>
            </div>
        </button>
    </div>
  );
};

Button.defaultProps = defaultProps

export default Button;
