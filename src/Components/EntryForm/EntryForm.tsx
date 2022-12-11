import React, { useEffect, useState } from "react";
import { FC } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export interface FormProps {
  isRegistered: boolean;
  loginFn: () => void
  registerFn: () => void
}

//TODO: Translate texts
export const EntryForm: FC<FormProps> = ({ isRegistered }) => {
  const [showLogin, setShowLogin] = useState(isRegistered);

  useEffect(() => setShowLogin(() => isRegistered), [isRegistered]);

  const login = () => {
    // check form validity 
    // call login
  }
  const register = () => {
    // check form validity 
    // check if passwords match
    // call register
  }

  return (
    <div>
      {showLogin ? (
        <div>
          <h1>{"Login"}</h1>
          <form onSubmit={login}>
            <Input label="Email" type="email" required={true} />
            <Input label="Password" type="password" required={true} />
            <Button
              id="login-button"
              icon="mumble"
              type="submit"
              color="Gradient"
              label="Let's Mumble"
              size="M"
            ></Button>
          </form>
        </div>
      ) : (
        <div>
          <h1>{"Registrieren"}</h1>
          <form onSubmit={register}>
            <Input label="Vorname" type="text" required={false} />
            <Input label="User Name" type="text" required={true} />
            <Input label="Email" type="email" required={true} />
            <Input label="Password" type="password" required={true} />
            <Button
              id="register-button"
              icon="mumble"
              type="submit"
              color="Gradient"
              label="Let's Mumble"
              size="M"
            ></Button>
          </form>
        </div>
      )}
    </div>
  );
};
