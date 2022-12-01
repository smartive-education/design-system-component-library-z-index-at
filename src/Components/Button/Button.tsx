import { FC, useState, useMemo } from "react";

export type ButtonProps = {
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
console.log(toggleClicked)
  return (
    <div className="flex flex-col">
      <button
        id={name}
        onClick={() => setToggleClicked(toggleClicked ? false : true)}
        className={`border border-solid border-slate-200 w-[178px] h-12 rounded-md
       hover:border-2 hover:border-violet-600 text-white
       focus:outline-none focus:border-2 focus:border-violet-600
       p-4
       leading-none ${typeClasses}`}
      >{label}</button>
    </div>
  );
};

Button.defaultProps = defaultProps

export default Button;
