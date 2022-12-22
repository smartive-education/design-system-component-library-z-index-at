export function getTranslationKeyForError(element: HTMLInputElement): string {
  const errors: Record<string, string> = {
    valueMissing: 'error.validation.valueMissing',
    tooLong: 'error.validation.tooLong',
    tooShort: 'error.validation.tooShort',
    typeMismatch: 'error.validation.typeMismatch',
    patternMismatch: 'error.validation.patternMismatch',
  };

  const translationKey = Object.keys(errors).find((key: string) => element.validity[key as keyof ValidityState]);
  return translationKey ? errors[translationKey] : 'error.validation.unknown';
}

export const emailPattern = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
// eslint-disable-next-line no-useless-escape
export const passwordPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"