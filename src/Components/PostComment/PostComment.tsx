import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { PostCommentProps } from '../../models';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Input } from '../Input';
import { FileUploadModal } from '../Modal/FileUploadModal';
import { ProfileHeader } from '../Post/ProfileHeader';

export const PostComment: FC<PostCommentProps> = ({
  name,
  profileHeaderType,
  userName,
  src,
  postCreationTime,
  placeholder = 'Was meinst du dazu?',
  LLabel = 'Bild hochladen',
  RLabel = 'Senden',
  openProfile,
  onSubmit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, resetForm] = useState(false); // otherwise no re-render is triggered when form is reset
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const comment = (form.elements.namedItem('post-comment') as HTMLInputElement).value;
    setDisabled(() => true);
    onSubmit(file, comment)
      .then(() => {
        setFile(() => undefined);
        setDisabled(() => false);
        resetForm((state) => !state);
      })
      .catch((error) => {
        setDisabled(() => false);
        throw error;
      });
  };

  useEffect(() => {
    ((formRef.current as HTMLFormElement).elements.namedItem('post-comment') as HTMLInputElement).value = '';
  }, [form]);

  return (
    <div
      className={`py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent lg:max-w-3xl ${
        profileHeaderType !== 'CREATE-REPLY' ? 'rounded-xl mt-4' : 'rounded-t-xl mt-4 border-b-2 border-slate-300'
      }`}
    >
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
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
          <Input type="textarea" label="" name="post-comment" placeholder={placeholder} required></Input>
        </div>
        <div>
          <ButtonGroup>
            <Button label={LLabel} icon="upload" color="Slate" size="M" onClick={() => setIsModalOpen(true)}></Button>
            <Button label={RLabel} icon="send" color="Violet" size="M" type="submit" disabled={disabled}></Button>
          </ButtonGroup>
        </div>
      </form>
      <FileUploadModal isOpen={isModalOpen} closeFn={() => setIsModalOpen(false)} submitFn={(file) => setFile(file)} />
    </div>
  );
};
