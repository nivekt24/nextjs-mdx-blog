import React from 'react';
import PostItem from './post-item';
import styles from './posts-grid.module.css';
import { PostData } from '@/lib/posts-util';

interface PostsGridProps {
  posts: PostData[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
