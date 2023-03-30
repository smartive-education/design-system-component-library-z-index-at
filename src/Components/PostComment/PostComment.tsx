import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { PostCommentProps } from '../../models';
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

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const comment = (form.elements.namedItem('post-comment') as HTMLInputElement).value;
    onSubmit(file, comment);
    (form.elements.namedItem('post-comment') as HTMLInputElement).value = '';
    setFile(() => undefined);
  };

  useEffect(() => {
    if (!file) ((formRef.current as HTMLFormElement).elements.namedItem('post-comment') as HTMLInputElement).value = '';
  }, [file]);

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
          <Input type="textarea" label="Textarea" name="post-comment" placeholder={placeholder} required></Input>
        </div>
        <div>
          <ButtonGroup LLabel={LLabel} RLabel={RLabel} LOnClick={() => setIsModalOpen(true)} />
        </div>
      </form>
      <FileUploadModal isOpen={isModalOpen} closeFn={() => setIsModalOpen(false)} submitFn={(file) => setFile(file)} />
    </div>
  );
};
