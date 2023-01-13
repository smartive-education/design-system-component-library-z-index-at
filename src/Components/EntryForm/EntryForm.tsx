import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { defaultErrorMessages, emailPattern, passwordPattern } from '../Input/input-validation.helpers';
import { FormProps } from '../../models';
import { Typography } from '../Typography';

export const EntryForm: FC<FormProps> = ({
  isRegistered,
  errorTranslations = defaultErrorMessages,
  loginFn,
  registerFn,
}) => {
  const [isLogin, setIsLogin] = useState(isRegistered);
  const [validationTrigger, setValidationTrigger] = useState(0);

  useEffect(() => setIsLogin(() => isRegistered), [isRegistered]);

  const login = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setValidationTrigger((trigger) => trigger + 1);
    if (form.checkValidity()) {
      loginFn(form);
    }
  };
  const register = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setValidationTrigger((trigger) => trigger + 1);
    if (form.checkValidity()) {
      registerFn(form);
    }
  };

  const changeLayout = (): void => {
    setIsLogin((isLogin) => !isLogin);
    setValidationTrigger(() => 0);
  };

  return (
    <>
      {isLogin ? (
        <div>
          <form onSubmit={login} className="grid sm:grid-cols-5 mb-6" noValidate>
            <h1 className="sm:col-start-2 sm:col-end-5 mb-6 font-bold text-5xl">Anmelden</h1>
            <div className="sm:col-start-2 sm:col-end-5 mb-6">
              <Input
                key="login-email"
                name="login-email"
                label="Email"
                type="email"
                required={true}
                validationTrigger={validationTrigger}
                pattern={emailPattern}
                errorTranslations={errorTranslations}
              />
              <Input
                key="login-password"
                name="login-password"
                label="Password"
                type="password"
                required={true}
                validationTrigger={validationTrigger}
                pattern={passwordPattern}
                errorTranslations={errorTranslations}
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
            <div className="sm:col-start-2 sm:col-end-5 mb-6 ">
              <Typography type="h1">Registrieren</Typography>
            </div>
            <div className="sm:col-start-2 sm:col-end-5 mb-6">
              <Input
                key="register-name"
                name="register-name"
                label="Name"
                type="text"
                required={false}
                validationTrigger={validationTrigger}
                errorTranslations={errorTranslations}
              />
              <Input
                key="register-user"
                name="register-user"
                label="User Name"
                type="text"
                required={true}
                validationTrigger={validationTrigger}
                errorTranslations={errorTranslations}
              />
              <Input
                key="register-email"
                name="register-email"
                label="Email"
                type="email"
                required={true}
                validationTrigger={validationTrigger}
                pattern={emailPattern}
                errorTranslations={errorTranslations}
              />
              <Input
                key="register-password"
                name="register-password"
                label="Password"
                type="password"
                required={true}
                validationTrigger={validationTrigger}
                pattern={passwordPattern}
                errorTranslations={errorTranslations}
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
    </>
  );
};
