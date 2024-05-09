import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helper';

import PostHero from '../../components/PostHero';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);
  return (
    <article className={styles.wrapper}>
      <PostHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
