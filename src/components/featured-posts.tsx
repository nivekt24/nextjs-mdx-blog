import PostsGrid from './posts-grid';
import styles from './featured-posts.module.css';
import { PostData } from '@/lib/posts-util';

interface FeaturedPostsProps {
  posts: PostData[];
}

function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
