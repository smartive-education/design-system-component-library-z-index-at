import React, { FC } from 'react';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

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
    <div>
        <ProfileHeader name={name} userName={userName} postCreationTime={postCreationTime} />
    </div>
  );
};
