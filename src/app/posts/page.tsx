import React from 'react';

import { getBlogPostList } from '@/helpers/file-helper';

import styles from './post.module.css';
import PostItem from '../../components/PostItem';

async function Posts() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      {blogPosts.map(({ slug, ...delegated }) => (
        <PostItem key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Posts;
