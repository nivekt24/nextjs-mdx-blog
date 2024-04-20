import PostContent from '@/components/post-content';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PostData } from '@/lib/posts-util';

interface PostDetailPageProps {
  post: PostData;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context
) => {
  const { params } = context;
  const { slug } = params!;

  if (!slug || Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
