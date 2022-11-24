import React, {
  useState,
  useCallback,
} from 'react';

const Input = (label: string) => {
  const [value, setValue] = useState('')
  const handleChage = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const x = event?.target as HTMLInputElement
    setValue(x.value)
  }, [])

  return (
    <input
      type="text"
      onChange={handleChage}
      value={value}
      />
  )
}

export default Input
