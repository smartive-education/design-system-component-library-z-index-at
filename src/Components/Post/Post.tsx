import React, { FC, useRef } from 'react';
import { Like } from '../Interaction/Like/Like';
import { Share } from '../Interaction/Share/Share';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { Comment } from '../Interaction/Comment';
import { PostProps } from '../../models';
import { Typography } from '../Typography';

export const Post: FC<PostProps> = ({
  name = '',
  profileHeaderType,
  userName = '',
  postCreationTime,
  src,
  content,
  commentCount = 0,
  likeCount,
  isLiked,
  link,
  hashtags,
  children,
  copyLabel,
  copiedLabel,
  openProfile,
  comment,
  setIsLiked,
}) => {
  const ref = useRef(null);
  const handleOpenProfile = (): void => {
    openProfile(ref);
  };
  const handleComment = (): void => {
    comment(ref);
  };
  return (
    <div
      ref={ref}
      className={`relative py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent ${
        profileHeaderType === 'POST' || profileHeaderType === 'CREATE-POST'
          ? 'mt-4 rounded-xl'
          : 'border-b-2 border-slate-300'
      }`}
    >
      <div className="hidden md:block">
        <ProfileHeader
          name={name}
          type={profileHeaderType}
          userName={userName}
          postCreationTime={postCreationTime}
          src={src}
          openProfile={handleOpenProfile}
        />
      </div>
      <div className="block md:hidden">
        <ProfileHeader
          name={name}
          type={'REPLY'}
          userName={userName}
          postCreationTime={postCreationTime}
          src={src}
          openProfile={handleOpenProfile}
        />
      </div>
      <div className={`mb-4 ${profileHeaderType === 'POST' ? 'md:block' : 'hidden'}`}>
        <Typography type="paragraph-l">{content}</Typography>
      </div>
      <div className={`mb-4 ${profileHeaderType === 'REPLY' ? 'md:block' : 'hidden'}`}>
        <Typography type="paragraph-m">{content}</Typography>
      </div>
      {children && (
        <div className="relative h-80 flex justify-center mb-4 border-1 border-transparent rounded-xl overflow-hidden bg-violet-100">
          {children}
        </div>
      )}
      {hashtags && (
        <div className="mb-4">
          {hashtags.map((hashtag: string, index: number) => (
            <span className="mr-2 text-violet-600 md:text-2xl" key={index}>{`#${hashtag}`}</span>
          ))}
        </div>
      )}
      <div className="flex md:grid md:grid-cols-12 relative -left-3">
        <div className="md:col-span-4 truncate">
          <Comment value={commentCount} clickFn={handleComment} />
        </div>
        <div className="md:col-span-3 truncate">
          <Like value={likeCount} isLiked={isLiked} setIsLiked={setIsLiked} />
        </div>
        <div className="md:col-span-4">
          <Share value={link} label={copyLabel} copiedLabel={copiedLabel} />
        </div>
      </div>
    </div>
  );
};
