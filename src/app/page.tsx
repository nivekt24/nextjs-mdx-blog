import React from 'react';

import Hero from '../components/Hero';

import { getBlogPostList } from '@/helpers/file-helper';

import styles from './homepage.module.css';
import PostItem from '../components/PostItem';

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <Hero />
      <h1 className={styles.mainHeading}>Featured Posts</h1>

      {blogPosts.map(({ slug, ...delegated }) => (
        <PostItem key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
