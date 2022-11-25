import React, {
  useState
} from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      onChange={event => setValue((event.target as HTMLInputElement).value)}
      value={value}
      />
  )
}

export default Input;
