import React, { FC, FormEvent, useState } from 'react';
import { ProfileHeader } from '../Post/ProfileHeader';
import { ButtonGroup } from '../ButtonGroup';
import { FileUploadModal } from '../Modal/FileUploadModal';
import { PostCommentProps } from '../../models';
import { Input } from '../Input';

export const PostComment: FC<PostCommentProps> = ({
  name,
  userName,
  src,
  postCreationTime,
  placeholder = 'Was meinst du dazu?',
  LLabel = 'Build hochladen',
  RLabel = 'Senden',
  openProfile,
  onSubmit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File>();

  const handleSubmit = (event: FormEvent): void => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    onSubmit(file, form);
  };

  return (
    <div className="py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent rounded-xl lg:max-w-3xl">
      <form onSubmit={handleSubmit} noValidate>
        <div className="hidden md:block">
          <ProfileHeader
            name={name}
            userName={userName}
            postCreationTime={postCreationTime}
            src={src}
            size="medium"
            openProfile={openProfile}
          />
        </div>
        <div className="block md:hidden">
          <ProfileHeader
            name={name}
            userName={userName}
            postCreationTime={postCreationTime}
            src={src}
            size="small"
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
