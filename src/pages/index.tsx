import Head from 'next/head';
import { Hero } from '@/components/hero';
import FeaturedPosts from '@/components/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';
import { PostData } from '@/lib/posts-util';

interface HomeProps {
  posts: PostData[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Kevin&apos;s Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
