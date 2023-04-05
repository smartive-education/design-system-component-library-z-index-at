import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { PostCommentProps } from '../../models';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { FileUploadModal } from '../Modal/FileUploadModal';
import { ProfileHeader } from '../Post/ProfileHeader';

export const PostComment: FC<PostCommentProps> = ({
  name,
  textValue,
  fileValue,
  profileHeaderType,
  userName,
  src,
  postCreationTime,
  isDisabled,
  placeholder = 'Was meinst du dazu?',
  LLabel = 'Bild hochladen',
  RLabel = 'Senden',
  onChange,
  openProfile,
  onSubmit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | undefined>(fileValue);
  const [text, setText] = useState<string>(textValue);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    onSubmit(file, text);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
    onChange(event);
  };

  useEffect(() => {
    setFile(fileValue);
  }, [fileValue]);
  useEffect(() => {
    setText(textValue);
  }, [textValue]);

  return (
    <div
      className={`py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent lg:max-w-3xl ${
        profileHeaderType !== 'CREATE-REPLY' ? 'rounded-xl mt-4' : 'rounded-t-xl mt-4 border-b-2 border-slate-300'
      }`}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="hidden md:block">
          <ProfileHeader
            name={name}
            userName={userName}
            postCreationTime={postCreationTime}
            src={src}
            type={profileHeaderType}
            openProfile={openProfile}
          />
        </div>
        <div className="block md:hidden">
          <ProfileHeader
            name={name}
            userName={userName}
            postCreationTime={postCreationTime}
            src={src}
            type={'CREATE-REPLY'}
            openProfile={openProfile}
          />
        </div>
        <div className="mb-4">
          <textarea
            value={text}
            onChange={handleChange}
            rows={4}
            name="post-comment"
            placeholder={placeholder}
            required
            className="w-full border-solid border-slate-200
       bg-slate-50 rounded-md p-4 leading-none border-2 hover:border-2 hover:border-violet-600 focus:outline-none focus:border-2 focus:border-violet-600"
          />
        </div>
        <div>
          <ButtonGroup>
            <Button label={LLabel} icon="upload" color="Slate" size="M" onClick={() => setIsModalOpen(true)}></Button>
            <Button label={RLabel} icon="send" color="Violet" size="M" type="submit" disabled={isDisabled}></Button>
          </ButtonGroup>
        </div>
      </form>
      <FileUploadModal isOpen={isModalOpen} closeFn={() => setIsModalOpen(false)} submitFn={(file) => setFile(file)} />
    </div>
  );
};
