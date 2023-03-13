import React, { FC } from 'react';
import { Like } from '../Interaction/Like/Like';
import { Share } from '../Interaction/Share/Share';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { Comment } from '../Interaction/Comment';
import { PostProps } from '../../models';
import { Typography } from '../Typography';

export const Post: FC<PostProps> = ({
  name,
  profileHeaderType,
  userName,
  postCreationTime,
  src,
  content,
  commentCount,
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
  return (
    <div
      className={`relative py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent rounded-xl lg:max-w-3xl ${
        profileHeaderType === 'POST' ? 'mt-4' : ''
      }`}
    >
      <div className="hidden md:block">
        <ProfileHeader
          name={name}
          type={profileHeaderType}
          userName={userName}
          postCreationTime={postCreationTime}
          src={src}
          openProfile={openProfile}
        />
      </div>
      <div className="block md:hidden">
        <ProfileHeader
          name={name}
          type={'REPLY'}
          userName={userName}
          postCreationTime={postCreationTime}
          src={src}
          openProfile={openProfile}
        />
      </div>
      <div className={`mb-4 ${profileHeaderType === 'POST' ? 'md:block' : 'hidden'}`}>
        <Typography type="paragraph-l">{content}</Typography>
      </div>
      <div className={`mb-4 ${profileHeaderType === 'REPLY' ? 'md:block' : 'hidden'}`}>
        <Typography type="paragraph-m">{content}</Typography>
      </div>
      {children && (
        <div className="relative mb-4 h-80 w-full border-1 border-transparent rounded-xl overflow-hidden object-contain">
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
          <Comment value={commentCount} clickFn={comment} />
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
