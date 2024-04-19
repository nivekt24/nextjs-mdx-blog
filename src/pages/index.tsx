import { Hero } from '@/components/hero';
import FeaturedPosts from '@/components/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

export default function Home({ posts }) {
  return (
    <>
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
