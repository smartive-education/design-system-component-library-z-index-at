import React, { FC } from 'react';
import { Like } from '../Interaction/Like/Like';
import { Share } from '../Interaction/Share/Share';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { Comment } from '../Interaction/Comment';

export interface PostProps {
  name: string;
  userName: string;
  postCreationTime: string;
  content: string;
  commentCount: number;
  likeCount: number;
  isLiked: boolean;
  link: string;
  hashtags: string[];
  pictureSrc?: string;
}

export const Post: FC<PostProps> = ({
  name,
  userName,
  postCreationTime,
  content,
  commentCount,
  likeCount,
  isLiked,
  link,
  hashtags,
  pictureSrc,
}) => {
  return (
    <div className='py-8 px-12'>
        <ProfileHeader name={name} userName={userName} postCreationTime={postCreationTime} />
        <p className='py-4'>{content}</p>
        <div className='flex relative -left-3'>
            <Comment value={commentCount}/>
            <Like value={likeCount} isLiked={isLiked} />
            <Share value={link} />
        </div>
    </div>
  );
};
