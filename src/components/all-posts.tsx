import PostsGrid from './posts-grid';
import styles from './all-posts.module.css';
import { PostData } from '@/lib/posts-util';

interface AllPostsProps {
  posts: PostData[];
}

function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
