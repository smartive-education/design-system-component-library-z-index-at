import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export interface FormProps {
  isRegistered: boolean;
  loginFn: () => void;
  registerFn: () => void;
}

//TODO: Translate texts
export const EntryForm: FC<FormProps> = ({ isRegistered }) => {
  const [showLogin, setShowLogin] = useState(isRegistered);

  useEffect(() => setShowLogin(() => isRegistered), [isRegistered]);

  const login = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      console.log(`Name: ${(form.elements.namedItem('login-email') as HTMLInputElement).value}`);
      console.log(`Name: ${(form.elements.namedItem('login-password') as HTMLInputElement).value}`);
    }
  };
  const register = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      console.log(`Name: ${(form.elements.namedItem('register-name') as HTMLInputElement).value}`);
      console.log(`Name: ${(form.elements.namedItem('register-user') as HTMLInputElement).value}`);
      console.log(`Name: ${(form.elements.namedItem('register-email') as HTMLInputElement).value}`);
      console.log(`Name: ${(form.elements.namedItem('register-password') as HTMLInputElement).value}`);
    }
  };

  const changeLayout = () => {
    setShowLogin((showLogin) => !showLogin);
  };

  return (
    <div>
      {showLogin ? (
        <div>
          <form onSubmit={login} className="grid sm:grid-cols-5 mb-6" noValidate>
            <h1 className="sm:col-start-2 sm:col-end-5 mb-6 font-bold text-5xl">{'Anmelden'}</h1>
            <div className="sm:col-start-2 sm:col-end-5 mb-6">
              <Input
                key="login-email"
                name="login-email"
                label="Email"
                type="email"
                required={true}
                pattern={"[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"}
              />
              <Input
                key="login-password"
                name="login-password"
                label="Password"
                type="password"
                required={true}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              />
            </div>
            <div className="sm:col-start-2 sm:col-end-5">
              <Button
                id="login-button"
                icon="mumble"
                type="submit"
                color="Gradient"
                label="Let's Mumble"
                size="L"
              ></Button>
            </div>
          </form>
          <div className="flex justify-center">
            <span className="mr-1">{'Noch kein Account?'}</span>
            <button className="underline text-violet-600" onClick={changeLayout}>
              {'Jetzt registrieren'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={register} className="grid sm:grid-cols-5 mb-6" noValidate>
            <h1 className="sm:col-start-2 sm:col-end-5 mb-6 font-bold text-5xl">{'Registrieren'}</h1>
            <div className="sm:col-start-2 sm:col-end-5 mb-6">
              <Input key="register-name" name="register-name" label="Name" type="text" required={false} />
              <Input key="register-user" name="register-user" label="User Name" type="text" required={true} />
              <Input
                key="register-email"
                name="register-email"
                label="Email"
                type="email"
                required={true}
                pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              />
              <Input
                key="register-password"
                name="register-password"
                label="Password"
                type="password"
                required={true}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              />
            </div>
            <div className="sm:col-start-2 sm:col-end-5">
              <Button
                id="login-button"
                icon="mumble"
                type="submit"
                color="Gradient"
                label="Let's Mumble"
                size="L"
              ></Button>
            </div>
          </form>
          <div className="flex justify-center">
            <span className="mr-1">{'Bereits registriert?'}</span>
            <button className="underline text-violet-600" onClick={changeLayout}>
              {'Jetzt anmelden'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
