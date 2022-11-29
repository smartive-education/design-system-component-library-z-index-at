import { FC, useState } from "react";
import { v4 as uuid } from "uuid";

export type InputProps = {
  label: string;
};

const Input: FC<InputProps> = ({ label }) => {
  const [value, setValue] = useState("");
  const inputId = uuid();

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="text-slate-700 font-semibold">{label}</label>
      <input
        id={inputId}
        type="text"
        onChange={(event) => setValue((event.target as HTMLInputElement).value)}
        value={value}
        className="border border-solid border-slate-200
       bg-slate-50 rounded-md 
       hover:border-2 hover:border-violet-600
       focus:outline-none focus:border-2 focus:border-violet-600
       p-4
       leading-none"
      />
    </div>
  );
};

export default Input;
