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

export function isFileSizeValid(element: HTMLInputElement, allowedFileSize: number): boolean {
  const selectedFile = element.files?.item(0);
  return !!selectedFile && selectedFile.size <= allowedFileSize * 1000 * 1000;
}

export function isFileExtensionValid(element: HTMLInputElement, allowedExtensions: RegExp): boolean {
  const selectedFilePath = element.value;
  return !!selectedFilePath && !!selectedFilePath.match(allowedExtensions);
}

export const emailPattern = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
// eslint-disable-next-line no-useless-escape
export const passwordPattern = '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
export const defaultFileSize = 5;
export const defaultExtensions = /(\.jpg|\.jpeg|\.png)$/i;
