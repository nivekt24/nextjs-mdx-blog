import AllPosts from '@/components/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

export default function AllPostsPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
