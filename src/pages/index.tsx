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
