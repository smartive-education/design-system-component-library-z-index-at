import React, { FC } from 'react';
import { Input } from '../../Input';
import { Modal } from '../Modal';

export interface SettingsModalProps {
  isOpen: boolean;
  close: () => void;
  submit: () => void;
}

export const SettingsModal: FC<SettingsModalProps> = ({ isOpen, close, submit }) => {
  return (
    <Modal isOpen={isOpen} title="Einstellungen" close={close} submit={submit}>
      <form className="mb-6" noValidate>
        <h3 className="mb-4 font-semibold text-2xl">{'Persönliche Einstellungen'}</h3>
        <div className="mb-6">
          <Input key="settings-name" name="settings-name" label="Name Vorname" type="text" required={false} />
          <Input
            key="settings-email"
            name="settings-email"
            label="Email Addresse"
            type="email"
            required={true}
            pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
          <Input key="settings-location" name="settings-location" label="Ortschaft" type="text" required={false} />
          <Input key="settings-bio" name="settings-bio" label="Biografie" type="text" required={false} />
        </div>
        <div className="mb-4">
        <h3 className="mb-6 font-semibold text-2xl">{'Passwort Ändern'}</h3>
          <Input
            key="old-password"
            name="old-password"
            label="Altes Passwort"
            type="password"
            required={true}
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          />
          <Input
            key="new-password"
            name="new-password"
            label="Neues Passwort"
            type="password"
            required={true}
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          />
        </div>
      </form>
    </Modal>
  );
};
