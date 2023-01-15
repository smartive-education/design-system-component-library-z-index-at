import React, { FC, useState } from 'react';
import { ProfileHeader } from '../Post/ProfileHeader';
import { ButtonGroup } from '../ButtonGroup'
import { FileUploadModal } from '../Modal/FileUploadModal';
import { PostCommentProps } from '../../models';

export const PostComment: FC<PostCommentProps> = ({
  name,
  userName,
  src,
  postCreationTime,
  openProfile,
  ROnClick,
}) => {
  const [uploadModal, setUploadModal] = useState(false)
  return (
    <div className="py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent rounded-xl lg:max-w-3xl">
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
        <textarea className="bg-slate-100 w-full p-5 text-slate-600" rows={8}></textarea>
      </div>
      <div>
        <ButtonGroup
          LLabel="Bild Hochladen"
          RLabel="Senden"
          LId="33"
          RId="55"
          LOnClick={() => setUploadModal(true)}
          ROnClick={ROnClick}
        />
        <FileUploadModal
          isOpen={uploadModal}
          closeFn={() => setUploadModal(false)}
          submitFn={() => { console.log('Upload Image') }}
          />
      </div>
    </div>
  );
};
